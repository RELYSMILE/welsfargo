import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo/partner-02.png'
import more_down from '../assets/icons/more_down.png'
import more_down_gray from '../assets/icons/more_down_gray.png'
import arrow_left from '../assets/icons/arrow_left.png'
import menu from '../assets/icons/menu.png'
import close from '../assets/icons/close.png'
import './PublicNavigation.css'

const PublicNavigation = ({isNavBgVisible, homeId}) => {
  const [isHomeScreenActive, setIsHomeScreenActive] = useState(true)  
  const [isAboutScreenActive, setIsAboutScreenActive] = useState(false)
  const [isServiceScreenActive, setIsServiceScreenActive] = useState(false)
  const [isTrackScreenActive, setIsTrackScreenActive] = useState(false)
  const [isFAQScreenActive, setIsFAQScreenActive] = useState(false)
  const [isContactScreenActive, setIsContactScreenActive] = useState(false)
  const [isServicesClicked, setIsServicesClicked] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)


  const HomeScreen = () => {
    setIsAboutScreenActive(false)
    setIsServiceScreenActive(false)
    setIsContactScreenActive(false)
    setIsServicesClicked(false)
    setIsFAQScreenActive(false)
    setIsTrackScreenActive(false)
    setIsHomeScreenActive(true)
  }
  const AboutScreen = () => {
    setIsHomeScreenActive(false)
    setIsServiceScreenActive(false)
    setIsContactScreenActive(false)
    setIsServicesClicked(false)
    setIsTrackScreenActive(false)
    setIsFAQScreenActive(false)
    setIsAboutScreenActive(true)
  }
  const ServicesScreen = () => {
    setIsHomeScreenActive(false)
    setIsAboutScreenActive(false)
    setIsContactScreenActive(false)
    setIsTrackScreenActive(false)
    setIsFAQScreenActive(false)
    setIsServiceScreenActive(true)
  }
  const ContactScreen = () => {
    setIsHomeScreenActive(false)
    setIsAboutScreenActive(false)
    setIsServiceScreenActive(false)
    setIsContactScreenActive(false)
    setIsServicesClicked(false)
    setIsTrackScreenActive(false)
    setIsFAQScreenActive(false)
    setIsContactScreenActive(true)
  }
  const TrackShipmentScreen = () => {
    setIsHomeScreenActive(false)
    setIsAboutScreenActive(false)
    setIsServiceScreenActive(false)
    setIsContactScreenActive(false)
    setIsServicesClicked(false)
    setIsContactScreenActive(false)
    setIsFAQScreenActive(false)
    setIsTrackScreenActive(true)
  }
  const FAQScreen = () => {
    setIsHomeScreenActive(false)
    setIsAboutScreenActive(false)
    setIsServiceScreenActive(false)
    setIsContactScreenActive(false)
    setIsServicesClicked(false)
    setIsContactScreenActive(false)
    setIsFAQScreenActive(false)
    setIsTrackScreenActive(false)
    setIsFAQScreenActive(true)
  }
  const LoginScreen = () => {
    setIsHomeScreenActive(false)
    setIsAboutScreenActive(false)
    setIsServiceScreenActive(false)
    setIsContactScreenActive(false)
    setIsServicesClicked(false)
    setIsContactScreenActive(false)
    setIsFAQScreenActive(false)
    setIsTrackScreenActive(false)
    setIsFAQScreenActive(true)
  }

  const HandleCloseNavBar = () => {
    setIsMobileNavOpen(false)
  }
  const HandleOpenNavBar = () => {
    setIsMobileNavOpen(true)
  }

  return<>
    <div className={isNavBgVisible? 'navigation-parent-container navigation-parent-container-window-scroll' : 'navigation-parent-container'}>
      <Link to='/' target='_top'>
        <div className={isNavBgVisible?'logo-container logo-container-window-scroll': 'logo-container'}> {/* logo image details*/}
            <img src={logo} alt="" /> 
        </div>
      </Link>
      <div className='nav-items-container'>
          <div className='nav-items'>
              <Link to={'/'}><div onClick={HomeScreen} className={isHomeScreenActive? 'nav-item active-nav-item' : 'nav-item'}>Home</div></Link>
              <Link to={'/about'}><div onClick={AboutScreen} className={isAboutScreenActive? 'nav-item active-nav-item' : 'nav-item'}>About</div></Link>
              <div onClick={ServicesScreen} className={isServiceScreenActive? 'nav-item active-nav-item services' : 'nav-item services'}>
                <div onClick={() => setIsServicesClicked((prev) => !prev)} className='services-lable'>
                  <div>Services</div>
                  {isNavBgVisible? <img src={more_down_gray} alt="enter" /> : <img src={more_down} alt="enter" />}
                </div>
                {isServicesClicked &&
                <div className='services-container'>
                  <Link to={'/services-air-freight'}>
                    <div className='service'>
                      <div>Air Freight</div>
                      <img src={arrow_left} alt="enter" />
                    </div>
                  </Link>
                  <Link to={'/services-road-transport'}><div className='service'>Road Transport</div></Link>
                  <Link to={'/services-ocean-freight'}><div className='service'>Ocean Freight</div></Link>
                  <Link to={'/services-rail-freight'}><div className='service'>Rail Freight</div></Link>
                  <Link to={'/services-warehousing'}><div className='service'>Warehousing</div></Link>
                  <Link to={'/services-multimodal'}><div className='service'>Multimodal</div></Link>
              </div>}
              </div>
            
              <Link to={'/shipment-tracking-pilot'}><div onClick={TrackShipmentScreen} className={isTrackScreenActive? 'nav-item active-nav-item' : 'nav-item'}>Track Shipment</div></Link>
              <Link to={'/contact-us'}><div onClick={ContactScreen} className={isContactScreenActive? 'nav-item active-nav-item' : 'nav-item'}>Contact</div></Link>
              <Link to={'/FAQ'}><div onClick={FAQScreen} className={isFAQScreenActive? 'nav-item active-nav-item' : 'nav-item'}>FAQ</div></Link>
              <Link to={'/signin authentication center'}><div onClick={FAQScreen} className={isFAQScreenActive? 'nav-item active-nav-item' : 'nav-item'}>Signin</div></Link>
          </div>

          <Link to='https://wa.link/l7mq9q' target='_blank'><div className={isNavBgVisible? 'tracking-button-window-scroll' : 'tracking-button'}>Request Quote</div></Link>
      </div>

      {/* ================================ Mobile Version ====================================== */}
      <div onClick={HandleOpenNavBar} className={isNavBgVisible? 'burger-button-window-scroll burger-button' : 'burger-button'}>
        <img src={menu} alt="more" />
      </div>
      {isMobileNavOpen &&
      <div className='sm-nav-items-container'>
        <div className='logo-close-button'>
          <Link to='/' target='_top'>
          <div className='sm-logo-container'> {/* logo image details*/}
                <img className='logo' src={logo} alt="" /> 
          </div>
          </Link>
          <div onClick={HandleCloseNavBar} className='close-button'><img src={close} alt="close" /></div>
        </div>


          <div className='nav-items'>
              <Link to={'/'} style={{color: '#fff'}}><div onClick={HandleCloseNavBar} className='nav-item'>Home</div></Link>
              <Link to={'/about'} style={{color: '#fff'}}><div onClick={AboutScreen} className='nav-item'>About Us</div></Link>
              <div className='nav-item nav-item-services'>
                <div onClick={() => setIsServicesClicked((prev) => !prev)} className='services-lable'>
                  <div>Our Services</div>
                  {isNavBgVisible? <img src={more_down_gray} alt="enter" /> : <img src={more_down} alt="enter" />}
                </div>
                <div className='services-container'>
                  <Link to={'/services-air-freight'}>
                    <div className='service service-x'>
                      <div>Air Freight</div>
                      <img src={arrow_left} alt="enter" />
                    </div>
                  </Link>
                  <Link to={'/services-road-transport'}>
                    <div className='service service-x'>
                      <div>Road Transport</div>
                      <img src={arrow_left} alt="enter" />
                    </div>
                  </Link>
                  <Link to={'/services-ocean-freight'}>
                    <div className='service service-x'>
                      <div>Ocean Freight</div>
                      <img src={arrow_left} alt="enter" />
                    </div>
                  </Link>
                  <Link to={'/services-rail-freight'}>
                    <div className='service service-x'>
                      <div>Rail Freight</div>
                      <img src={arrow_left} alt="enter" />
                    </div>
                  </Link>
                  <Link to={'/services-warehousing'}>
                    <div className='service service-x'>
                      <div>Warehousing</div>
                      <img src={arrow_left} alt="enter" />
                    </div>
                  </Link>
                  <Link to={'/services-multimodal'}>
                    <div className='service service-x'>
                      <div>Multimodal</div>
                      <img src={arrow_left} alt="enter" />
                    </div>
                  </Link>
              </div>
              </div>
              <Link to={'/shipment-tracking-pilot'} style={{color: '#fff'}}><div onClick={TrackShipmentScreen} className='nav-item'>Track Shipment</div></Link>
            
              <Link to={'/contact-us'} style={{color: '#fff'}}><div onClick={ContactScreen} className='service'>Contact</div></Link>
              <Link to={'/FAQ'} style={{color: '#fff'}}><div onClick={FAQScreen} className='service'>FAQ</div></Link>
              <Link to={'/signin authentication center'} style={{color: '#fff'}}><div onClick={LoginScreen} className='service'>Signin</div></Link>
          </div>

          <Link to={'https://wa.link/l7mq9q'} target='_blank'><div className='tracking-button'>Request Quote</div></Link>
      </div>}
    </div>
  </>
}

export default PublicNavigation