import { createContext, useEffect, useState } from "react";
import {auth, db} from '../firebase/config'
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
export const AppContext = createContext()

export const ContextProvider = (props) => {
    const [isContextLoading, setIsContextLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const [admins, setAdmins] = useState([])
    const [orderLenght, setOrderLenght] = useState('')
    const [adminLenght, setAdminLenght] = useState('')
    const [currentAdmin, setCurrentAdmin] = useState([])
    const [settings, setSettings] = useState([])
    
useEffect(() => {
    const HandleFetchOrder = async() => {
        setIsContextLoading(true)
        try{
            const dataBaseRef = collection(db, 'orders')
            const orderRef = await getDocs(dataBaseRef)
            const orderRefData = orderRef.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setOrders(orderRefData)
            setOrderLenght(orderRefData.length)
        }catch(error){
            if(error){
                toast.error('error occoured, try again', {
                    toastId: 1,
                })
            }
        }finally{
            setIsContextLoading(false)
        }
    }
    const handleFetchAllAdmin = async() => {
        try{
            const dataBaseRef = collection(db, 'admin')
            const adminRef = await getDocs(dataBaseRef)
            const adminRefFiltered = adminRef.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setAdmins(adminRefFiltered)
            setAdminLenght(adminRefFiltered.length)
        }catch(err){
            if(err){
                toast.error('error occoured, try again', {
                    toastId: 1,
                })
            }
        }
    }
    const unsubscribe = auth.onAuthStateChanged(async(user) => {
        try{
            if(user){
                const {uid} = user;
                const admin = await getDoc(doc(db, 'admin',uid));
                if(admin.exists()){
                    setCurrentAdmin(admin.data())
                }
            }
        }catch(err){
            console.log(err)
        }
    })

    const fetchAllSettings = async() => {
        try{
            const settingsRef = await getDoc(doc(db, 'settings', 'Us54GBR8e4zAcssGrj8m'))
            if(settingsRef.exists()){
                setSettings(settingsRef.data())
            }
        }catch(err){
            console.log(err)
        }
    }

    HandleFetchOrder()
    handleFetchAllAdmin()
    fetchAllSettings()
}, []);


return <AppContext.Provider value={{orders, isContextLoading, admins, orderLenght, adminLenght, currentAdmin, settings,}}>
        {props.children}
    </AppContext.Provider>
}