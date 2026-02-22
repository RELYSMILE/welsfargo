import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context'
import PublicNavigation from '../../Components/PublicNavigation'
import Footer from '../../Components/Footer/Footer'
import AOS from 'aos'
import { Link } from 'react-router-dom'
import faq_01 from '../../assets/images/faq-01.jpg'
import '../AirFreightSection/AirFreight.css'
import './faq.css'

const FAQ = () => {
  const {settings} = useContext(AppContext)
  const [isNavBgVisible, setIsNavBgVisible] = useState(false)
  const [isQuestionClicked, setIsQuestionClicked] = useState('')

  const FAQ = [
    {
      id: 1,
      qeustion: 'How quickly can you get my shipment to the location needed?',
      anwser: 'We ensure that your shipment arrives on time prior to the arrival date scheduled.',
    },
    {
      id: 2,
      qeustion: `Who Can Use ${settings?.appName} Courier Company?`,
      anwser: `${settings?.appName} Courier Company is a B2B platform allowing businesses of any form with readily available shipments.`,
    },
    {
      id: 3,
      qeustion: `What modes and services does ${settings?.appName} Courier Company Provide?`,
      anwser: 'We offer services for international and domestic freight, small parcel shipping, B2C solutions, freight and parcel audit and reporting, and overall supply chain management.',
    },
    {
      id: 4,
      qeustion: 'What are the pricing options?',
      anwser: 'Prices vary for each shipment. For more inquiries on pricing, please contact us directly.',
    },
    {
      id: 5,
      qeustion: 'Do you offer door to door service?',
      anwser: 'Yes, this means we will pick up the package and drop it off as close to your desired destination as possible.',
    },
    {
      id: 6,
      qeustion: `Does ${settings?.appName} Courier Company have international capabilities?`,
      anwser: `Yes, ${settings?.appName} Courier Company is a licensed agent of UnitedEx, a leading authorized reseller of DHL Express services. In addition, we offer the services of valued freight and brokerage service providers, giving our customers options for ocean, land and air freight, for any import or export needs.`,
    },
    {
      id: 7,
      qeustion: `What safety programs/policies does ${settings?.appName} Courier Company have in place?`,
      anwser: `${settings?.appName} Courier Company takes very seriously its responsibility for safety in all aspects of its business and operations. At all levels of the organization, we are committed to uphold the highest standards with regard to safety, health, the environment, and security.`,
    },
  ]

  const handleViewAnswer = (e) => {
    setIsQuestionClicked(e)
  }
  const handleCloseAnswer = () => {
    setIsQuestionClicked('')
  }


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
    <div className='air-freight faq'>
      <PublicNavigation isNavBgVisible = {isNavBgVisible} />

      <div className='air-freight-hero-section'>
        <h1 data-aos="fade-up">FAQ</h1>
        <div data-aos='fade-up' className='quick-link'>
            <Link to={'/'} className='home'>Home</Link>
            <div className='bage'>
                <div className='bage-1'></div>
                <div className='bage-2'></div>
            </div>
            <Link to={'/shipment-tracking-pilot'} className='about-section'>Track Shipment</Link>
        </div>
      </div>
      <div className='faq-fluid-container'>
        <div className='faq-image'><img src={faq_01} alt="faq_01" /></div>
        <div className='faq-container'>
          {FAQ.map((faq, idx) => (
            <div className='questions-container'>
              <div className='questions'>
                <div key={idx} className='question'>{faq?.qeustion}</div>
                {isQuestionClicked != faq.id?
                  <div onClick={(e) => handleViewAnswer(faq.id)} className='more'>+</div>
                  :
                  <div onClick={handleCloseAnswer} className='more'>-</div>
                }
              </div>
              {isQuestionClicked === faq.id && <div className='answer'>{faq.anwser}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className='footer'><Footer /></div>
    </div>
  )
}

export default FAQ