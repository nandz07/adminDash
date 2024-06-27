import React from 'react'
import Routers from '../routes/Routers'

function Layout() {
  return (
    <>
    <div className='bg-sky-200'>Header</div>
    <div className='bg-teal-200'>sidebar</div>
    <div><Routers/></div>
    <div>Footer</div>
    </>
  )
}

export default Layout