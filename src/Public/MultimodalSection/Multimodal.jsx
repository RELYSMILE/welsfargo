import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import tel_1 from '../../assets/icons/tel-1.png'
import logistic_solution_01 from '../../assets/images/logistic-solution-01.jpg'
import logistic_solution_02 from '../../assets/images/logistic-solution-02.jpg'
import '../AirFreightSection/AirFreight'
import './Multimodal.css'

const Multimodal = () => {
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
    <div className='air-freight multimodal'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='air-freight-hero-section'>
        <h1 data-aos="fade-up">Multimodal</h1>
        <div className='mission' data-aos="fade-up">Integrating air, sea, road, and rail to deliver flexible, efficient, and cost-effective logistics solutions - ensuring seamless connectivity across every mode of transport.</div>
        <div data-aos='fade-up' className='quick-link'>
            <Link to={'/'} className='home'>Home</Link>
            <div className='bage'>
                <div className='bage-1'></div>
                <div className='bage-2'></div>
            </div>
            <Link to={'/services-warehousing'} className='about-section'>Warehousing</Link>
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
                            <div className='service-x'>
                                <div className='child'>Warehousing</div>
                                <div className='bullet'></div>
                            </div>
                        </Link>
                        <Link to={'/services-multimodal'}>
                            <div className='service'>
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
                <div className='air-freight'><img src={logistic_solution_01} alt="air_freight_0" /></div>
                <h1 data-aos='fade-up'>Multimodal Transport</h1>
                <div className='info' data-aos='fade-up'>A complete range of services aiding multimodal or combined load delivery is available with {settings?.appName} Courier Company. Multimodal transportation of goods, unlike monomodal transportation, involves the usage of two or more road, air, sea or rail modes of transport. Multimodal transport arrangements support the selection of the most flexible and efficient transportation routes, cuts, "connect" geographically transportation costs, remote dispatch and destination points, and achieve high delivery speeds. <br /><br />A multimodal transportation operator is a company that supervises all the stages and elements of a shipment. Such a working arrangement enables a shipper to solve numerous bureaucratic issues at once. {settings?.appName} Courier Company organizes and provides multimodal freight transportation in such a way that clients can enjoy all its benefits. Our experienced employees take an individual approach to every customer's requirements. We scrutinize all load properties and work out the most preferable routes in parts of Europe and Central Asia in accordance with all of our valued clients' wishes.</div>
                <div className='info' data-aos='fade-up'>{settings?.appName} Courier Company ships any cargo to any destination with no delays. Thanks to productive cooperation with international transport companies, we offer a flexible pricing policy and provide high-quality multimodal and intermodal transportation services.</div>

                <div className='multimodal-solutions'>
                    <div className='heading'>Our multimodal solutions</div>
                    <div className='info'>{settings?.appName} Courier Company multimodal transport solutions are fast, seamless and environmentally sustainable, thanks to our strategically placed terminals, purpose-built vessels, high-frequency rail services, and high-capacity network.</div>
                </div>
                <div className='shipping-options-container'>
                    <div className='shipping-options'>
                        <div className='heading'>Why choose multimodal transport</div>
                        <div className='info'>Multimodal transport means using various modes of transport in one transport booking. It means moving cargo from origin to destination by several modes of transport under one single contract. The same transport carrier is responsible for moving the shipment all the way, in all modes.<br /><br />Choosing {settings?.appName} Courier Company multimodal transport solution means choosing a one stop shop service with great geographical reach and flexibility, where we handle every single aspect of your goods transport for you. This means efficient delivery times, reduced inventory costs, and minimizing your logistics coordination expenses.</div>
                    </div>

                    <div className='air-freight-02'><img src={logistic_solution_02} alt="air_freight_02" /></div>
                </div>
            </div>
        </div>
      </div>

      <div className='footer'><Footer /></div>
    </div>
  )
}

export default Multimodal