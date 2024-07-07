import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatusGrid from './DashboardStatusGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileCart from './BuyerProfileCart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

function Dashboard() {
    return (
        <div className='flex flex-col gap-4'>
            <DashboardStatusGrid />
            <div className='flex flex-row gap-4 w-full'>
                <TransactionChart />
                <BuyerProfileCart />
            </div>
            <div className='flex flex-row gap-4 w-full'>
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    )
}

export default Dashboard