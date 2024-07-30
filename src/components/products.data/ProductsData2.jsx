import React from 'react'
import { product_data2 } from '../../assets/assets'

import { IoShareSocial } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ProductsData2 = () => {
  return (
    <div>
      <div className="products-container" style={{zIndex: '2', position: 'relative'}}>
                {product_data2.map((product, index) => {
                    return (
                        <div key={index} className="products-card">
                            <div className="products-img">
                                <img src={product.image} alt={product.name} />
                                {(product.foiz) ? <div className="products-foiz">30%</div> : <div></div>}
                                {(product.new) ? <div className='products-new'>New</div> : <div></div>}
                                <div className="products-actions">
                                    <Link to='/singleProduct' className='add-to-cart'>Add to cart</Link>
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
    </div>
  )
}

export default ProductsData2
