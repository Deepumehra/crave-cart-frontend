import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../Admin/AddRestaurants/CreateRestaurantForm'
import Navbar from '../customers/components/Navbar/Navbar'
import Search from '../customers/components/Search/Search'
import PasswordChangeSuccess from '../customers/pages/Auth/PasswordChangeSuccess'
import Cart from '../customers/pages/Cart/Cart'
import HomePage from '../customers/pages/Home/HomePage'
import NotFound from '../customers/pages/NotFound/NotFound'
import PaymentCancel from '../customers/pages/PaymentSuccess/PaymentCancel'
import PaymentSuccess from '../customers/pages/PaymentSuccess/PaymentSuccess'
import Profile from '../customers/pages/Profile/Profile'
import Restaurant from '../customers/pages/Restaurant/Restaurant'


const CustomerRoutes = () => {
  return (
    <div className='relative'>
        <nav className="sticky top-0 z-50">
            <Navbar/>
        </nav>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/account/:register' element={<HomePage/>}/>
            <Route exact path='/restaurant/:city/:title/:id' element={<Restaurant/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
            <Route path='/cancel' element={<PaymentCancel/>}/>
            <Route path='/my-profile/*' element={<Profile nav={true}/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/admin/add-restaurant' element={<CreateRestaurantForm/>}/>
            <Route exact path='/password_change_success' element={<PasswordChangeSuccess/>}/>
            <Route exact path='/*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default CustomerRoutes