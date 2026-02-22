import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase/config';
import PublicNavigation from '../../Components/PublicNavigation'
import { toast } from 'react-toastify';
import ShipmentSnippet from '../../Components/ShipmentSnippet'
import Footer from '../../Components/Footer/Footer'
import TrackingSpinner from '../../Components/TrackingSpinner'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import track_shipment_01 from '../../assets/icons/track-shipment-01.png'
import '../AirFreightSection/AirFreight.css'
import './TrackShipment.css'
import { collection, getDocs, query, where } from 'firebase/firestore';

const TrackShipment = () => {
        const [isNavBgVisible, setIsNavBgVisible] = useState(false)
        const [trackingID, setTrackingID] = useState('')
        const [isTrackingIdEmpty, setIsTrackingIdEmpty] = useState(false);
        const [isLoading, setIsLoading] = useState(false)
        const [isTrackingInProgress, setIsTrackingInProgress] = useState(false)
        const [isShipmentSnippetComponetActive, setIsShipmentSnippetComponetActive] = useState(false)
        const [order, setOrder] = useState({})

        const handleTrackShipment = async() => {
            if(trackingID ===''){
                setIsTrackingIdEmpty(true)
                setIsTrackingInProgress(false)
                setIsShipmentSnippetComponetActive(false)
                toast.warning('Action blocked - tracking number field cannot be empty.', {
                  toastId: 1,
                  theme: 'dark',
                })
            }else{
                setIsTrackingIdEmpty(false)
                setIsTrackingInProgress(true)
                
                try{
                  const databaseRef = collection(db, 'orders')
                  const Query = query(databaseRef, where('trackingNumber', '==', trackingID))
                  const result = await getDocs(Query)
                  if(!result.empty){
                    setOrder(result.docs[0].data())
                    setIsShipmentSnippetComponetActive(true)
                    toast.success('Tracking number verified. Proceeding with your shipment details.', {
                      toastId: 1,
                    })
                  }else{
                    toast.error('Invalid tracking number. Please check and try again.', {
                      toastId: 1,
                    })
                  }
                }catch(error){
                  console.log(error)
                }finally{
                  setIsTrackingInProgress(false)
                }
            }
        }

        const handleCloseShipmentSnippetComponent = () => {
          setIsShipmentSnippetComponetActive(false)
        }

        useEffect(() => {
          AOS.init({
            duration: 2000,
            once: true,
          });
          const WindowScrollY = () => {
            console.log(window.scrollY)
            if(window.scrollY >= 90){
              setIsNavBgVisible(true)
            }else{
              setIsNavBgVisible(false)
            }
        }
        window.addEventListener('scroll', WindowScrollY)
      
          return() => {
            window.removeEventListener('scroll', WindowScrollY)
          }
        }, []);
  return (
    <div className='air-freight trak-shipment'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='air-freight-hero-section'>
        <h1 data-aos="fade-up">Track Shipment</h1>
        <div data-aos='fade-up' className='quick-link'>
            <Link to={'/'} className='home'>Home</Link>
            <div className='bage'>
                <div className='bage-1'></div>
                <div className='bage-2'></div>
            </div>
            <Link to={'/about'} className='about-section'>About</Link>
        </div>
      </div>
      <div className='parent-main-container-fluid'>
        <div className='main-container-fluid'>
          <div className='tracking-container'>
              <div className='label-container'>
                  <div className='label'>Track & <span>Trace Shipment</span></div>
                  <img src={track_shipment_01} alt="laser" />
              </div>

              <div className='input-container'>
                  <label>Enter Tracking Number Here</label>
                  <div className={isTrackingIdEmpty? 'input-submit-button input-submit-button-empty' : 'input-submit-button'}>
                      <input onChange={(e) => setTrackingID(e.target.value)} type="text" placeholder='Enter your tracking number e.g BL-XXXX' />
                      <button onClick={handleTrackShipment} type='submit'>{isTrackingInProgress? <TrackingSpinner /> : 'Track Your Shipment'}</button>
                  </div>
                  {/* {order?
                  <div>{order &&`${order?.clientName} order is processing..., please wait`}</div>
                  :
                  <small>{trackingID && `Piloting in progress... ${trackingID}`}</small>} */}
              </div>
          </div>
        </div>
      </div>
      
      {isShipmentSnippetComponetActive && <ShipmentSnippet order = {order} handleCloseShipmentSnippetComponent ={handleCloseShipmentSnippetComponent} />}
      <div className='footer'><Footer /></div>
    </div>
  )
}

export default TrackShipment