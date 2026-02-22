import React, { useContext, useState } from 'react'
import PageTitle from '../Components/PageTitle'
import NavBar from '../Components/NavBar'
import totalorder from '../../assets/icons/totalbooks.png'
import security from '../../assets/icons/security.png'
import bookorder from '../../assets/icons/clock.png'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/Context'

const Dashboard = () => {
    const [pageTitle, setPageTitle] = useState('Dashboard')
    const {orderLenght, adminLenght, settings} = useContext(AppContext)
    const dashboard = [
        {title: 'Order Overview', num: orderLenght, icon: totalorder, link: '/delevery management'},
        { title: 'Administrator Count', num: adminLenght, icon: security, link: '/operations manager'},
        {title: 'Book Order', num: settings?.isCreateOrderPanelActive? 'New' : 'Off', icon: bookorder, link: settings?.isCreateOrderPanelActive && '/schedule delivery'},
    ]

    return <>
  <div className='dashboard-container'>
    <NavBar />
    <div className='dashboard'>
        <PageTitle pageTitle = {pageTitle} />
        <div className='dashboard-items'>
            {dashboard.map((item, idx) => (
            <Link to={item?.link}>
                <div key={idx} className='dashboard-items-main'>
                    <div className='dashboard-items-flex'>
                        <img src={item?.icon} alt="" />
                        <div>{item.title}</div>
                    </div>
                    <div className='dashboard-items-num'>{item?.num<10 ? '0'+item?.num : item?.num}</div>
                </div>
            </Link>
            ))}
        </div>
    </div>
  </div>
  </>
}

export default Dashboard