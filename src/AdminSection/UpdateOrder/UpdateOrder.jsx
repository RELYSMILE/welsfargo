import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context';
import { useParams } from 'react-router-dom';
import { auth, db } from '../../firebase/config';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';
import PageTitle from '../Components/PageTitle';
import Loading from '../Components/Loading';
import { toast } from 'react-toastify';
import save from '../../assets/icons/save.png'
import '../NewShipmentSection/NewShipment.css'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';

const UpdateOrder = () => {
        const {settings} = useContext(AppContext)
        const [pageTitle, setPageTitle] = useState('Update Delivery')
        const [isLoading, setIsLoading] = useState(false)
        const [shipmentCredentials, setShipmentCredentials] = useState({})
        const [order, setOrder] = useState({})
        const {orderID} = useParams()
    
        const HandleShipmentCredentials = (e) => {
            setShipmentCredentials({...shipmentCredentials, [e.target.name]: e.target.value})
        }

        const handleUpdateOrder = async() => {
            setIsLoading(true)
            try{
                await updateDoc(doc(db, 'orders', orderID), {
                    packageInfo: shipmentCredentials?.packageInfo || order?.packageInfo,
                    deliveryRange: shipmentCredentials?.deliveryRange || order?.deliveryRange,
                    clientName: shipmentCredentials?.name || order?.clientName,
                    clientAddress: shipmentCredentials?.address || order?.clientAddress,
                    updatedAt: serverTimestamp()
                })
                toast.success('Your order was updated successfully.', {
                    toastId: 1,
                })
            }catch(err){
                console.log(err)
                toast.warning('error occured, try again', {
                    toastId: 1,
                })
            }finally{
                setIsLoading(false)
            }
        }
    
        useEffect(() => {
            const fetchOrder = async() => {
                try{
                    const orderRef = await getDoc(doc(db, 'orders', orderID))
                    if(orderRef){
                        setOrder(orderRef.data())
                    }else{
                        console.log('no user')
                    }
                }catch(err){
                    console.log(err)
                }
            }

            fetchOrder()
        }, [orderID])
  return (
        <div className='new-book-container'>
     <NavBar />

     <div className='new-book'>
            <div id='scroll-bg-screen' className='title-add-book'>
                <div className='PageTitle'><PageTitle pageTitle = {pageTitle} /></div>
                <div className='add'><Link className='add-link' to='/delevery management'>Order Center</Link></div>
            </div>
        {settings?.isUpdateOrderPanelActive?
        <div className='form-container'>
            <div className='form-field'>
                <label className='label' htmlFor="">Delivery Range</label>
                <input className='empty-input' style={{textTransform: 'capitalize'}} onChange={(e) => HandleShipmentCredentials(e)} type="text" name='deliveryRange' placeholder={order.deliveryRange} />
            </div>
            <div className='form-field'>
                <label className= 'label' htmlFor="">Package information</label>
                <input onChange={(e) => HandleShipmentCredentials(e)} type="text" name='packageInfo' placeholder={order?.packageInfo} />
            </div>
            <div className='form-field'>
                <label className='label' htmlFor="">Client name</label>
                <input onChange={(e) => HandleShipmentCredentials(e)} type="text" name='name' placeholder={order?.clientName} />
            </div>
            <div className='form-field'>
                <label className='label' htmlFor="">Address</label>
                <input onChange={(e) => HandleShipmentCredentials(e)} type="text" name='address' placeholder={order?.clientAddress} />
            </div>

            <button onClick={handleUpdateOrder} className={isLoading? 'disabled':'save-container'}>
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
  )
}

export default UpdateOrder