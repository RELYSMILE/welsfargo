import React, { useEffect, useState, useContext } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo/partner-02.png'
import logo1 from '../../assets/icons/logo1.png'
import user from '../../assets/icons/user.png'
import shield from '../../assets/icons/shield.png'
import dashboard from '../../assets/icons/dashboard.png'
import books from '../../assets/icons/books.png'
import verifiedx from '../../assets/icons/verifiedx.png'
import admin from '../../assets/icons/admin.png'
import totalbooks from '../../assets/icons/totalbooks.png'
import menu from '../../assets/icons/menu.png'
import close from '../../assets/icons/close.png'
import settings from '../../assets/icons/settings.png'
import logoutIcon from '../../assets/icons/logout.png'
import refresh from '../../assets/icons/refresh.png'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'


const NavBar = () => {
    const {currentAdmin} = useContext(AppContext)
    const [activeNavBar, setActiveNavBar] = useState(false)
    const navigate = useNavigate()
    const NavItems = [
        {icon: dashboard, item: 'Quick Stats', link: '/shipment center', title: 'Admin Dashboard'},
        {icon: books, item: 'Create Order', link: '/schedule delivery', title: 'Book shipment'},
        {icon: totalbooks, item: 'Order Center',  link: '/delevery management', title: 'Track & Manage'},
        {icon: shield, item: 'Control Hub',  link: '/user management', title: 'Team Management'},
        {icon: admin, item: 'Administrator',  link: '/operations manager', title: 'Control Officers'},
        {icon: settings, item: 'Settings',  link: '/system settings', title: 'Preferences'},
    ]

    const displayNavBar = () => {
        setActiveNavBar(true)
    }
    const closeNavBar = () => {
        setActiveNavBar(false)
    }

    const handlSignOut = async() => {
        auth.signOut()
        navigate('/signin authentication center')
        if(auth.signOut()){
            toast.info(`${currentAdmin.username} your Session has ended successfully`, {
                toastId: 1
            })
        }
    }

    const ReloadApp = () => {
        location.reload()
    }


  return<> <div className='nav-container'>
    <div className='logo-admin-name-container'>
        <div className='logo-container'>
            <div className='logo-container-x'>
                {/* <img src={logo1} alt='Logo' /> */}
                <img src={logo} alt='Logo' />
            </div>
            {/* <div className='logo-name'>BlackWeb</div> */}
        </div>

        <div className='currentUser-role-container'>
            <div className='currentUser-container'>
                <img src={user} alt="icon" />
                <div className='currentUser'>{currentAdmin?.username}</div>
            </div>
            <div className='role-container'>
                <img src={verifiedx} alt="icon" />
                <div className='role'>{currentAdmin?.adminRole}</div>
            </div>
        </div>
    </div>

    <div className='nave-items'>
        {NavItems.map((item, idx) => (
        <Link to={item?.link} title={item.title} key={idx}>
            <div className='nav-item'>
                <img src={item?.icon} alt="icon" />
                <div className='item'>{item?.item}</div>
            </div>
        </Link>
        ))}

        <div onClick={ReloadApp} className='logout-button reload-button'>
            <img src={refresh} alt="refresh" />
            <div>Refresh App</div>
        </div>
        <div onClick={handlSignOut} className='logout-button'>
            <img src={logoutIcon} alt="logout" />
            <div>Logout</div>
        </div>
        <div className='version'>
            <div>Version 1.0.0.0</div>
        </div>
    </div>
  </div>

  {/* ===================================== small screen nav=================================================== */}

  <div className={activeNavBar? 'small-screen-nav small-screen-nav-active' : 'small-screen-nav small-screen-nav-none-active'}> 
    <div className='logo-admin-name-container'>
        <div className='logo-container'>
            <div className='logo-container-x'>
                {/* <img src={logo1} alt='Logo' /> */}
                <img src={logo} alt='Logo' />
            </div>
            {/* <div className='logo-name'>Black Web</div> */}
        </div>

        <div className='currentUser-role-container'>
            <div className='currentUser-container'>
                <img src={user} alt="icon" />
                <div className='currentUser'>Rely of Lagos</div>
            </div>
            <div className='role-container'>
                <img src={verifiedx} alt="icon" />
                <div className='role'>Super Admin</div>
            </div>
        </div>
    </div>

     <div className='nave-items'>
        {NavItems.map((item, idx) => (
        <Link onClick={closeNavBar} to={item?.link} key={idx}>
            <div className='nav-item'>
                <img src={item?.icon} alt="icon" />
                <div className='item'>{item?.item}</div>
            </div>
        </Link>
        ))}
        <div onClick={ReloadApp} className='logout-button reload-button'>
            <img src={refresh} alt="refresh" />
            <div>Reload App</div>
        </div>
        <div className='logout-button'>
            <img src={logoutIcon} alt="logout" />
            <div>Logout</div>
        </div>
        <div className='version'>
            <div>App Version 1.0.0.0</div>
        </div>
    </div>
  </div>

  <div className='bugger-button'>
    {!activeNavBar?
    <img onClick={displayNavBar} src={menu} alt="menu" />
    :
    <img onClick={closeNavBar} src={close} alt="menu" />}
  </div>
</>}

export default NavBar