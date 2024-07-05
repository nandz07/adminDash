import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatusGrid from './DashboardStatusGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileCart from './BuyerProfileCart'

function Dashboard() {
    return (
        <div className='flex flex-col gap-4'>
            <DashboardStatusGrid />
            <div className='flex flex-row gap-4 w-full'>
                <TransactionChart />
                <BuyerProfileCart />
            </div>
        </div>
    )
}

export default Dashboard