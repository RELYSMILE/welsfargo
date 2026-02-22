import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import arrow_back from '../assets/icons/arrow_back.png'
import verified_user from '../assets/icons/verified_user.png'
import local_shipping from '../assets/icons/local_shipping.png'
import check_01 from '../assets/icons/check-01.png'
import iphone14 from '../assets/images/iphone14.png'
import arrow_forward_01 from '../assets/icons/arrow-forward-01.png'
import arrow_forward_02 from '../assets/icons/arrow-forward-02.png'
import arrow_forward_03 from '../assets/icons/arrow-forward-03.png'
import speedof from '../assets/icons/speedof.png'
import info_01 from '../assets/icons/info-01.png'
import bolt from '../assets/icons/bolt.png'
import './ShipmentSnippet.css'

const ShipmentSnippet = ({handleCloseShipmentSnippetComponent, order}) => {
  const navigate = useNavigate()
  const address = 'Maria Elizbeth Nicolson 70 Washington Square South, New York, NY 10012, United States'

  const range = order?.deliveryRange
  const parts = range.split('-');
  const endDate = parts[1].trim();

  const partsExtended = range.split(' ');

  const handleRedirectToTrackingPage = (orderID) => {
    navigate(`/track-order/${orderID}`)
  }

  const orderDate = order.createdAt?.toDate().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).replace(',', ' |')

  return (
    <div className='snippet-main-wrapper'>
        <div className='snippet-wrapper'>
            <div className='back-button-wrapper'>
                <div onClick={handleCloseShipmentSnippetComponent} className='back-button'><img src={arrow_back} alt="arrow_back" /></div>
                <div className='label'>In Transit</div>
            </div><br /><br /><br />
            <div className='snippet-content-wrapper'>
              <div className='info-wrapper-1'>
                <div className='info-1'>Delivery: {partsExtended[0]?.trim() || ''} {partsExtended[1]?.trim().replace(',', '') || ''} {partsExtended[3]?.trim() || ''} {partsExtended[4]?.trim() || ''} {partsExtended[5]?.trim().replace(',', '') || ''}</div>
                <div className='info-wrapper'>
                  <img src={verified_user} alt="verified_user" />
                  <div className='text'>You'll get <span>a $7 credit</span> if delivered after {endDate}.</div>
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

              <div className='info-wrapper-3'>
                <div className='package-info-label'>Package info <span>{order?.packageInfo}</span></div>
                <div className='package-info'>
                  <img src={iphone14} alt="iphone14" />
                    <div onClick={()=>handleRedirectToTrackingPage(order?.orderID)} className='label'>
                      <span>Order details</span>
                      <img src={arrow_forward_02} alt="arrow_forward_02" />
                    </div>
                </div>
                  <div className='address-container'>
                    <div className='address'>Ship to <span>{order?.clientName} {order?.clientAddress.toString().slice(0, 20) + '...'}</span></div>
                    <img onClick={()=>handleRedirectToTrackingPage(order?.orderID)} src={arrow_forward_02} alt="arrow_forward_02" />
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
                      <span onClick={()=>handleRedirectToTrackingPage(order?.orderID)} className='details-container'>
                        <span>View details</span>
                        <img src={arrow_forward_02} alt="arrow_forward_02" />
                      </span>
                  </div>
                </div>
              </div>
              <div className='info-wrapper-5'>
                <div className='tracking-info-wrapper'>
                  {!order?.isFlightDeparted?
                  <div className='tracking-info'>
                    <img src={info_01} alt="info_01" />
                    <div className='parent-text'>Sorry, new tracking update for your package is not yet available due to limited flights. Your package is currently waiting for departure at the airport. Thank you for your patient. <span className='child-text'>Please rest assured that your package will still arrive on time. Blackweb will give you $7 credits if not delivered on {endDate}.</span>
                    </div>
                  </div>
                  :
                  <div className='tracking-info'>
                    <img src={info_01} alt="info_01" />
                    <div className='parent-text'>
                    Your package has departed and is currently in transit. Tracking updates may still be limited due to recent flight delays. Thank you for your patience. 
                    <span className='child-text'>
                      Please rest assured that your package is still expected to arrive on time. Blackweb will give you $7 credits if not delivered by {endDate}.
                    </span>
                  </div>
                  </div>
                  }
                </div>

                  <div className='in-transit-lable-wrapper'>
                    <div className='bullet'></div>
                    <div className='text'>In Transit</div>
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
                            {order.isOrderShipped?
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
                    <div className='label date'>{order?.createdAt.toDate()?.toLocaleDateString('en-US', {weekday: 'long'})} | {order?.createdAt.toDate()?.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</div>
                  </div>

                  <div className={order.isFlightDeparted? 'bullet active-bullet' : 'bullet'}></div>
                  <div className={order.isFlightDeparted? 'package-progress active-package-progress': 'package-progress'}>
                    <div className='label'>Flight Departure</div>
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
                    <div className='label'>Order shipped</div>
                    <div className='date'>{order?.OrderShippedAt? order?.OrderShippedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                    <div className='info-wrapper'>
                      <img src={bolt} alt="bolt" />
                      <div className='info'>Shipped in just 14hours, faster than over 90% of other packages</div>
                    </div>
                  </div>

                  <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                  <div className={order.isOrderSubmited? 'package-progress active-package-progress': 'package-progress'}>
                    <div className='label'>Your package is waiting to be loaded into a container shipment</div>
                    <div className='date'>{order?.OrderSubmitedAt? order?.OrderSubmitedAt?.toDate().toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    }).replace(',', ' |') : orderDate}</div>
                  </div>
                  
                  <div className={order.isOrderSubmited? 'bullet active-bullet' : 'bullet'}></div>
                    <div onClick={()=>handleRedirectToTrackingPage(order?.orderID)} className='view-more'>
                      <div className='text'>View more details</div>
                      <img src={arrow_forward_02} alt="arrow_forward_02" />
                    </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ShipmentSnippet