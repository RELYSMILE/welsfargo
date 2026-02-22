import React from 'react'
import Home from '../Public/Home/Home'
import About from '../Components/About/About'
import AirFreight from '../Public/AirFreightSection/AirFreight'
import RoadTransport from '../Public/RoadTransportSection/RoadTransport'
import OceanFreight from '../Public/OceanFreightSection/OceanFreight'
import RailFreight from '../Public/RailFreightSection/RailFreight'
import Warehousings from '../Public/WarehousingSection/Warehousings'
import Multimodal from '../Public/MultimodalSection/Multimodal'
import TrackShipment from '../Public/TrackShipmentSection/TrackShipment'
import Contact from '../Public/ContactSection/Contact'
import FAQ from '../Public/FAQ/FAQ'
import OrderSection from '../Public/OrderSection/OrderSection'
import Dashboard from '../AdminSection/Dashboard/Dashboard'
import NewShipment from '../AdminSection/NewShipmentSection/NewShipment'
import OrderCenter from '../AdminSection/OrderSection/OrderCenter'
import UpdateOrder from '../AdminSection/UpdateOrder/UpdateOrder'
import ContolHub from '../AdminSection/ContolHub/ContolHub'
import Admin from '../AdminSection/AdminManagement/Admin'
import SignIn from '../Public/LoginAuth/SignIn'
import Settings from '../AdminSection/Settings/Settings'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const routes = [
    { path: '/', element: <Home />, errorElement: <div>Error 4O4</div>},
    { path: '/about', element: <About />},
    { path: '/services-air-freight', element: <AirFreight />},
    { path: '/services-road-transport', element: <RoadTransport />},
    { path: '/services-ocean-freight', element: <OceanFreight />},
    { path: '/services-rail-freight', element: <RailFreight />},
    { path: '/services-warehousing', element: <Warehousings />},
    { path: '/services-multimodal', element: <Multimodal />},
    { path: '/shipment-tracking-pilot', element: <TrackShipment />},
    { path: '/contact-us', element: <Contact />},
    { path: '/FAQ', element: <FAQ />},
    { path: '/track-order/:orderID', element: <OrderSection />},
    { path: '/signin authentication center', element: <SignIn />},

    //================================ Admin Section ================================================
    { path: '/shipment center', element: <Dashboard />},
    { path: '/schedule delivery', element: <NewShipment />},
    { path: '/delevery management', element: <OrderCenter />},
    { path: '/delevery update/:orderID', element: <UpdateOrder />},
    { path: '/user management', element: <ContolHub />},
    { path: '/operations manager', element: <Admin />},
    { path: '/system settings', element: <Settings />},
]
const router = createBrowserRouter(routes)

const Routers = () => {

  return <RouterProvider router = {router} />
}

export default Routers