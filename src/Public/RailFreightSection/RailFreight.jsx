import React, { useEffect, useState } from 'react'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import tel_1 from '../../assets/icons/tel-1.png'
import rail_freight_01 from '../../assets/images/rail-freight-01.jpg'
import '../AirFreightSection/AirFreight.css'
import './RailFreight.css'

const RailFreight = () => {
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
    <div className='air-freight rail-freight'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='air-freight-hero-section'>
        <h1 data-aos="fade-up">Rail Freight</h1>
        <div className='mission' data-aos="fade-up">Powering trade with reliability, consistency, and innovation - delivering seamless rail freight solutions that connect industries and drive progress.</div>
        <div data-aos='fade-up' className='quick-link'>
            <Link to={'/'} className='home'>Home</Link>
            <div className='bage'>
                <div className='bage-1'></div>
                <div className='bage-2'></div>
            </div>
            <Link to={'/services-ocean-freight'} className='about-section'>Ocean Freight</Link>
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
                            <div className='service'>
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
                <div className='air-freight'><img src={rail_freight_01} alt="air_freight_0" /></div>
                <h1 data-aos='fade-up'>Rail Cargo Service – Well Connected & Sustainable</h1>
                <div className='info' data-aos='fade-up'>Rail services transportation are included in a wide row of our offerings. Steady demand for train freight shipping is partially attributed to the capacities that railway transport is used with: high speed of shipping, large volumes of goods that can be carried at the same time, safety of delivery. Rail cargo services are also known for their relatively low costs if we compare them with transportation by air, for example. Thanks to the strict railroad scheduling, it is possible to plan delivery timing with a high level of accuracy. Even in those cases when you don't have access to rail terminals, it won't be a problem if train freight shipping is the most feasible option for you. In such situations, our experts will organize forwarding of your goods from terminals to warehouses or other facilities by trucks. We provide railway transportation services in Europe and other regions and guarantee the highest quality of our services. At AirPrime Delivery, we do our best to ensure a highly individual approach. We always attentively analyze each case, taking into account the peculiarities of goods that should be delivered and all the specific needs that a customer can have. The reliability of our services and an excellent price-quality ratio are possible thanks to our close cooperation with the best partners in different corners of the world.</div>
                <div className='info' data-aos='fade-up'>We ensure that your products reach their intended market(s) in optimum time and while at their best quality. You can follow the data related to your railway shipments through our IT interfaces and our consignment tracking system at any time.</div>
            </div>
        </div>
      </div>

      <div className='footer'><Footer /></div>
    </div>
  )
}

export default RailFreight