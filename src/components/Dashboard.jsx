import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <p>This is Dashboard</p>
            <Link className='underline' to='/products'> go to products</Link>
        </div>
    )
}

export default Dashboard