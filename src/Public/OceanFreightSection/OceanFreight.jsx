import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import tel_1 from '../../assets/icons/tel-1.png'
import ocean_freight_01 from '../../assets/images/ocean-freight-01.jpg'
import ocean_freight_03 from '../../assets/images/ocean-freight-03.jpg'
import ocean_freight_02 from '../../assets/images/ocean-freight-02.jpg'
import '../AirFreightSection/AirFreight.css'
import './OceanFreight.css'

const OceanFreight = () => {
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
    <div className='air-freight ocean-freight'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='air-freight-hero-section'>
        <h1 data-aos="fade-up">Ocean Freight</h1>
        <div className='mission' data-aos="fade-up">Navigating global trade with trust, efficiency, and innovation - delivering seamless ocean freight solutions across continents.</div>
        <div data-aos='fade-up' className='quick-link'>
            <Link to={'/'} className='home'>Home</Link>
            <div className='bage'>
                <div className='bage-1'></div>
                <div className='bage-2'></div>
            </div>
            <Link to={'/services-road-transport'} className='about-section'>Road Transport</Link>
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
                            <div className='service-x'>
                                <div className='child'>Road Transport</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                        <Link to={'/services-ocean-freight'}>
                            <div className='service'>
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
                <div className='air-freight'><img src={ocean_freight_01} alt="air_freight_0" /></div>
                <h1 data-aos='fade-up'>Sea & Ocean Freight Forwarding</h1>
                <div className='info' data-aos='fade-up'>{settings?.appName} Courier Company offers a wide range of ocean importing and exporting options to help meet your shipping needs.</div>
                <div className='info' data-aos='fade-up'>Our group of experienced shipping professionals will provide guidance. We'll get your shipment moving and help you track it with our online shipping tools. At {settings?.appName} Courier Company, we can help you with LCL (less than container-load) and FCL (full container-load) to ensure your shipment is stored properly and moved safely to its final destination. {settings?.appName} Courier Company organizes and provides sea container transportation in Europe and beyond in such a way so that our Clients can enjoy all its benefits. Our specialists analyze individual customer's needs and cargo characteristics and develop optimal transportation routes in Europe, the CIS, the Baltics, the Balkans, and Central Asia. {settings?.appName} Courier Company provides timely delivery of any goods regardless of distance. Thanks to productive cooperation with international transport companies and major port authorities, we offer a flexible pricing policy and maintain a high level of service quality.</div>
                
                <div className='shipping-options-container'>
                    <div className='shipping-options'>
                        <div className='heading'>We Specialize In Special Handling</div>
                        <div className='info'>We offer all sorts of project cargo shipping services, including break bulk and RO/RO (Roll On/Roll Off shipping), and we deal in all manner of sizes and weights for specialized cargo. Contact us with your specific requirements today for a shipping quote.</div>
                    </div>
                </div>

                <div className='ocean-images'>
                    <img src={ocean_freight_03} alt="" />
                    <img src={ocean_freight_02} alt="" />
                </div>
            </div>
        </div>
      </div>

      <div className='footer'><Footer /></div>
    </div>
  )
}

export default OceanFreight