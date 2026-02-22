import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import tel_1 from '../../assets/icons/tel-1.png'
import road_freight_01 from '../../assets/images/road-freight-01.jpg'
import road_freight_02 from '../../assets/images/road-freight-02.jpg'
import road_freight_03 from '../../assets/images/road-freight-03.jpg'
import road_freight_04 from '../../assets/images/road-freight-04.jpg'
import '../AirFreightSection/AirFreight.css'
import './RoadTransport.css'

const RoadTransport = () => {
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
    <div className='air-freight road-transport'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='air-freight-hero-section'>
        <h1 data-aos="fade-up">Road Transport</h1>
        <div className='mission' data-aos="fade-up">  Driving logistics forward with reliability, efficiency, and precision - connecting destinations through innovative road transport solutions.</div>
        <div data-aos='fade-up' className='quick-link'>
            <Link to={'/'} className='home'>Home</Link>
            <div className='bage'>
                <div className='bage-1'></div>
                <div className='bage-2'></div>
            </div>
            <Link to={'/services-air-freight'} className='about-section'>Air Freight</Link>
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
                            <div className='service-x'>
                                <div className='child'>Air Freight</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                        <Link to={'/services-road-transport'}>
                            <div className='service'>
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
                <div className='air-freight'><img src={road_freight_01} alt="air_freight_0" /></div>
                <h1 data-aos='fade-up'>Road Transport</h1>
                <div className='info' data-aos='fade-up'>{settings?.appName} Courier Company focuses on both domestic and international movement of goods by land through cost-effective, reliable and on-time delivery solutions. We can take your shipments in the right direction & deliver as per commitment - Because we work to understand your objectives and create solutions that deliver. All aspects of the transportation process including information exchange, management and operations are effectively and efficiently linked to offer our customers total flexibility and transparency.</div>
                <div className='info' data-aos='fade-up'>We combine transport execution with transport management services to meet all your needs on the road. Through our global network of control towers and state-of-the-art technology, we will monitor your shipments throughout their road journey and ensure your goods are always traveling on the most efficient route.</div>
            
                <div className='road_freight_images'>
                    <img src={road_freight_02} alt="road_freight_02" />
                    <img src={road_freight_03} alt="road_freight_02" />
                    <img src={road_freight_04} alt="road_freight_02" />
                </div>
                <div className='shipping-options-container'>
                    <div className='shipping-options'>
                        <div className='heading'>We Offer:</div>
                        <div className='info'>{settings?.appName} Courier Company offers a range of international ground shipping services designed to provide end to end support for all your shipping needs.</div>
                        <div data-aos='fade-up' className='options'>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Delivery to and from container freight stations</div>
                            </div>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Drayage to and from ocean ports and rail yards</div>
                            </div>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Delivery to and from airports</div>
                            </div>
                            <div className='option'>
                                <div className='bullet'></div>
                                <div className='child'>Customs bonded cargo transfers, border to border ground or intermodal transport</div>
                            </div>
                            <Link to={'https://wa.link/l7mq9q'} target='_blank'><button>Get Quote</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='footer'><Footer /></div>
    </div>
  )
}

export default RoadTransport