import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import tel_1 from '../../assets/icons/tel-1.png'
import air_freight_01 from '../../assets/images/air-freight-01.jpg'
import air_freight_02 from '../../assets/images/air-freight-02.jpg'
import './AirFreight.css'

const AirFreight = () => {
        const {settings} = useContext(AppContext)
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
  return (
    <div className='air-freight'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='air-freight-hero-section'>
        <h1 data-aos="fade-up">Air Freight</h1>
        <div className='mission' data-aos="fade-up">Elevating logistics with speed, precision, and reliability - delivering global excellence through innovative air freight solutions.</div>
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
            <div className='parent-left-side-container'>
                <div className='first-container'>
                    <div className='label'>
                        <div className='bage'>
                            <div className='bage-1'></div>
                            <div className='bage-2'></div>
                        </div>
                        <div className='service-label'>SERVICES</div>
                    </div>

                    <div className='services'>
                        <Link to={'/services-air-freight'}>
                            <div className='service'>
                                <div className='child'>Air Freight</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                        <Link to={'/services-road-transport'}>
                            <div className='service-x'>
                                <div className='child'>Road Transport</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                        <Link to={'/services-ocean-freight'}>
                            <div className='service-x'>
                                <div className='child'>Ocean Freight</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                        <Link to={'/services-rail-freight'}>
                            <div className='service-x'>
                                <div className='child'>Rail Freight</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                        <Link to={'/services-warehousing'}>
                            <div className='service-x'>
                                <div className='child'>Warehousing</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                        <Link to={'/services-multimodal'}>
                            <div className='service-x'>
                                <div className='child'>Multimodal</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className='second-container'>
                    <div className='tel-icon'><img src={tel_1} alt="" /></div>
                    <div className='title'>Have Any Questions?</div>
                    <div className='tel'>
                        <div className='bullet'></div>
                        <a href="tel:+2349063676192">+234 (0) 9063676192</a>
                    </div>
                    <div className='tel'>
                        <div className='bullet'></div>
                        <a href="mailto:relysmiled@gmail.com">relysmiled@gmail.com</a>
                    </div>

                    <div className='box-container'>
                        <div className='box'>
                            <div className='bullet'></div>
                        </div>
                        <div className='box'>
                            <div className='bullet'></div>
                        </div>
                        <div className='box'>
                            <div className='bullet'></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='parent-right-side-container'>
                <div className='air-freight'><img src={air_freight_01} alt="air_freight_0" /></div>
                <h1 data-aos='fade-up'>International Air Freight Forwarding</h1>
                <div className='info' data-aos='fade-up'>{settings?.appName} Courier Company offers comprehensive international air cargo transportation and logistics services. Air cargo services are one of our main offerings that are in high demand. While the amount of air passenger transportation has been declining, air cargo transportation volumes are steadily growing. Transporting cargo by air is an advantageous choice for multiple reasons, including fast delivery times to any destination and high cargo security levels. Also, the risks of loss, waste, or misappropriation are also minimized irrespective of market conditions. Clients choosing international air cargo shipping are guaranteed fast deliveries. For example, air freight from China to the UK can take from 2 to 5 days, depending on the Chinese airport of origin.</div>
                <div className='info' data-aos='fade-up'>{settings?.appName} Courier Company organizes and provides international air freight shipping services so that clients can take advantage of all this transport mode’s benefits. Our specialists consider each customer’s needs and cargo characteristics before choosing optimal transportation routes and calculating airfreight costs. {settings?.appName} Courier Company provides on-time delivery of any goods over any distance and via any route. Thanks to our strong partnerships with international airlines, our company offers a flexible pricing policy and provides Swiss-quality air cargo transportation services.</div>
            
                <div className='main-rating-container'>
                    <div className='rating-container'>
                        <div className='percent-container'>
                            <div className='title'>Insurance & Guarantee</div>
                            <div className='percent'>90%</div>
                        </div>
                        <div className='rating-bar-container'>
                            <div className='big-bar'><div className='small-bar'></div></div>
                        </div>
                    </div>
                    <div className='rating-container'>
                        <div className='percent-container'>
                            <div className='title'>Logistical Expertise</div>
                            <div className='percent'>70%</div>
                        </div>
                        <div className='rating-bar-container'>
                            <div className='big-bar'><div className='small-bar-2'></div></div>
                        </div>
                    </div>
                    <div className='rating-container'>
                        <div className='percent-container'>
                            <div className='title'>Commercial Expertise</div>
                            <div className='percent'>80%</div>
                        </div>
                        <div className='rating-bar-container'>
                            <div className='big-bar'><div className='small-bar-3'></div></div>
                        </div>
                    </div>
                </div>
                <div className='info' data-aos='fade-up'>Whenever your air freight shipment is ready to go, {settings?.appName} Courier Company is committed to meeting any business critical deadline. We provide expedited, day of service, same day pick-up of the order transaction. This means your air freight is on the way rather than waiting in the system.</div>
                
                <div className='shipping-options-container'>
                    <div className='shipping-options'>
                        <div className='heading'>Our Air Freight Shipping Options include:</div>
                        <div data-aos='fade-up' className='options'>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Guaranteed Next-Flight-Out</div>
                            </div>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Priority</div>
                            </div>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Same day pickup and processing</div>
                            </div>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Standard/General</div>
                            </div>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Air Charter Services</div>
                            </div>
                        </div>
                    </div>

                    <div className='air-freight-02'><img src={air_freight_02} alt="air_freight_02" /></div>
                </div>
            </div>
        </div>
      </div>

      <div className='footer'><Footer /></div>
    </div>
  )
}

export default AirFreight