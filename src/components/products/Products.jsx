import React from 'react'
import './Products.css'

import { Link } from 'react-router-dom';
import ProductsData from '../products.data/ProductsData';
import ProductsData2 from '../products.data/ProductsData2';

const Products = () => {
    return (
        <div className='products'>
            <div className="products-title">
                <h1>Our Products</h1>
            </div>
                    <ProductsData/>
                    <ProductsData2/>
            <div className="products-btn">
                <Link to='/shop'>Show More</Link>
            </div>

        </div>
    )
}

export default Products
