import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../components/Dashboard'
import Products from '../components/Products'
import Login from '../components/Login'

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='products' element={<Products />} />
        <Route path='login' element={<Login/>}>

        </Route>
    </Routes>
  )
}

export default Routers