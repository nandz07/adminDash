import React from 'react'
import Routers from '../routes/Routers'
import Sidebar from '../components/shared/Sidebar'
import Header from '../components/shared/Header'

function Layout() {
  return (
    <>
      <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>

        {/* <div className='bg-sky-200'>Header</div> */}
        <Sidebar />
        <div className='flex-1 flex flex-col'>
          <Header />
          <div className='p-4 overflow-y-auto flex-1'><Routers /></div>

        </div>
        {/* <div>Footer</div> */}
      </div>
    </>
  )
}

export default Layout