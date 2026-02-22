import React, { useState } from 'react'
import PageTitle from '../Components/PageTitle'
import NavBar from '../Components/NavBar'
import './ContolHub.css'

const ContolHub = () => {
    const [pageTitle, setPageTitle] = useState('🔐 User Roles & Permissions')

  return (
      <div className='admin-role-container'>
    <NavBar setPageTitle = {setPageTitle}/>
    <div className='admin-role'>
        <PageTitle pageTitle = {pageTitle} />
        <div className='admin'>
            <div className='super-admin'>👑 Super Admin</div>
            <i className='info'>The Super Admin has full access and control over the entire system. This role includes:</i>
            <ol className='admin-role-list'>
                <li>Managing all users (including other Admins)</li>
                <li>Creating and deleting Admins</li>
                <li>Resetting any user’s password</li>
                <li>Viewing and editing all system data</li>
                <li>Access to all settings and configurations</li>
                <li>Full monitoring privileges</li>
            </ol>
            <i className='info'>Super Admin is the highest-level role with unrestricted access.</i>


            <div className='super-admin admin-x'>🛠️ Admin</div>
            <i className='info'>Admins have limited control and responsibilities. This role includes:</i>
            <ol className='admin-role-list'>
                <li>Adding and updating regular records (e.g., books)</li>
                <li>Viewing and editing all system data</li>
                <li>Access to some settings and configurations</li>
                <li>Full monitoring privileges</li>
            </ol>
            <i className='info'>Admins are responsible for day-to-day operations but with restrictions to protect system integrity.</i>
        </div>
    </div>
  </div>
  )
}

export default ContolHub