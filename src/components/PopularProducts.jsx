import React from 'react'
import { Link } from 'react-router-dom'

function PopularProducts() {

    const popularProductsData = [
        {
            id: 1,
            product_name: "Smartphone XYZ",
            product_thumbnail: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
            product_price: 699.99,
            product_stock: 50
        },
        {
            id: 2,
            product_name: "Laptop ABC",
            product_thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
            product_price: 1099.99,
            product_stock: 30
        },
        {
            id: 3,
            product_name: "Wireless Earbuds",
            product_thumbnail: "https://images.unsplash.com/photo-1570818743698-4108c24e7d5e",
            product_price: 149.99,
            product_stock: 200
        },
        {
            id: 4,
            product_name: "Smartwatch 123",
            product_thumbnail: "https://images.unsplash.com/photo-1517949900825-16a0c9f59ee3",
            product_price: 199.99,
            product_stock: 75
        },
        {
            id: 5,
            product_name: "Tablet DEF",
            product_thumbnail: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
            product_price: 499.99,
            product_stock: 40
        }
    ]

    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
            <strong className='text-gray-700 font-medium'>Popular Products</strong>
            <div className='mt-4 flex flex-col gap-3'>
                {popularProductsData.map(product => (
                    <Link to={`products/${product.id}`} className='flex hover:no-underline hover:bg-gray-100'>
                        <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
                            <img className='w-full h-full object-cover'
                                src={product.product_thumbnail} alt={product.product_name} />
                        </div>
                        <div className='ml-4 flex-1'>
                            <p className='text-sm text-gray-800'>{product.product_name}</p>
                            <span className='text-sm font-medium'>{product.product_stock} in stock</span>
                        </div>
                        <div className='text-xs text-gray-400 pl-2'>{product.product_price}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PopularProducts