import React from 'react'
import './Products.css'
import { assets, product_data1, product_data2 } from '../../assets/assets'
import { IoShareSocial } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { MdOutlineCompareArrows } from "react-icons/md";

import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='products'>
            <div className="products-title">
                <h1>Our Products</h1>
            </div>
            <div className='products-container' style={{ marginTop: '60px' }}>
                {product_data1.map((product, index) => {
                    return (
                        <div key={index} className="products-card">
                            <div className="products-img">
                                <img src={product.image} alt={product.name} />
                                {(product.foiz) ? <div className="products-foiz">30%</div> : <div></div>}
                                {(product.new) ? <div className='products-new'>New</div> : <div></div>}
                                <div className="products-actions">
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className="products-link">
                                        <p><IoShareSocial/>Share</p>
                                        <p><i><MdOutlineCompareArrows/></i>Compare</p>
                                        <p><FaRegHeart/>Like</p>
                                    </div>
                                </div>
                            </div>
                            <div className="products-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="products-price">
                                    <h4>{product.price}</h4>
                                    <span>{product.discount}</span>
                                </div>
                            </div>

                            
                        </div>
                    )
                })}
            </div>
            <div className="products-container">
                {product_data2.map((product, index) => {
                    return (
                        <div key={index} className="products-card">
                            <div className="products-img">
                                <img src={product.image} alt={product.name} />
                                {(product.foiz) ? <div className="products-foiz">30%</div> : <div></div>}
                                {(product.new) ? <div className='products-new'>New</div> : <div></div>}
                                <div className="products-actions">
                                    <button className='add-to-cart'>Add to cart</button>
                                    <div className="products-link">
                                        <p><IoShareSocial/>Share</p>
                                        <p><i><MdCompareArrows/></i>Compare</p>
                                        <p><FaRegHeart/>Like</p>
                                    </div>
                                </div>
                            </div>
                            <div className="products-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="products-price">
                                    <h4>{product.price}</h4>
                                    <span>{product.discount}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="products-btn">
                <Link to='/shop'>Show More</Link>
            </div>

        </div>
    )
}

export default Products
