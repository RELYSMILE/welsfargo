import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/Context'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import PageTitle from '../Components/PageTitle'
import OrderDetails from '../Components/OrderDetails'
import searchGreen from '../../assets/icons/searchGreen.png'
import filterGreen from '../../assets/icons/filterGreen.png'
import more from '../../assets/icons/more.png'
import visibilityIcon from '../../assets/icons/visibility1.png'
import deleteIcon from '../../assets/icons/delete.png'
import updateIcon from '../../assets/icons/update.png'
import statminus from '../../assets/icons/statminus.png'
import cancel from '../../assets/icons/cancel.png'
import LoadingSpinner from '../Components/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import './OrderCenter.css'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { toast } from 'react-toastify'

const OrderCenter = () => {
    const {orders, isContextLoading, settings} = useContext(AppContext)
    const [pageTitle, setPageTitle] = useState('Delivery Management')
    const [moreComponent, setMoreComponent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [orderID, setOrderID] = useState('')
    const navigate = useNavigate()


    const handleMorePanel = (orderID) => {
        setOrderID(orderID)
        setMoreComponent(false)
    }
    const handleViewOrderDetails = () => {
        setMoreComponent(true)
    }
    const handleCloseViewOrderDetails = () => {
        setMoreComponent(false)
    }
    const handleCloseMorePanel = () => {
        setOrderID(null)
    }

    const handleUpdateOrder = (orderID) => {
        navigate(`/delevery update/${orderID}`)
    }
    const handleDeleteOrder = async(orderID) => {
        const confirmDelete = window.confirm('Are sure you want to permanently delete this order?')
        if(confirmDelete){
            try{
                await deleteDoc(doc(db, 'orders', orderID))
                toast.success('Order deleted!!', {
                    toastId: 1,
                    theme: 'dark',
                })
            }catch(err){
                    toast.error('Order cannot be deleted at this moment, try agian', {
                    toastId: 1,
                    theme: 'dark',
                })
            }
        }
    }
  return <>
  <div className='librarymanagement-container'>
        <NavBar />

        <div  className='librarymanagement'>
            <div className='fixed'>
            <div id='scroll-bg-screen' className='title-add-book'>
                <div className='PageTitle'><PageTitle pageTitle = {pageTitle} /></div>
                <div className='add'><Link className='add-link' to='/schedule delivery'><span>+</span>Order</Link></div>
            </div>

            <div className='search-filter'>
                <div className='search'>
                    <img src={searchGreen} alt="icon" />
                    <input onChange={(e) => setSearch(e.target.value)} type="text"  placeholder='Search by Tracking number, Client name, Client address, Delivery range, package information' />
                </div>

                <div className='filter'>
                    <img src={filterGreen} alt="icon" />
                    <div className='filter-select'>
                        <div className='label'>Filter</div>
                        <select onChange={(e)=>setSearch(e.target.value)}>
                            <option value="">All</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>
            <div id='scroll'></div>
            <div className='books-cont'>
                <table>
                    <tr className='table-row'>
                        <th style={{width: '3rem',  background: '#e97e6a'}}>counter</th>
                        <th style={{width: '51%'}}>Client Name</th>
                        <th>Client Address</th>
                        <th style={{width: '2rem'}}>Action</th>
                    </tr>
                </table><br />
                {isContextLoading? <div className='loading-spinner'><div className='info'>Loading Order</div><LoadingSpinner /></div> :
                <>
                {orders?.filter((record) => {
                    const input = search?.trim()?.toLowerCase()
                    return input === '' ||
                    (record?.trackingNumber + '')?.toLowerCase()?.includes(input) ||
                    (record?.clientName + '')?.toLowerCase()?.includes(input) ||
                    (record?.packageInfo + '')?.toLowerCase()?.includes(input) ||
                    (record?.clientAddress + '')?.toLowerCase()?.includes(input) ||
                    (record?.deliveryRange + '')?.toLowerCase()?.includes(input)
                }).map((order, idx) => (
                    <table className='publication-table' key={idx}>
                    <tr className={idx % 2 === 0? ' tr even' : 'tr odd'}>
                        <td style={{width: '3rem', textAlign: 'center'}}>{idx}</td>
                        <td style={{width: '50%', textTransform: 'capitalize'}}>{order?.clientName}</td>
                        <td>{order?.clientAddress}</td>
                        <td style={{width: '2rem', cursor: 'pointer'}} >
                            {order?.orderID === orderID?

                            <div className='morePanelClassName-main-container'>
                                <div onClick={handleCloseMorePanel} className='close-wrapper'>
                                    <img style={{width: '1.2rem', height: '1.2rem'}} src={cancel} alt="Close" />
                                </div>
                                <div className='more-panel'>
                                    <div onClick={handleViewOrderDetails} className='item'>
                                        <img src={visibilityIcon} alt="icon" />
                                        <div className='label'>Track & Manage</div>
                                    </div>
                                    <div onClick={(e)=>handleUpdateOrder(order?.orderID)} className='item'>
                                        <img src={updateIcon} alt="icon" />
                                        <div className='label'>Update Order</div>
                                    </div>
                                    {settings?.isDeleteOrderButtonActive &&
                                    <div onClick={(e)=>handleDeleteOrder(order?.orderID)} className='item'>
                                        <img src={deleteIcon} alt="icon" />
                                        <div className='label'>Delete Order</div>
                                    </div>}
                                </div>
                            </div>
                                :
                                <img onClick={(e) => handleMorePanel(order?.orderID)} src={more} alt="More" />
                            }
                        </td>
                    </tr>
                    </table>
                ))}
                </>}
            </div>
            <a className='bg-screen'  href='#scroll-bg-screen'><img src={statminus} alt="up" /></a>
            <a className='scroll'  href='#scroll'><img src={statminus} alt="up" /></a>
            {moreComponent &&
            <OrderDetails orderID = {orderID} handleCloseViewOrderDetails = {handleCloseViewOrderDetails} />}
        </div>
  </div>
</>}


export default OrderCenter