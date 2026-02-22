import React, { useEffect, useState, useContext } from 'react'
import { auth, db, provider } from '../../firebase/config'
import { toast } from 'react-toastify';
import LoginNav from '../../Components/LoginNav';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/Context';
import signin_01 from '../../assets/images/signin-01.jpg'
import './SignIn.css'

const SignIn = () => {
    const {currentAdmin, settings} = useContext(AppContext)
    const [isLoading, setisLoading] = useState(false)
    const[userCredential, setUserCredential] = useState({})
    const navigate = useNavigate()

    const handleUserCredentials = (e) => {
        setUserCredential({...userCredential, [e.target.name] : e.target.value})
      }

    const HandleSinin = async(e) => {
        e.preventDefault()
        setisLoading(true)
        try{
            await signInWithEmailAndPassword(auth, userCredential.email, userCredential.password)
            navigate('/shipment center')
            toast.info(`Welcome back ${currentAdmin.username && currentAdmin.username || ''}`,{
                toastId: 1,
            })
        }catch(error){
            if(error.message == 'Firebase: Error (auth/invalid-credential).'){
                toast.error('Authentication failed: invalid email/password', {
                    toastId: 2,
                })
            }
            if(error.message == 'Firebase: Error (auth/missing-password).'){
                toast.error('Please Fill Password Field!', {
                    toastId: 2,
                })
            }
            if(error.message == 'Firebase: Error (auth/missing-email).'){
                toast.error('Please Fill Email Field!', {
                    toastId: 2,
                })
            }
            if(error.message == 'Firebase: Error (auth/internal-error).'){
                toast.error('Check your internet connection, (authenticaton/internal-error).', {
                    toastId: 2,
                })
            }
            if(error.message == 'Firebase: Error (auth/network-request-failed).'){
                toast.error('It looks like you are not connected to internet', {
                    toastId: 2,
                })
            }
            if(error.message == 'Firebase: Error (auth/admin-restricted-operation).'){
                toast.error('Restricted-operation, Filling the fields', {
                    toastId: 2,
                })
            }
          }finally{
            setisLoading(false)
          }
    }
  return (<>
  <div className='app-login-container'>
    <div className='nav'><LoginNav /></div>

    <div className='login-container'>
        <form action="">
            <h1>Get Started</h1>
            <div className='heading'>Welcome to {settings?.appName} Courier Company - Access your account here</div>

            <label htmlFor="">Email Address</label>
            <input style={{fontSize: '16px'}} onChange={(e) => handleUserCredentials(e)} type="text" name="email" id="" placeholder='Enter your email address'/>
            <label htmlFor="">Password</label>
            <input style={{fontSize: '16px'}} onChange={(e) => handleUserCredentials(e)} type="password" name="password" id="" placeholder='Enter your password' />
            <div onClick={HandleSinin}>{isLoading? 'Processing...' : 'Login'}</div>
        </form>

        <div className='login-lb-1'><img src={signin_01} alt="" /></div>
    </div>
  </div>
  </>)
}

export default SignIn