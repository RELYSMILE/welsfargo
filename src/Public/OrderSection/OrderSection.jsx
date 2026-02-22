import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import verified_user from '../../assets/icons/verified_user.png'
import local_shipping from '../../assets/icons/local_shipping.png'
import check_01 from '../../assets/icons/check-01.png'
import iphone14 from '../../assets/images/iphone14.png'
import arrow_forward_01 from '../../assets/icons/arrow-forward-01.png'
import arrow_forward_02 from '../../assets/icons/arrow-forward-02.png'
import arrow_forward_03 from '../../assets/icons/arrow-forward-03.png'
import speedof from '../../assets/icons/speedof.png'
import info_01 from '../../assets/icons/info-01.png'
import bolt from '../../assets/icons/bolt.png'
import './OrderSection.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { toast } from 'react-toastify'

const OrderSection = () => {
      const [order, setOrder] = useState({})
      const {orderID} = useParams()
      const [isNavBgVisible, setIsNavBgVisible] = useState(false)

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

      useEffect(() => {
        const fetchOrder = async() => {
          try{
            const orderRef = await getDoc(doc(db, 'orders', orderID))
            const orderData = orderRef.data()
            setOrder(orderData)
          }catch(error){
            console.log(error)
          }
        }
        fetchOrder()
      }, [orderID])

  const range = order?.deliveryRange || ''
  const parts = range.split(' ') || [];

  const reducedParts = range.split('-')

  const orderDate = order.createdAt?.toDate().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).replace(',', ' |')
      

  return (
    <div className='order-main-wrapper'>
        <PublicNavigation isNavBgVisible = {isNavBgVisible} />
        <div className='order-wrapper'>
          <div className='tracking-id-wrapper'>
            <div className='tracking-id-label'>
              <img src={speedof} alt="speedof" />
              <div className='id'>Tracking Number: <span>{order?.trackingNumber}</span></div>
            </div>

            <Link to={'/contact-us'}>
              <div className='tracking-id-contact'>
                <img src={info_01} alt="" />
                <div className='contact'>Contact Speedof</div>
              </div>
            </Link>
          </div>
                <div className='snippet-content-wrapper'>
                  <div className='info-wrapper-first-child'>
                    <div className='info-wrapper-1-2'>
                      <div className='info-wrapper-1'>
                        <div className='info-1'>Delivery:</div>
                        <div className='info-2'>
                          <span className='number'>{parts[1]?.trim().replace(',', '') || ''} </span><span className='text'><span>{parts[0]?.trim() || ''}</span><span>{parts[2]?.trim() || ''}</span></span> - <span className='number'>{parts[5]?.trim().replace(',', '') || ''} </span><span className='text'><span>{parts[4]?.trim() || ''}</span><span>{parts[6]?.trim() || ''}</span></span>
                        </div>
                        <div className='info-wrapper'>
                          <img src={verified_user} alt="verified_user" />
                          <div className='text'>You'll get <span>a $7 credit</span> if delivered after {reducedParts[1]?.trim() || ''}.</div>
                        </div>
                      </div>
        
                      <div className='info-wrapper-2'>
                        <div className='info-wrapper-child-1'>
                          <img src={local_shipping} alt="local_shipping" />
                          <div className='text'>Delivery guarantee</div>
                          <img className='arrow_forward_01' src={arrow_forward_01} alt="arrow_forward_01" />
                        </div>
        
                        <div className='info-wrapper-child-2'>
                          <div className='info-wrapper-child-2-left'>
                            <div className='child'>
                              <img src={check_01} alt="check_01" />
                              <div className='text'>$7 Credit for delay</div>
                            </div>
                            <div className='child'>
                              <img src={check_01} alt="check_01" />
                              <div className='text'>15-days no update refund</div>
                            </div>
                          </div>
        
                          <div className='info-wrapper-child-2-left'>
                            <div className='child'>
                              <img src={check_01} alt="check_01" />
                              <div className='text'>Return if item damaged</div>
                            </div>
                            <div className='child'>
                              <img src={check_01} alt="check_01" />
                              <div className='text'>60-days no delivery refund</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='info-wrapper-3'>
                      <div className='package-info-label'>Package info <span>{order?.packageInfo}</span></div>
                      <div className='package-info'>
                        <img src={iphone14} alt="iphone14" />
                      </div>
                      <div className='address-container'>
                        <div className='ship'>Ship to</div>
                        <div className='address'>{order?.clientName + ' ' + order?.clientAddress}</div>
                      </div>
                    </div>
                  </div>
    
                  <div className='info-wrapper-4'>
                    <div className='tracking-number-container'>
                      <div className='speedof-container'>
                        <img src={speedof} alt="speedof" />
                        <div>{order?.trackingNumber}</div>
                      </div>
                      <Link to={'/contact-us'}>
                        <div className='contact-container'>
                          <div>Contact</div>
                          <img src={arrow_forward_03} alt="arrow_forward_03" />
                        </div>
                      </Link>
                    </div>
                    <div className='tracking-info'>
                      <img src={info_01} alt="info_01" />
                      <div className='parent-text'>Your package is on it's way to your country. <span className='child-text'>Tracking information will be available on our website here after it arrives and Speedaf picks up the package.</span>
                      </div>
                    </div>
                  </div>
                  <div className='info-wrapper-5'>
                    <div className='Shipping-label'>Shipping details</div>
                      <div className='in-transit-lable-wrapper'>
                        <div className='bullet'></div>
                        <div className='text'>In Delivery</div>
                      </div>
                      <div className='in-transit-wrapper'>
                        <div className='label'>Arrived at the transit airport</div>
                        <div className='transit-wrapper'>
                          <div className='label'>
                            <div className='text'>Heading to the country of destination</div>
                            <img src={arrow_forward_03} alt="" />
                          </div>
                          <div className='progress-wrapper'>
                            <div className='progress-1'>
                              <div className='line-bullet'>
                                <div className={order?.isOrderShipped?'line-active' : 'line'}></div>
                                {order?.isOrderShipped?
                                <div className='check-01'><img src={check_01} alt="check_01" /></div>
                                :
                                <div className='bullet'></div>}
                              </div>
                              <div className='text'>In transit to airport...</div>
                            </div>
    
                            <div className='progress-1'>
                              <div className='line-bullet second'>
                                <div className={order?.isOrderArrivedAtAirport?'line-active' : 'line'}></div>
                                {order?.isOrderArrivedAtAirport?
                                <div className='check-01'><img src={check_01} alt="check_01" /></div>
                                :
                                <div className='bullet'></div>}
                              </div>
                              <div className='text'>Arrived at the airport for...</div>
                            </div>
    
                            <div className='progress-1'>
                              <div className='line-bullet third'>
                                <div className={order?.isFlightDeparted?'line-active' : 'line'}></div>
                                {order?.isFlightDeparted?
                                <div className='check-01'><img src={check_01} alt="check_01" /></div>
                                :
                                <div className='bullet'></div>}
                              </div>
                              <div className='text'>Departed from the...</div>
                            </div>
    
                            <div className='progress-1'>
                              <div className='line-bullet fourth'>
                                <div className={order?.isDepartedForFinalCentral?'line-active' : 'line'}></div>
                                {order?.isDepartedForFinalCentral?
                                <div className='check-01'><img src={check_01} alt="check_01" /></div>
                                :
                                <div className='bullet'></div>}
                              </div>
                              <div className='text'>Arrived and prepared to...</div>
                            </div>
                          </div>
                        </div>
                      </div>
    
                      <div className={order.isDepartedForFinalCentral? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isDepartedForFinalCentral? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Loaded at 【ABV-Distribution Center】; Departed for 【FINAL-CENTRAL】</div>
                        <div className='date'>{order?.departedForFinalCentralAt? order?.departedForFinalCentralAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isArriveAtABVDistribution? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isArriveAtABVDistribution? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Arrive at Distribution 【ABV-Distribution Center】<br /> ABV-Distribution Center</div>
                        <div className='date'>{order?.arriveAtABVDistributionAt? order?.arriveAtABVDistributionAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isLoadedAtLosDistribution? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isLoadedAtLosDistribution? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Loaded at 【LOS-Distribution center】; Departed for 【ABV-Distribution Center】</div>
                        <div className='date'>{order?.loadedAtLosDistributionAt? order?.loadedAtLosDistributionAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isArriveAtDistribution? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isArriveAtDistribution? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Arrive at Distribution 【DC-LOS】<br />Ifo</div>
                        <div className='date'>{order?.arriveAtDistribution? order?.arriveAtDistribution?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isLoadedInLosInt? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isLoadedInLosInt? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Loaded at 【LOS-INT】; Departed for 【LOS-Distribution center】</div>
                        <div className='date'>{order?.LoadedInLosInt? order?.LoadedInLosInt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isReceivedInLosInt? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isReceivedInLosInt? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Received in 【LOS-INT】, Pick-Up Courier is 【Sorting machine1】<br />LOS-INT</div>
                        <div className='date'>{order?.receivedInLosIntAt? order?.receivedInLosIntAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                        <div className='info-wrapper'>
                          <img src={bolt} alt="bolt" />
                          <div className='info'>Cleared customs in just 1 day, faster than over 90% of other packages.</div>
                        </div>
                      </div>
    
                      <div className={order.isCustomsClearanceCompleted? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isCustomsClearanceCompleted? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Being handed over by customs</div>
                        <div className='date'>{order?.customsClearanceCompletedAt? order?.customsClearanceCompletedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isCustomsClearanceCompleted? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isCustomsClearanceCompleted? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Customs clearance completed</div>
                        <div className='date'>{order?.customsClearanceCompletedAt? order?.customsClearanceCompletedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isPickedUpByCustoms? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isPickedUpByCustoms? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Picked up by customs clearance company</div>
                        <div className='date'>{order?.pickedUpByCustomsAt? order?.pickedUpByCustomsAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isPickedUpByCustoms? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isPickedUpByCustoms? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'><span className='text'>$7 credit if delivered after {reducedParts[1]}</span> Your package has arrived in the destination country and is in preparation for customs clearance. It may take some time and we will update the tracking information as soon as possible to ensure smooth delivery.</div>
                        <div className='date'>{order?.pickedUpByCustomsAt? order?.pickedUpByCustomsAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isFlightDeparted? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isFlightDeparted? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Package arrived at airport</div>
                        <div className='date'>{order?.flightDepartedAt? order?.flightDepartedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isFlightDeparted? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isFlightDeparted? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Departed from the transit airport</div>
                        <div className='date'>{order?.flightDepartedAt? order?.flightDepartedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isFlightDeparted? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isFlightDeparted? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Arrived at the transit airport</div>
                        <div className='date'>{order?.flightDepartedAt? order?.flightDepartedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isFlightDeparted? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isFlightDeparted? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Flight departure</div>
                        <div className='date'>{order?.flightDepartedAt? order?.flightDepartedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isOrderArrivedAtAirport? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderArrivedAtAirport? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Package arrived at airport, awaiting flight</div>
                        <div className='date'>{order?.ArrivedAtAirportAt? order?.ArrivedAtAirportAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>

                      <div className={order.isOrderShipped? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderShipped? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Order Shipped</div>
                        <div className='date'>{order?.OrderShippedAt? order?.OrderShippedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                        <div className='info-wrapper'>
                          <img src={bolt} alt="bolt" />
                          <div className='info'>Shipped in just 14 hours, faster than over 90% of other packages.</div>
                        </div>
                      </div>

                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Your package is waiting to be loaded into a container for shipment</div>
                        <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>

                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Your items have been picked and are waiting to be packed</div>
                        <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
    
                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Your order is being picked in the warehouse</div>
                        <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
    
                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>The pick list has been printed and the picking task is being assigned</div>
                        <div className='date'>Wednesday | December 3, 2025</div>
                      </div>
                      
                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Your items have been transferred to a consolidation center for packaging</div>
                        <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>

                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Your items have been prepared and are being transferred to a consolidation center for packaging</div>
                        <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>

                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>The warehouse has started preparing your order</div>
                        <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>

                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Order Paid Successfully</div>
                        <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                        <div className='label'>Order Submitted</div>
                        <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                      </div>
    
                      <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                      <div className='time-zone'>
                        <div className='text'>Times are shown in the local timezone.</div>
                      </div>
                  </div>
              </div>
        </div>

        <div className='footer'><Footer /></div>
    </div>
  )
}

export default OrderSection