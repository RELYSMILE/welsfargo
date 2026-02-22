import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/Context';
import { auth, db } from '../../firebase/config';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';
import Loading from '../Components/Loading';
import { toast } from 'react-toastify';
import save from '../../assets/icons/save.png'
import './NewShipment.css'
import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore';

const NewShipment = () => {
    const {settings} = useContext(AppContext)
    const [pageTitle, setPageTitle] = useState('Schedule Delivery')
    const [isLoading, setIsLoading] = useState(false)
    const [shipmentCredentials, setShipmentCredentials] = useState({})
    const [generatedTrackingId, setGeneratedTrackingId] = useState('')
    const [isGenerateTrackingNumberButtonClicked, setIsGenerateTrackingNumberButtonClicked] = useState(false)
    const [isTrackingIdGenerating, setIsTrackingIdGenerating] = useState(false)

    const HandleShipmentCredentials = (e) => {
        setShipmentCredentials({...shipmentCredentials, [e.target.name]: e.target.value})
    }

    const GenerateTrackingId = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleGenerateTrackingId = () => {
        setIsTrackingIdGenerating(true)
        setIsGenerateTrackingNumberButtonClicked(true)
        const timer = setTimeout(() => {
            setGeneratedTrackingId('BL'+GenerateTrackingId(999, 100)+GenerateTrackingId(999, 100)+GenerateTrackingId(999, 100)+GenerateTrackingId(999, 100))
            setIsTrackingIdGenerating(false)
            clearInterval(timer)
        }, 3000);
    }

    const handleCreateOrder = async() => {
        setIsLoading(true)
        try{
            if(shipmentCredentials.deliveryRange === undefined || shipmentCredentials.packageInfo === undefined || shipmentCredentials.name === undefined || shipmentCredentials.address === undefined){
                
                toast.warning('Incomplete form detected. Please provide all necessary details.', {
                    toastId: 1,
                })
            }if (!isGenerateTrackingNumberButtonClicked) {
                toast.warning('No tracking ID detected. Kindly generate one to continue.', {
                    toastId: 1,
                    theme: 'dark'
                })
            } else {
                const dataBaseRef = collection(db, 'orders')
                const newDocRef = doc(dataBaseRef)
                const queryDB = query(dataBaseRef, where('trackingNumber', '==', generatedTrackingId))
                const queryResult = await getDocs(queryDB)
                if(queryResult.empty){
                    setDoc(newDocRef, {
                        orderID: newDocRef.id,
                        trackingNumber: generatedTrackingId,
                        packageInfo: shipmentCredentials?.packageInfo,
                        deliveryRange: shipmentCredentials?.deliveryRange,
                        clientName: shipmentCredentials?.name,
                        clientAddress: shipmentCredentials?.address,
                        createdAt: serverTimestamp()
                    })
                    toast.success('Your order was created successfully.', {
                        toastId: 1,
                    })
                }else{
                    toast.error('Tracking number already exists. Please generate a new one. Error 409', {
                        toastId: 1,
                    })
                }
            }

        }catch(error){
            console.log(error)
            toast.warning('error occured', {
                toastId: 1,
                theme: 'dark',
            })
        }finally{
            setIsLoading(false)
        }
    }
    

return <>
    <div className='new-book-container'>
     <NavBar />

     <div className='new-book'>
            <div id='scroll-bg-screen' className='title-add-book'>
                <div className='PageTitle'><PageTitle pageTitle = {pageTitle} /></div>
                <div className='add'><Link className='add-link' to='/delevery management'>Order Center</Link></div>
            </div>
        {settings?.isCreateOrderPanelActive?
        <div className='form-container'>
            <div className='form-field'>
                <label className='label' htmlFor="">Delivery Range</label>
                <input className='empty-input' style={{textTransform: 'capitalize'}} onChange={(e) => HandleShipmentCredentials(e)} type="text" name='deliveryRange' placeholder='December 02, 2025 - December 22, 2025' />
            </div>
            <div className='form-field'>
                <label className= 'label' htmlFor="">Package information</label>
                <input onChange={(e) => HandleShipmentCredentials(e)} type="text" name='packageInfo' placeholder='Apple Iphone 14 Pro Max' />
            </div>
            <div className='form-field'>
                <label className='label' htmlFor="">Client name</label>
                <input onChange={(e) => HandleShipmentCredentials(e)} type="text" name='name' placeholder='Ethan Carter' />
            </div>
            <div className='form-field'>
                <label className='label' htmlFor="">Address</label>
                <input onChange={(e) => HandleShipmentCredentials(e)} type="text" name='address' placeholder='4278 Willowbrook Avenue, Charlotte, NC 28205' />
            </div>
            <div className='form-field'>
                <div className='generate-id'>
                    <label className='label' htmlFor="">Tracking number</label>
                    <button disabled={isTrackingIdGenerating} className={isTrackingIdGenerating? 'disabled':'save-container'} onClick={handleGenerateTrackingId}>{isTrackingIdGenerating? 'wait...' : 'Generate'}</button>
                </div>
                    <div className='track-id-Label'>{isTrackingIdGenerating? 'Randomization in progress...' : generatedTrackingId? generatedTrackingId : 'Click generate to get tracking number'}</div>
            </div>

            <button onClick={handleCreateOrder} className={isLoading? 'disabled':'save-container'}>
                <img src={save} alt="" />
                <div className='save'>{isLoading? 'Saving...' : 'Save'}</div>
            </button>
        </div>
        :
        <div
            style={{
                padding: '18px 22px',
                borderRadius: '10px',
                backgroundColor: '#fff4f4',
                color: '#8a1f1f',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #f1c2c2',
                lineHeight: '1.6',
                maxWidth: '520px',
                margin: '40px auto',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            }}
            >
            This page has been temporarily disabled by the Super Administrator.  
            To proceed, please enable access from the settings panel or contact an administrator for assistance.
        </div>

        }
        {isLoading && <div className='loading-spinner'> <Loading /> </div>}
     </div>
  </div>
</>}

export default NewShipment