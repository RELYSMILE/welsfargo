import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase/config'
import { toast } from 'react-toastify'
import cancel from '../../assets/icons/piarrowfoward.png'
import './OrderDetails.css'
import { doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const OrderDetails = ({handleCloseViewOrderDetails, orderID}) => {
    const [order, setOrder] = useState({})
    const [trackingPanel, setTrackingPanel] = useState(false)
    const navigate = useNavigate()

    const handleUpdateOrder = (orderID) => {
        navigate(`/delevery update/${orderID}`)
    }

    const handleDepartedForFinalCentral = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isDepartedForFinalCentral: false,
                departedForFinalCentralAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleNotDepartedForFinalCentral = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isDepartedForFinalCentral: true,
                departedForFinalCentralAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleArriveAtABVDistribution = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isArriveAtABVDistribution: false,
                arriveAtABVDistributionAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleNotArriveAtABVDistribution = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isArriveAtABVDistribution: true,
                arriveAtABVDistributionAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleLoadedAtLosDistribution = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isLoadedAtLosDistribution: false,
                loadedAtLosDistributionAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleNotLoadedAtLosDistribution = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isLoadedAtLosDistribution: true,
                loadedAtLosDistributionAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleArriveAtDistribution = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isArriveAtDistribution: false,
                arriveAtDistribution: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleNotArriveAtDistribution = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isArriveAtDistribution: true,
                arriveAtDistribution: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleLoadedInLosInt = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isLoadedInLosInt: false,
                LoadedInLosInt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleNotLoadedInLosInt = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isLoadedInLosInt: true,
                LoadedInLosInt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleReceivedInLosInt = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isReceivedInLosInt: false,
                receivedInLosIntAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleNotReceivedInLosInt = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isReceivedInLosInt: true,
                receivedInLosIntAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleCustomsClearanceCompleted = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isCustomsClearanceCompleted: false,
                customsClearanceCompletedAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleCustomsClearanceNotCompleted = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isCustomsClearanceCompleted: true,
                customsClearanceCompletedAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handlePickedUpByCustoms = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isPickedUpByCustoms: false,
                pickedUpByCustomsAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }

    const handleNotPickedUpByCustoms = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isPickedUpByCustoms: true,
                pickedUpByCustomsAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleFlightDeparted = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isFlightDeparted: false,
                flightDepartedAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
        const handleFlightNotDeparted = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isFlightDeparted: true,
                flightDepartedAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleOrderArrivedAtAirport = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isOrderArrivedAtAirport: false,
                ArrivedAtAirportAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleOrderNotArrivedAtAirport = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isOrderArrivedAtAirport: true,
                ArrivedAtAirportAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }

    const handleOrderShipped = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isOrderShipped: false,
                OrderShippedAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleOrderNotShipped = async() => {
        try{
            updateDoc(doc(db, 'orders', order.orderID), {
                isOrderShipped: true,
                OrderShippedAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const customReverseScript = async(id) => {
        try{
            updateDoc(doc(db, 'orders', id), {
                isOrderSubmited: false,
                OrderSubmitedAt: serverTimestamp()
            })
            toast.info('Your request has been reversed.', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const customTrueseScript = async(id) => {
        try{
            updateDoc(doc(db, 'orders', id), {
                isOrderSubmited: true,
                OrderSubmitedAt: serverTimestamp()
            })
            toast.success('Your request has been submitted successfully..', {
                toastId: 1,
            });
        }catch(error){
            console.log(error)
        }
    }
    const handleOrderNotSubmitted = () => {
        customTrueseScript(order.orderID) 
    }
    const handleOrderSubmitted = () => {
        customReverseScript(order.orderID)
    }


    useEffect(() => {
        const fetchOrder = async() => {
            try{
                const orderData = await getDoc(doc(db, 'orders', orderID))
                
                if(orderData.exists()){
                    setOrder(orderData.data())
                }
            }catch(error){
                toast.error('There has been fatal error fetching order, check your internet connection',{
                    toastId: '11',
                })
            }
        }
        fetchOrder()
    })
    return <div className='book-detail-container'>
    <div className='book-container'>
        <div className='back-button-contain' onClick={handleCloseViewOrderDetails}><img src={cancel} alt="Back" /></div>
        
        <div className='book-title-author'>
            <div className='title'>{order.clientName}</div>
            <div className='by'>
                <div className='line'></div>
                <div className='by-x'>Address</div>
                <div className='line'></div>
            </div>
            <div className='author'>{order.clientAddress}</div>
        </div>

        <div className='details'>
            <div className='book-details'>
                <label>Tracking number</label>
                <div className='tag'>{order.trackingNumber}</div>
            </div>
            <div className='book-details'>
                <label>Package information</label>
                <div className='tag'>{order.packageInfo}</div>
            </div>
            <div className='book-details'>
                <label>Delivery range</label>
                <div className='tag'>{order.deliveryRange}</div>
            </div>
            <div className='book-details'>
                <label>Order created on</label>
                <div className='tag'>{order.createdAt?.toDate()?.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                })}<span style={{color: 'tomato'}}></span></div>
            </div>
        </div>

        <div className='track-update-container'>
            {trackingPanel?
            <button onClick={(e) =>setTrackingPanel(prev => !prev)} className='track-btn close'>Done</button>
            :
            <button onClick={(e) =>setTrackingPanel(prev => !prev)} className='track-btn'>Track Order</button>}
            <button onClick={(e)=>handleUpdateOrder(order.orderID)} className='update-btn'>Update Order</button>
        </div>
        {trackingPanel &&
        <div className='tracking-wrapper'>
            <div className='track-item'>
                <div className='text'>Order Submitted</div>
                {order?.isOrderSubmited? 
                <svg onClick={handleOrderSubmitted} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleOrderNotSubmitted}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Order shipped</div>
                {order?.isOrderShipped? 
                <svg onClick={handleOrderShipped} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleOrderNotShipped}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Package arrived at airport, awaiting flight</div>
                {order?.isOrderArrivedAtAirport? 
                <svg onClick={handleOrderArrivedAtAirport} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleOrderNotArrivedAtAirport}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Flight departure</div>
                {order?.isFlightDeparted? 
                <svg onClick={handleFlightDeparted} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleFlightNotDeparted}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Picked up by customs clearance</div>
                {order?.isPickedUpByCustoms? 
                <svg onClick={handlePickedUpByCustoms} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleNotPickedUpByCustoms}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Customs clearance completed</div>
                {order?.isCustomsClearanceCompleted? 
                <svg onClick={handleCustomsClearanceCompleted} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleCustomsClearanceNotCompleted}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Received in 【LOS-INT】</div>
                {order?.isReceivedInLosInt? 
                <svg onClick={handleReceivedInLosInt} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleNotReceivedInLosInt}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Loaded at 【LOS-INT】</div>
                {order?.isLoadedInLosInt? 
                <svg onClick={handleLoadedInLosInt} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleNotLoadedInLosInt}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Arrive at Distribution 【DC-LOS】</div>
                {order?.isArriveAtDistribution? 
                <svg onClick={handleArriveAtDistribution} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleNotArriveAtDistribution}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Loaded at 【LOS-Distribution center】</div>
                {order?.isLoadedAtLosDistribution? 
                <svg onClick={handleLoadedAtLosDistribution} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleNotLoadedAtLosDistribution}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Arrive at 【ABV-Distribution Center】</div>
                {order?.isArriveAtABVDistribution? 
                <svg onClick={handleArriveAtABVDistribution} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleNotArriveAtABVDistribution}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
            <div className='track-item'>
                <div className='text'>Departed for 【FINAL-CENTRAL】</div>
                {order?.isDepartedForFinalCentral? 
                <svg onClick={handleDepartedForFinalCentral} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#099b2d" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                :
                <svg onClick={handleNotDepartedForFinalCentral}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#808080" d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                }
            </div>
        </div>}
    </div>
    
  </div>
}

export default OrderDetails