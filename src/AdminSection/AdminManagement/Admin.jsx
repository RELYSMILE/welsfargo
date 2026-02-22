import React, { useEffect, useState, useContext } from 'react'
import {auth, db}  from '../../firebase/config'
import { toast } from 'react-toastify';
import NavBar from '../Components/NavBar';
import visibilityOff from '../../assets/icons/visibilityoff.png'
import lock from '../../assets/icons/lock.png'
import mail from '../../assets/icons/mail.png'
import piarrowfoward from '../../assets/icons/piarrowfoward.png'
import visibilityOn from '../../assets/icons/visibility.png'
import user from '../../assets/icons/user.png'
import shield from '../../assets/icons/shield.png'
import PageTitle from '../Components/PageTitle';
import { AppContext } from '../../Context/Context';
import './Admin.css'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

const Admin = () => {
    const {admins, settings, currentAdmin,} = useContext(AppContext)
    const[userCredential, setUserCredential] = useState({})
    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [pageTitle, setPageTitle] = useState('Admin Management')
    const [formPanel, setFormPanel] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [adminRole, setAdminRole] = useState([])
    const [adminDetail, setAdminDetail] = useState([])
    const [adminsUpdateComponent, setAdminsUpdateComponent] = useState(false)
    const [adminsPasswordResetComponent, setAdminsPasswordResetComponent] = useState(false)
    const [resetEmail, setResetEmail] = useState([])


const handleCloseForm = () => {
        setFormPanel(false)
    }
    const handleOpenForm = () => {
        setFormPanel(true)
    }
    const handleAdminCredentials = (e) => {
        setUserCredential({...userCredential, [e.target.name] : e.target.value})
    }
    const creatAdmin = async() => {
        setIsLoading(true)
        try{
            const admin = await createUserWithEmailAndPassword(auth, userCredential.email, userCredential.password)
            await setDoc(doc(db, 'admin', admin.user.uid ), {
                adminID: admin.user.uid,
                username: userCredential?.username,
                adminRole: adminRole,
                email: admin.user.email,
                createdAt: serverTimestamp()
            })
            toast.success('New admin has been created successfully.', {
                toastId: 1,
            })
        }catch(error){
                  if(error.message == "Cannot read properties of null (reading 'name')"){
                    toast.error('You did not select a profile image!', {
                        toastId: 'unique-toast-id'
                    })
                }
                  if(error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                    toast.error('Password should be at least 6 characters (weak-password).', {
                        toastId: 'unique-toast-id'
                    })
                }
                  if(error.message == 'Firebase: Error (auth/missing-password).'){
                    toast.error('Please Fill Password Field!', {
                        toastId: 'unique-toast-id'
                    })
                }
                  if(error.message == 'Firebase: Error (auth/missing-email).'){
                      toast.error('Please Fill Email Field!', {
                        toastId: 'unique-toast-id'
                    })
                }
                  if(error.message == 'Firebase: Error (auth/invalid-email).'){
                      toast.error('Invalid email adress!', {
                        toastId: 'unique-toast-id'
                    })
                }
                if(error.message == 'Firebase: Error (auth/email-already-in-use).'){
                  toast.error('This Email is already registered, Login instead', {
                        toastId: 'unique-toast-id'
                    })
                }
                if(error.message == 'Firebase: Error (auth/internal-error).'){
                  toast.error('Check your internet connection, (authenticaton/internal-error).', {
                        toastId: 'unique-toast-id'
                    });
                }
                if(error.message == 'Firebase: Error (auth/network-request-failed).'){
                    toast.error('It looks like you are not connected to internet', {
                        toastId: 'unique-toast-id'
                    })
                }
                if(error.message == 'Firebase: Error (auth/admin-restricted-operation).'){
                    toast.error('Restricted-operation, Filling the fields', {
                        toastId: 'unique-toast-id'
                    })
                }
              }finally{
                setIsLoading(false)
              }
    }
    const handleGetAdminInfo = async(adminID) => {
      const admin_ID = adminID
      if(admin_ID === adminID) {
        setAdminsUpdateComponent(true)
            try{
                const admin =  await getDoc(doc(db, 'admin', adminID))
                if(admin.exists()){
                setAdminDetail(admin.data())
            }
            }catch(error){
                console.log(error)
            }
      }else{
        setAdminsUpdateComponent(false)
      }
    }
    const handleResetPassword = async(adminID) => {
      const admin_ID = adminID
      if(admin_ID === adminID) {
        setAdminsPasswordResetComponent(true)
            try{
                const admin =  await getDoc(doc(db, 'admin', adminID))
                if(admin.exists()){
                setAdminDetail(admin.data())
            }
            }catch(error){
                console.log(error)
            }
      }else{
        setAdminsPasswordResetComponent(false)
      }
    }

    const resetPassword = async() => {
      setIsLoading(true)

      try{
        await sendPasswordResetEmail(auth, adminDetail.email)
        toast.success('Password reset email sent successfully. Please check your inbox!', {
          toastId: 'reset',
        })
      }catch(error){
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }

    const handleDeleteBook = async(adminID)=> {
        try{
            const confirmDelete = window.confirm('Are you sure you want to delete this Admin?')
            if(confirmDelete){
                await deleteDoc(doc(db, 'admin', adminID))
                toast.success('Admin deleted successfully', {
                toastId: 1
                })
            }
        }catch(error){
            console.log(error)
            toast.error('Error delecting Admin', {
                toastId: 1
            })
        }
    }

    const handleUpdateAdmin = async() => {
      setIsLoading(true)

      try{
        await updateDoc(doc(db, 'admin', adminDetail.adminID), {
          adminRole: adminRole,
        })
        toast.success('Admin has been updated successfully.', {
          toastId: 1,
        })
      }catch(error){
        toast.error('Something went wrong. Please try again later.', {
          toastId: 2,
        })
      }finally{
        setIsLoading(false)
      }
    }

    const handleCloseAdminsUpdateComponent = ()=> {
      setAdminsUpdateComponent(false)
    }
    const handleCloseAdminsPasswordResetComponent = ()=> {
      setAdminsPasswordResetComponent(false)
    }

  return (
  <div className='admin-management-container'>
        <NavBar setPageTitle = {setPageTitle} />

        <div className='admin-management'>
            <PageTitle pageTitle = {pageTitle} />

      {!adminsUpdateComponent &&
      <>
      {!adminsPasswordResetComponent &&
      <>
            {!formPanel &&
            <div className='btn-add-admin'>
                <button onClick={handleOpenForm} className='btn'>Add Admin</button>
            </div>}

            {formPanel &&
            <div className='form-container'>
                <div className='nav'>
                    <img onClick={handleCloseForm} src={piarrowfoward} alt="" />
                    <div className='label'>Create Admin Here</div>
                </div>
                {settings?.isAddAdminPanelActive?
                <>
                <div className='form-field'>
                    <label htmlFor="">Username</label>
                    <div className='form-input'>
                        <img src={user} alt="" />
                        <input onChange={(e) => handleAdminCredentials(e)} type="text" name="username" id="" placeholder='Enter your username' />
                    </div>
                </div>
                <div className='form-field'>
                    <label htmlFor="">Role</label>
                    <div className='form-input'>
                        <img src={shield} alt="" />
                        <select onChange={(e) => setAdminRole(e.target.value)} name="" id="">
                            <option disabled selected>Select admin role</option>
                            <option value="super admin">Super Admin</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
                <div className='form-field'>
                    <label htmlFor="">Email</label>
                    <div className='form-input'>
                        <img src={mail} alt="" />
                        <input onChange={(e) => handleAdminCredentials(e)} type="text" name="email" id="" placeholder='Enter your email address' />
                    </div>
                </div>
                <div className='form-field'>
                    <label htmlFor="">Password</label>
                    <div className='form-input'>
                        <img src={lock} alt="" />
                        <input onChange={(e) => handleAdminCredentials(e)} type={passwordVisibility? 'password':'text'} name="password" id="" placeholder='Enter your passcode' />
                        {passwordVisibility?
                        <img onClick={(e) => setPasswordVisibility((prev) => !prev)} src={visibilityOff} alt="icon" />
                        :
                        <img onClick={(e) => setPasswordVisibility((prev) => !prev)} src={visibilityOn} alt="icon" />}
                    </div>
                </div>
                <div onClick={creatAdmin} className='btn-add-admin'>
                    <button div className='btn'>{isLoading? 'Processing...' : 'Create'}</button>
                </div>
              </>
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
                  This component has been temporarily disabled by the Super Administrator.  
                  To proceed, please enable access from the settings panel or contact an administrator for assistance.
            </div>}
            </div>}

            <div className='admin'>
  <table className='admin-table'>
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
        <th>Added On</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {admins.map((admin, idx) => (
        <tr key={idx}>
          <td style={{textTransform: 'capitalize'}}>{admin.username}</td>
          <td style={{textTransform: 'lowercase'}}>{currentAdmin?.adminRole === 'super admin'? admin.email: admin.email? (() => {
            const [name, domain] = admin.email.split('@')
            return `${name.slice(0,2)}***${domain}`
          })() : '***@***' }</td>
          <td style={{textTransform: 'capitalize'}}>{admin.adminRole}</td>
          <td>{admin?.createdAt?.toDate()?.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</td>
          <td>
            <button onClick={(e) => handleGetAdminInfo(admin.adminID)} className="action-btn update">Update</button>
            <button onClick={(e) => handleResetPassword(admin.adminID)} className="action-btn Reset">Reset</button>
            {settings?.isDeleteAdminButtonActive &&
            <button onClick={(e) => handleDeleteBook(admin.adminID)} className="action-btn Delete">Delete</button>}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>}
</>}

{adminsUpdateComponent &&
  <div className='form-container'>
                <div className='nav'>
                    <img onClick={handleCloseAdminsUpdateComponent} src={piarrowfoward} alt="" />
                    <div className='label'>{`${adminDetail.username}'s Information`}</div>
                </div>
              {settings?.isUpdateAdminPanelActive?
              <>
                <div className='form-field'>
                    <label htmlFor="">Username</label>
                    <div className='form-input'>
                        <img src={user} alt="" />
                        <input className='disabled' disabled type="text" name="username" id="" value={adminDetail.username} />
                    </div>
                </div>
                <div className='form-field'>
                    <label htmlFor="">Role</label>
                    <div className='form-input'>
                        <img src={shield} alt="" />
                        <select onChange={(e) => setAdminRole(e.target.value)} name="" id="">
                            <option disabled selected>Select admin role</option>
                            <option value="super admin">Super Admin</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
                <div className='form-field'>
                    <label htmlFor="">Email</label>
                    <div className='form-input'>
                        <img src={mail} alt="" />
                        <input className='disabled' disabled type="text" name="email" id="" value={adminDetail.email} />
                    </div>
                </div>
                <div onClick={handleUpdateAdmin} className='btn-add-admin'>
                    <button div className='btn'>{isLoading? 'Processing...' : 'Update'}</button>
                </div>
              </>
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
                  This component has been temporarily disabled by the Super Administrator.  
                  To proceed, please enable access from the settings panel or contact an administrator for assistance.
            </div>}
  </div>}

  {adminsPasswordResetComponent &&

  <div className='form-container' >
                <div className='nav'>
                    <img onClick={handleCloseAdminsPasswordResetComponent} src={piarrowfoward} alt="" />
                    <div className='label'>{`${adminDetail.username}'s Email`}</div>
                </div>
                {settings?.isResetPasswordPanelActive?
                <>
                <div className='form-field'>
                    <label htmlFor="">Email</label>
                    <div  className='form-input'>
                        <img src={mail} alt="" />
                        <input onChange={(e) => setResetEmail(e.target.value)} type="text" name="email" id="" value={adminDetail.email} />
                    </div>
                </div>
                <div onClick={resetPassword} className='btn-add-admin'>
                    <button div className='btn'>{isLoading? 'Sending...' : 'Send link'}</button>
                </div>
                </>
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
                  This component has been temporarily disabled by the Super Administrator.  
                  To proceed, please enable access from the settings panel or contact an administrator for assistance.
            </div>}
  </div>}

      </div>
</div>
  )
}

export default Admin