import React, { useEffect, useState, useContext } from 'react'
import {auth, db}  from '../../firebase/config'
import { toast } from 'react-toastify'
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import save from '../../assets/icons/save.png'
import settingsIcon from '../../assets/icons/settings.png'
import palette from '../../assets/icons/palette.png'
import extension from '../../assets/icons/extension.png'
import { arrayUnion, doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { AppContext } from '../../Context/Context';
import './Settings.css'

const Settings = () => {
    const {currentAdmin, settings} = useContext(AppContext)
    const [setting, setSetting] = useState([])
    const [pageTitle, setPageTitle] = useState('Settings')
    const [generalActiveStyle, setGeneralActiveStyle] = useState(true)
    const [apearanceActiveStyle, setApearanceActiveStyle] = useState(false)
    const [featuresActiveStyle, setFeaturesActiveStyle] = useState(false)
    const [gsettingsData, setGsettingsData] = useState([])
    const [appearancesettingData, setAppearancesettingsData] = useState([])
    const [appName, setAppName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [logoColorPicker, setLogoColorPicker] = useState('#000')
    const [primaryColorPicker, setPrimaryColorPicker] = useState('#008080')
    const [settingsToggle, setSettingsToggle] = useState(false)
    const [settingsTogglefetch, setSettingsToggleFetch] = useState([])
    const [toggleDeleteSettings, setToggleDeleteSettings] = useState(true)
    const [toggleAddBookSettings, setToggleAddBookSettings] = useState(true)
    const [toggleUpdateAdminSettings, setToggleUpdateAdminSettings] = useState(true)
    const [toggleDeleteAdminSettings, setToggleDeleteAdminSettings] = useState(true)
    const [toggleAddAdminSettings, setToggleAddAdminSettings] = useState(true)
    const [isPageDimmed, setIsPageDimmed] = useState(false)
    const [state, setState] = useState(false)
    const [newLocation, setNewLocation] = useState('')
    const [newSubject, setNewSubject] = useState('')
    const [newPublicationType, setNewPublicationType] = useState('')

    const handleSaveSettings = async() => {
        setIsLoading(true)
        try{
            await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
                appName: appName || settings?.appName
            })
            toast.success('Settings saved successfully', {
                toastId: 1,
            })
        }catch(err){
            toast.error('Settings can not be saved at this time, try again', {
                toastId: 2,
            })
        }finally{
            setIsLoading(false)
        }
    }
    const enableDeleteAdmin = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isDeleteAdminButtonActive: false,
        })
        try{
            toast.warning('You turned off Delete Admin button.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const disableDeleteAdmin = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isDeleteAdminButtonActive: true,
        })
        try{
            toast.success('You turned on Delete Admin button.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const enableResetPassword = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isResetPasswordPanelActive: false,
        })
        try{
            toast.warning('You turned off Reset Password panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const disableResetPassword = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isResetPasswordPanelActive: true,
        })
        try{
            toast.success('You turned on Reset Password panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const enableUpdateAdmin = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isUpdateAdminPanelActive: false,
        })
        try{
            toast.warning('You turned off Update Admin panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const disableUpdateAdmin = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isUpdateAdminPanelActive: true,
        })
        try{
            toast.success('You turned on Update Admin panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const enableAddAdmin = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isAddAdminPanelActive: false,
        })
        try{
            toast.warning('You turned off Add Admin panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const disableAddAdmin = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isAddAdminPanelActive: true,
        })
        try{
            toast.success('You turned on Add Admin panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const enableDeleteOrder = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isDeleteOrderButtonActive: false,
        })
        try{
            toast.warning('You turned off Delete Order Buttton.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const disableDeleteOrder = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isDeleteOrderButtonActive: true,
        })
        try{
            toast.success('You turned on Delete Order Button.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const enableUpdateOrder = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isUpdateOrderPanelActive: false,
        })
        try{
            toast.warning('You turned off Update Order panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const disableUpdateOrder = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isUpdateOrderPanelActive: true,
        })
        try{
            toast.success('You turned on Update Order panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const enableCreateOrder = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isCreateOrderPanelActive: false,
        })
        try{
            toast.warning('You turned off Create Order panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }
    const disableCreateOrder = async() => {
        await updateDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'), {
            isCreateOrderPanelActive: true,
        })
        try{
            toast.success('You turned on Create Order panel.', {
                toastId: 1,
            });
        }catch(err){

        }
    }

    const handleGeneralActiveStyle = () => {
        setGeneralActiveStyle(true)
        setApearanceActiveStyle(false)
        setFeaturesActiveStyle(false)
    }
    const handleApearanceActiveStyle = () => {
        setGeneralActiveStyle(false)
        setApearanceActiveStyle(true)
        setFeaturesActiveStyle(false)
    }
    const handleFeaturesActiveStyle = () => {
        setFeaturesActiveStyle(true)
        setGeneralActiveStyle(false)
        setApearanceActiveStyle(false)
    }

    useEffect(() => {
        const fetchAllSettings = async() => {
        try{
            const settingsRef = await getDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'))
            if(settingsRef.exists()){
                setSetting(settingsRef.data())
            }
        }catch(err){
            console.log(err)
        }
    }
    fetchAllSettings()
    })

  return <>
  <div className='settings-container'>
    <NavBar setPageTitle = {setPageTitle} />
    <div className='settings'>
        <PageTitle pageTitle = {pageTitle} />
        <div className='settings-items'>
            <div className='save-settings'>
                {!featuresActiveStyle &&
                <div onClick={handleSaveSettings} className='save-btn'>
                    <img src={save} alt="icon" />
                    <div>{isLoading? 'Saving...' : 'Save Settings'}</div>
                </div>}
            </div>

            <div className='navigate-container'>
                <div onClick={handleGeneralActiveStyle} className={generalActiveStyle? 'nav-item nav-item-active': !generalActiveStyle? 'nav-item' : generalActiveStyle? 'nav-item nav-item-active': 'nav-item'}>
                    <img src={settingsIcon} alt="icon" />
                    <div>General</div>
                </div>
                <div onClick={handleApearanceActiveStyle} className={apearanceActiveStyle? 'nav-item nav-item-active': !apearanceActiveStyle? 'nav-item' : apearanceActiveStyle?'nav-item nav-item-active': 'nav-item'}>
                    <img src={palette} alt="icon" />
                    <div>Apearance</div>
                </div>
                <div onClick={handleFeaturesActiveStyle} className={featuresActiveStyle?'nav-item nav-item-active ': !featuresActiveStyle? 'nav-item' : featuresActiveStyle? 'nav-item nav-item-active': 'nav-item'}>
                    <img src={extension} alt="icon" />
                    <div>Features</div>
                </div>
            </div>

            {generalActiveStyle &&

            <div className='general-settings'>
                <div className='title'>General Settings</div>
                <div className='info'>Manage app basic information and configuration</div>
                {currentAdmin?.adminRole === 'super admin'?
                <>
                    <div className='app-name-container'>
                        <label>Change App name</label>
                        <input onChange={(e) => setAppName(e.target.value)} type="text" placeholder={setting?.appName} />
                        <div className='app-info'>App Original name: <span style={{color: 'teal'}}>Blackweb</span></div>
                    </div><br /><br /><br />
                </>:
                <div
                    style={{
                        padding: '18px 22px',
                        borderRadius: '10px',
                        backgroundColor: '#fff4f4',
                        color: '#8a1f1f',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: '1px solid #f1c2c2',
                        lineHeight: '1.6',
                        maxWidth: '520px',
                        margin: '40px auto',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    }}
                    >
                    Access denied. {currentAdmin?.username}, you do not have permission to perform this operation.
                </div>

}
            </div>}

            {featuresActiveStyle &&

            <div className='general-settings'>
                <div className='title'>Feature Settings</div>
                <div className='info'>Enable or disable specific features on your app</div>
                {currentAdmin?.adminRole === 'super admin'?
                <div className='feature-container'>
                    {currentAdmin?.adminRole === 'super admin' &&
                    <div className='settings-container-state'>
                        <div className='settings-state'>
                            <div className='title ft'>Create Order</div>
                            <div className='info'>Turn on and off Create Order feature</div>
                        </div>
                        <div className='toggle'> 
                            {setting.isCreateOrderPanelActive?
                            <svg onClick={enableCreateOrder} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e97e6a" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            :
                            <svg onClick={disableCreateOrder} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            }
                        </div>
                    </div>}
                    {currentAdmin?.adminRole === 'super admin' &&
                    <div className='settings-container-state'>
                        <div className='settings-state'>
                            <div className='title ft'>Update Order</div>
                            <div className='info'>Turn on and off Update Order feature</div>
                        </div>
                        <div className='toggle'>
                            {setting?.isUpdateOrderPanelActive?
                            <svg onClick={enableUpdateOrder} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e97e6a" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            :
                            <svg onClick={disableUpdateOrder}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            }
                        </div>
                    </div>}
                    {currentAdmin?.adminRole === 'super admin' &&
                    <div className='settings-container-state'>
                        <div className='settings-state'>
                            <div className='title ft'>Delete Order</div>
                            <div className='info'>Turn on and off Delete Order feature</div>
                        </div>
                        <div className='toggle'>
                            {setting?.isDeleteOrderButtonActive?
                            <svg onClick={enableDeleteOrder} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e97e6a" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            :
                            <svg onClick={disableDeleteOrder}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            }
                        </div>
                    </div>}
                    {currentAdmin?.adminRole === 'super admin' &&
                    <div className='settings-container-state'>
                        <div className='settings-state'>
                            <div className='title ft'>Add Admin</div>
                            <div className='info'>Turn on and off Add Admin feature</div>
                        </div>
                        <div className='toggle'>
                            {setting?.isAddAdminPanelActive?
                            <svg onClick={enableAddAdmin} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e97e6a" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            :
                            <svg onClick={disableAddAdmin}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            }
                        </div>
                    </div>}
                    {currentAdmin?.adminRole === 'super admin' &&
                    <div className='settings-container-state'>
                        <div className='settings-state'>
                            <div className='title ft'>Update Admin</div>
                            <div className='info'>Turn on and off Add Admin feature</div>
                        </div>
                        <div className='toggle'>
                            {setting?.isUpdateAdminPanelActive?
                            <svg onClick={enableUpdateAdmin} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e97e6a" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            :
                            <svg onClick={disableUpdateAdmin}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            }
                        </div>
                    </div>}
                    {currentAdmin?.adminRole === 'super admin' &&
                    <div className='settings-container-state'>
                        <div className='settings-state'>
                            <div className='title ft'>Reset Password</div>
                            <div className='info'>Turn on and off Reset Password feature</div>
                        </div>
                        <div className='toggle'>
                            {setting?.isResetPasswordPanelActive?
                            <svg onClick={enableResetPassword} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e97e6a" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            :
                            <svg onClick={disableResetPassword}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            }
                        </div>
                    </div>}
                    {currentAdmin?.adminRole === 'super admin' &&
                    <div className='settings-container-state'>
                        <div className='settings-state'>
                            <div className='title ft'>Delete Admin</div>
                            <div className='info'>Turn on and off Delete Admin feature</div>
                        </div>
                        <div className='toggle'>
                            {setting?.isDeleteAdminButtonActive?
                            <svg onClick={enableDeleteAdmin} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#e97e6a" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            :
                            <svg onClick={disableDeleteAdmin}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            }
                        </div>
                    </div>}
                </div>
                :
                <div
                    style={{
                        padding: '18px 22px',
                        borderRadius: '10px',
                        backgroundColor: '#fff4f4',
                        color: '#8a1f1f',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: '1px solid #f1c2c2',
                        lineHeight: '1.6',
                        maxWidth: '520px',
                        margin: '40px auto',
                        textAlign: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    }}
                    >
                    Access denied. {currentAdmin?.username}, you do not have permission to perform this operation.
                </div>}
            </div>}
        </div>
    </div>
  </div>
</>}

export default Settings