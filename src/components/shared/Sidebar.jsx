import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { Link } from 'react-router-dom'

const linkClasses=''

function Sidebar() {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <FcBullish fontSize={24} />
        <span className='text-neutral-100 text-lg'>OpenShop</span>
      </div>
      <div className='flex-1'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div>bottom part</div>
    </div>
  )
}

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className='flex items-center gap-2 font-light px-3 py-2
     hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}

export default Sidebar