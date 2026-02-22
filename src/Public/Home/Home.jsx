import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer.jsx'
import { AppContext } from '../../Context/Context.jsx';
import { Link } from 'react-router-dom';
import LiveChat from '../../Components/LiveChat/LiveChat.jsx';
import AOS from "aos";
import SpinnerHome from '../../Components/SpinnerHome.jsx';
import "aos/dist/aos.css";
import heroAdVideo from '../../assets/bg/tiny.mp4'
import PublicNavigation from '../../Components/PublicNavigation'
import Testimonial from '../../Components/Testimonial';
import HeroTitle from '../../Components/HeroTitle'
import more_down from '../../assets/icons/more_down.png'
import scroll from '../../assets/icons/scroll.png'
import icon01dark from '../../assets/icons/icon-01-dark.png'
import icon02dark from '../../assets/icons/icon-02-dark.png'
import icon03dark from '../../assets/icons/icon-03-dark.png'
import icon04dark from '../../assets/icons/icon-04-dark.png'
import about05 from '../../assets/images/about-05.jpg'
import about06 from '../../assets/images/about-06.jpg'
import whyus01 from '../../assets/images/why-us-01.jpg'
import partner01 from '../../assets/logo/partner-01.png'
import partner02 from '../../assets/logo/partner-02.png'
import partner03 from '../../assets/logo/partner-03.png'
import partner04 from '../../assets/logo/partner-04.png'
import step1 from '../../assets/icons/step1.png'
import step2 from '../../assets/icons/step2.png'
import step4 from '../../assets/icons/step4.png'
import step3 from '../../assets/icons/step3.png'
import check from '../../assets/icons/check.png'
import tab_0 from '../../assets/bg/tab-0.png'
import './Home.css'

