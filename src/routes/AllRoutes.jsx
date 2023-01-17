import React from 'react'
import {Routes,Route} from "react-router-dom";
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Products from '../pages/Products'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes
