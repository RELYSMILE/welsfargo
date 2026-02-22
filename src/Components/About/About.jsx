import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context'
import { Link } from 'react-router-dom'
import PublicNavigation from '../PublicNavigation'
import Testimonial from '../Testimonial'
import Footer from '../Footer/Footer'
import about_09 from '../../assets/images/about-09.jpg'
import about_10 from '../../assets/images/about-10.jpg'
import carousel_02 from '../../assets/images/carousel-02.jpg'
import AOS from "aos";
import './About.css'

const About = () => {
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
    <div className='about'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='about-hero-section'>
        <h1 data-aos="fade-up">Driven by Technology.</h1>
        <h3 data-aos="fade-up">Powered by our People.</h3>
        <div className='mission' data-aos="fade-up">Our Mission: Deliver the future of freight through innovative technology and logistics solutions.</div>
      </div>

      <div className='content-fluid-container-2'>
              <div className='container-content-flex'>
                <div data-aos="zoom-in" className='heading'>Experience. Capacity. <span>Technology.</span></div>
                <div className='text'>We are a global (3PL) freight forwarder focused on offering competitive and comprehensive solutions without compromising personal service. {settings?.appName} Courier Company provides shippers of all sizes with fast and reliable transportation services across all major modes of freight.</div>
      
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
      
              <div className='container-content-image'>
                <img src={about_09} alt="" />
                <img className='about-10' src={about_10} alt="" />
              </div>
      </div>

      <div className='content-fluid-container-4'>
        <div className='item' data-aos="fade-up">
          <div className='number'>81,000+</div>
          <div className='line'></div>
          <div className='label'>Truckload Carriers</div>
        </div>
        <div className='item' data-aos="fade-up">
          <div className='number'>100,000+</div>
          <div className='line'></div>
          <div className='label'>Customers</div>
        </div>
        <div className='item' data-aos="fade-up">
          <div className='number'>70+</div>
          <div className='line'></div>
          <div className='label'>Best-in-class LTL Carriers</div>
        </div>
        <div className='item' data-aos="fade-up">
          <div className='number'>3,700+</div>
          <div className='line'></div>
          <div className='label'>Experienced Staffs</div>
        </div>
      </div>

      <div className='content-fluid-container-5'>
        <div className='carousel_02-container'><img src={carousel_02} alt="carousel_02" /></div>
        <div className='container-5-content'>
          <h1>Our Culture</h1>
          <div className='text'>We’ve created a culture that is defining the future of freight. We are a close-knit community of logistics and technology experts with a passion for solving supply chain challenges. We live and breathe our values and bring out the best in each other through positivity, collaboration, and a flair for problem-solving.</div>
        </div>
      </div>

      <div className='content-fluid-container-6'>
        <div className='heading'>
          <h1 data-aos='fade-up'>Flexible Solutions For All Your <span>Shipping</span> Needs</h1>
          <div className='text' data-aos='fade-up'>All of the services we offer have the capability to be Custom-Tailored to your industry or shipment and are backed by our highly knowledgeable team of experienced individuals.</div>
        </div>

        <div className='contact-containet'>
          <div className='info' data-aos='fade-up'>If you have any questions please feel free to contact us.</div>
          <Link to={'https://wa.link/l7mq9q'} target='_blank'><button>Contact Us</button></Link>
        </div>
      </div>
      <div className='testimonial'><Testimonial /></div>
      <div className='footer'><Footer /></div>
    </div>
  )
}

export default About