const Home = () => {
  const {settings} = useContext(AppContext)
  const [isNavBgVisible, setIsNavBgVisible] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(false)
  const [homeId, setHomeId] = useState('home')
  const [isWindowScrolled, setIsWindowScrolled] = useState(false)
  const [calculatedSm, setCalculatedSm] = useState(false)

  const cards = [
    {
      id: 1, 
      heading: 'Air Freight',
      text: 'Our air freight network offers the fastest and most convenient connections.',
      icon: icon01dark, 
      alt: 'Air Freight'
    },
    {
      id: 2, 
      heading: 'Road Transport',
      text: 'We provide Local, International & GCC Land Cargo Transport & Freight Forwarding Options.',
      icon: icon02dark, 
      alt: 'Road Transport'
    },
    {
      id: 3, 
      heading: 'Ocean Freight',
      text: 'We are a globally well-known ocean freight forwarder with offices across 42 countries.',
      icon: icon03dark, 
      alt: 'Ocean Freight'
    },
    {
      id: 4, 
      heading: 'Rail Freight',
      text: 'To deliver goods of any kind and size, use sustainable rail transport with a clear departure and arrival plan.',
      icon: icon04dark, 
      alt: 'Rail Freight'
    },
  ]
  
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPageLoading(true)
    }, 3000)
    AOS.init({
      duration: 1000, // animation duration
      once: true,    // whether animation should happen only once
    });
    const WindowScrollY = () => {
    if(window.scrollY >= 90){
      setIsNavBgVisible(true)
    }else{
      setIsNavBgVisible(false)
    }

    if(window.scrollY >= 90){
      setCalculatedSm(window.scrollY/4)
      setIsWindowScrolled(true)
    }else{
      setIsWindowScrolled(false)
    }
  }
  window.addEventListener('scroll', WindowScrollY)

    return() => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', WindowScrollY)
    }
  }, []);

  return <div className='home-parent-container'>
    <div>
    <div id={homeId} className='hero-section'>
        <video src={heroAdVideo} autoPlay muted loop playsInline></video> {/*hero background video*/}
        <PublicNavigation isNavBgVisible = {isNavBgVisible} homeId = {homeId} /> {/*Nav bar*/}
        <HeroTitle />
        {!isNavBgVisible && <div className='more_down'><img src={more_down} alt="" /></div>}
    </div>
    </div>
    <div className='home-content-parent-container'>
      <div className='content-fluid-container-1'>
        <div className='content-fluid-image-text'>
            <div className='content-fluid-image'>
              <div className='image-1'><img src={about05} alt="" /></div>
              <div className='content-fluid-image-1'>
                <div className='image-2'><img src={about06} alt="" /></div>
                <div data-aos="fade-up" className='content-fluid-text'>
                  <div className='number'>333k+</div>
                  <div className='text'>Clients Worldwide</div>
                </div>
              </div>
            </div>

            <div className='content-fluid-text'>
              <div className='heading'>World's Leading Contract Logistics Provider</div>
              <div data-aos="zoom-in" className='text-para-1'>{settings?.appName} Courier Company offers freight forwarding, contract logistics, and supply chain solutions that connect your business to suppliers and markets around the world. Air, ocean (FCL/LCL), and road freight, and multi-modal solutions are available to move your goods safely and efficiently across borders, ensuring timely delivery every step of the way.</div>
              <div data-aos="zoom-in" className='text-para-2'>We provide globally integrated end-to-end solutions tailored to our customers' supply chain management needs, with a special commitment to industry-specific requirements. Our professional team ensures transparency, reliability, and seamless coordination from pickup to final delivery.</div>
            </div>
        </div>
          <div className='bage'>
            <div className='ball'></div>
          </div>

          <div className='card-container'>
            {cards.map((card, idx) => (
            <div key={idx} className='card'>
              <img src={card.icon} alt={card.alt + 'icon'} />
              <div className='card-child'>
                <div className='heading'>{card.heading}</div>
                <div className='text'>{card.text}</div>

                <Link to={'https://wa.link/l7mq9q'}><div className='action-button'>Get Quote</div></Link>
              </div>
            </div>
            ))}
          </div>
          <div className='moving-ball'></div>
      </div>

      <div className='content-fluid-container-2'>
        <div className='container-content-flex'>
          <div data-aos="zoom-in" className='heading'>Leading 3PL with Global Presence</div>
          <div className='text'>We are a global (3PL) freight forwarder focused on offering competitive and comprehensive solutions without compromising personal service.</div>

          <div data-aos="fade-up" className='list-container'>
            <div className='list-1'>
              <div className='bullet-text-container'>
                <div className='bullet'></div>
                <div className='list-text'>Fast Delivery</div>
              </div>
              <div className='bullet-text-container'>
                <div className='bullet'></div>
                <div className='list-text'>Experienced Team</div>
              </div>
              <div className='bullet-text-container'>
                <div className='bullet'></div>
                <div className='list-text'>Support 24/7</div>
              </div>
            </div>
            <div className='list-2'>
              <div className='bullet-text-container'>
                <div className='bullet'></div>
                <div className='list-text'>Online Tracking</div>
              </div>
              <div className='bullet-text-container'>
                <div className='bullet'></div>
                <div className='list-text'>Cargo Insurance</div>
              </div>
              <div className='bullet-text-container'>
                <div className='bullet'></div>
                <div className='list-text'>Safe Warehouse</div>
              </div>
            </div>
          </div>
        </div>

        <div className='container-content-image'><img src={whyus01} alt="" /></div>
        <div className='partners'>
            <img src={partner01} alt="partner-1" />
            <img src={partner02} alt="partner-2" />
            <img src={partner03} alt="partner-3" />
            <img src={partner04} alt="partner-4" />
        </div>
      </div>

      <div className='content-fluid-container-3'>
            <div data-aos="fade-up" className='steps-container'>
              <div className='step'>
                <div className='step-outer-layer'><div className='step-inner-layer'><img src={step1} alt="" /></div></div>
                <div className='text'>Request Quote</div>
              </div>
              <div className='line'></div>
              <img src={check} alt="" />
              <div className='line'></div>
              <div className='step'>
                <div className='step-outer-layer'><div className='step-inner-layer'><img src={step2} alt="" /></div></div>
                <div className='text'>Package Departs</div>
              </div>
              <div className='line'></div>
              <img src={check} alt="" />
              <div className='line'></div>
              <div className='step'>
                <div className='step-outer-layer'><div className='step-inner-layer'><img src={step3} alt="" /></div></div>
                <div className='text'>Track Package Location</div>
              </div>
              <div className='line'></div>
              <img src={check} alt="" />
              <div className='line'></div>
              <div className='step'>
                <div className='step-outer-layer'><div className='step-inner-layer'><img src={step4} alt="" /></div></div>
                <div className='text'>Safely Delivered</div>
              </div>
            </div>
      </div>

      <Testimonial />

      <div className='content-fluid-container-4'>
        <div className='item' data-aos="fade-up">
          <div className='number'>22280+</div>
          <div className='line'></div>
          <div className='label'>Delivered Packages</div>
        </div>
        <div className='item' data-aos="fade-up">
          <div className='number'>1023+</div>
          <div className='line'></div>
          <div className='label'>Happy Customers</div>
        </div>
        <div className='item' data-aos="fade-up">
          <div className='number'>10+</div>
          <div className='line'></div>
          <div className='label'>Awards Won</div>
        </div>
        <div className='item' data-aos="fade-up">
          <div className='number'>1000+</div>
          <div className='line'></div>
          <div className='label'>Satisfied Solutions</div>
        </div>
      </div>

      <div className='content-fluid-container-5'>
        <div className='tab-0-container'><img src={tab_0} alt="" /></div>
        <div className='content-fluid-info'>
            <div className='label'>Delivery Time</div>
            <div className='days-container'>
              <div className='box'></div>
              <div className='days'>1 day</div>
            </div>
            <div className='days-container'>
              <div className='box'></div>
              <div className='days'>2 day</div>
            </div>
            <div className='days-container'>
              <div className='box'></div>
              <div className='days'>3 day</div>
            </div>
            <div className='days-container'>
              <div className='box'></div>
              <div className='days'>4 day or more</div>
            </div>
        </div>

        <div className='sats-infor-container'>
          <div data-aos="fade-up" className='heading'>Our stats speak loudly for themselves.</div>

          <div className='percentage-container-main'>
            <div className='percentage-container' data-aos="fade-up">
              <div className='number'>99.98 <span>%</span></div>
              <div className='label'>Orders Accuracy</div>
            </div>
            <div className='percentage-container' data-aos="fade-up">
              <div className='number'>99.98 <span>%</span></div>
              <div className='label'>Fulfillment On Time</div>
            </div>
            <div className='percentage-container' data-aos="fade-up">
              <div className='number'>17</div>
              <div className='label'>Offices Across The Country</div>
            </div>
          </div>
        </div>
      </div>
      {isWindowScrolled && <a href={`#${homeId}`}><div className='scroll'><img src={scroll} alt="" /></div></a>}
      {isWindowScrolled && <div className='screen-metrix'>Calculated SM: {calculatedSm}</div>}
      <LiveChat />
      <Footer  homeId = {homeId} />
    </div>
    {!isPageLoading && <div className='flash-screen'><SpinnerHome /></div>}
  </div>
}

export default Home