import React, { useEffect, useState } from 'react'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import contact_phone_01 from '../../assets/icons/contact-phone-01.png'
import contact_mail_01 from '../../assets/icons/contact-mail-01.png'
import contact_location_01 from '../../assets/icons/contact-location-01.png'
import qr from '../../assets/images/qr.png'
import '../AirFreightSection/AirFreight.css'
import './Contact.css'

const Contact = () => {
        const [isNavBgVisible, setIsNavBgVisible] = useState(false)
        const [isLoading, setIsLoading] = useState(false)

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
    <div className='air-freight contact-us'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />
      <div className='hero'>
        <div className='air-freight-hero-section'>
          <h1 data-aos="fade-up">Contact Us</h1>
          <div data-aos='fade-up' className='quick-link'>
              <Link to={'/'} className='home'>Home</Link>
              <div className='bage'>
                  <div className='bage-1'></div>
                  <div className='bage-2'></div>
              </div>
              <Link to={'/shipment-tracking-pilot'} className='about-section'>Track Shipment</Link>
          </div>
        </div>
        <div className='qr'><img src={qr} alt="" /></div>
      </div>
      
      <div className='contact-lable-container-fluid'>
        <div className='contact-lable-container'>
          <div className='contact-bage'>
            <div className='small-bage'></div>
            <div className='big-bage'></div>
          </div>
          <div className='label'>Contact Us</div>
        </div>
        <div className='heading'>Get in touch with us</div>
      </div>

      <div className='contact-fluid-container'>
        <div className='left-contact-container'>
          <div className='left-contact'>
            <div className='contact'>
              <div className='contact-all'><img src={contact_phone_01} alt="contact_phone_01" /></div>
              <a href="tel:+2349063676192">+234 (0) 9063676192</a>
            </div>
            <div className='contact'>
              <div className='contact-all'><img src={contact_mail_01} alt="contact_phone_01" /></div>
              <a href="mailto:relysmiled@gmail.com">relysmiled@gmail.com</a>
            </div>
            <div className='contact'>
              <div className='contact-all'><img src={contact_location_01} alt="contact_phone_01" /></div>
              <div className='location'>2300 Broadway, Oakland, CA 94612, United States.</div>
            </div>
          </div>
          <div className='qr'><img src={qr} alt="scan-QR" /></div>
        </div>
        <div className='right-fluid-container'>
          <div className='label'>Call us or fill the form</div>
          <form className='form'>
            <div className='label-input'>
              <label>Your name<span>*</span></label>
              <input type="text" name="" id="" placeholder='Your name here' required />
            </div>
            <div className='label-input'>
              <label>Your Email<span>*</span></label>
              <input type="email" name="" id="" placeholder='Your email here' required/>
            </div>
            <div className='label-input'>
              <label>Your Subject<span>*</span></label>
              <input type="text" name="" id="" placeholder='Your subject here' required />
            </div>
            <div className='label-input'>
              <label>Contact Number</label>
              <input type="number" name="" id="" placeholder='Your phone here' />
            </div>
            <div className='label-input'>
              <label>Message<span>*</span></label>
              <textarea name="" id="" placeholder='Tell us a few words' required />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className='footer'><Footer /></div>
    </div>
  )
}

export default Contact