import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Routers