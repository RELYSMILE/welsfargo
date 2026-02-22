import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import tel_1 from '../../assets/icons/tel-1.png'
import warehousing_01 from '../../assets/images/warehousing-01.jpg'
import warehousing_02 from '../../assets/images/warehousing-02.jpg'
import warehousing_03 from '../../assets/images/warehousing-03.jpg'
import '../AirFreightSection/AirFreight.css'
import '../OceanFreightSection/OceanFreight.css'
import './Warehousing.css'

const Warehousings = () => {
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
    <div className='air-freight ocean-freight warehousing'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='air-freight-hero-section'>
        <h1 data-aos="fade-up">Warehousing</h1>
        <div className='mission' data-aos="fade-up">Optimizing supply chains with secure, efficient, and technology-driven storage solutions - ensuring your goods are handled with precision and delivered with confidence.</div>
        <div data-aos='fade-up' className='quick-link'>
            <Link to={'/'} className='home'>Home</Link>
            <div className='bage'>
                <div className='bage-1'></div>
                <div className='bage-2'></div>
            </div>
            <Link to={'/services-road-transport'} className='about-section'>Rail Freight</Link>
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
                            <div className='service'>
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
                <div className='air-freight'><img src={warehousing_01} alt="air_freight_0" /></div>
                <h1 data-aos='fade-up'>Warehousing And Order Fulfillment</h1>
                <div className='info' data-aos='fade-up'>Our warehousing and distribution services provide our clients with a cost-effective solution for storing and moving their goods around the world supply, allowing them to worry less about their chain and focus more on the core aspects of their business and its growth. {settings?.appName} Courier Company provides constant, immediate access to goods, and fast, effective distribution around the globe. <br /><br />Managing projects requires special expertise, care and detailing. We have built a formidable reputation in Project Cargo Logistics and heavy lift shipments with our dedicated operations team who have a thorough understanding of handling cargo's with ports, customs and transport agencies. We offer innovative Project Cargo Handling solutions as well as technical engineering services to manage the project completely from start to finish, timely delivery of your valuable goods.</div>
                <div className='info' data-aos='fade-up'>Whenever your air freight shipment is ready to go, {settings?.appName} Courier Company is committed to meeting any business critical deadline. We provide expedited, day of service, same day pick-up of the order transaction. This means your air freight is on the way rather than waiting in the system.</div>

                <div className='ocean-images'>
                    <img src={warehousing_02} alt="" />
                    <img src={warehousing_03} alt="" />
                </div>

                <div className='storage-services-main-container'>
                    <div className='heading'>Our Storage and Terminal Services:</div>
                    <div className='storage-services-container'>
                        <div className='storage-services'>
                            <div className='services'>
                                <div className='bullet'></div>
                                <div className='service'>Mineral Storage-Emptying</div>
                            </div>
                            <div className='services'>
                                <div className='bullet'></div>
                                <div className='service'>Container Maintenance and Repair</div>
                            </div>
                            <div className='services'>
                                <div className='bullet'></div>
                                <div className='service'>VGM Services</div>
                            </div>
                            <div className='services'>
                                <div className='bullet'></div>
                                <div className='service'>Railway Connected Terminals</div>
                            </div>
                        </div>

                        <div className='storage-services'>
                            <div className='services'>
                                <div className='bullet'></div>
                                <div className='service'>Full-Empty Container Storage and Handling</div>
                            </div>
                            <div className='services'>
                                <div className='bullet'></div>
                                <div className='service'>Block Marble Stocking</div>
                            </div>
                            <div className='services'>
                                <div className='bullet'></div>
                                <div className='service'>Pipe, Roller, Hair Storage and Packing Services</div>
                            </div>
                            <div className='services'>
                                <div className='bullet'></div>
                                <div className='service'>Flexi Layout</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='shipping-options-container'>
                    <div className='shipping-options'>
                        <div data-aos='fade-up' className='heading'>What You Stand To Gain</div>
                        <div data-aos='fade-up' className='info'>We have top notch security and loads of space. Store your stuff at our warehouse. Use our warehouse service as your distribution center. The consolidation service allows for multiple items received at different times to be combined and shipped as one, thereby reducing the overall shipping cost in some instances by as much as 70%.</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='footer'><Footer /></div>
    </div>
  )
}

export default Warehousings