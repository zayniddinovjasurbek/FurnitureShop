import React from 'react'
import './SingleProducts.css'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, NavLink } from 'react-router-dom'
import { single_product_imgs } from '../../assets/assets'
import { FaStar, FaStarHalf, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import ProductsData from '../../components/products.data/ProductsData'

const SingleProducts = () => {
  return (
    <div className='singleProduct'>
      <h3><NavLink to='/'>Home</NavLink> <IoIosArrowForward /> <NavLink to='/shop'>Shop</NavLink> <IoIosArrowForward /><div></div> <NavLink to='/singleProduct'>Asgaard sofa</NavLink>
      </h3>
      <div className='singleProduct-container'>
            <div className="singleProduct-shop">
                <div className="singleProduct-shop-left">
                    <div className="singleProduct-con1">
                        <img src={single_product_imgs.single_product_img1} alt="" />
                        <img src={single_product_imgs.single_product_img2} alt="" />
                        <img src={single_product_imgs.single_product_img3} alt="" />
                        <img src={single_product_imgs.single_product_img4} alt="" />
                    </div>
                    <div className="singleProduct-con2">
                        <img src={single_product_imgs.single_product_img5} alt="" />
                    </div>
                </div>
                <div className="singleProduct-shop-right">
                    <div className="singleProduct-info">
                        <h1>Asgaard sofa</h1>
                        <span>Rs. 250,000.00</span>
                        <div>
                            <div className='single-con'>
                                <div className="single-star">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalf />
                                </div>
                                <p></p>
                                <span>5 Customer Review</span>
                            </div>
                            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                            <div className="size">
                                <span>Size</span>
                                <div>
                                   <NavLink to='/singleProduct'>L</NavLink>
                                   <NavLink to='/'>XL</NavLink>
                                   <NavLink to='/'>XS</NavLink>
                                </div>
                            </div>
                            <div className="color">
                                <span>Color</span>
                                <div>
                                    <button className='button1'></button>
                                    <button className='button2'></button>
                                    <button className='button3'></button>
                                </div>
                            </div>
                            <div className="add">
                                <div>
                                    <p className="minus">-</p>
                                    <p className='result'>0</p>
                                    <p className="plus">+</p>
                                </div>
                                <div className="add-to-cart">
                                    <p>Add To Cart</p>
                                </div>
                                <div className="compare">
                                    <p>+ Compare</p>
                                </div>

                            </div>
                            <hr />
                            <p><span>SKU</span>     <span className='span1'>: SS001</span></p>
                            <p><span>Category</span><span className='span2'>: Safas</span></p>
                            <p><span>Tags</span>    <span className='span3'>: Sofa, Chair, Home, Shop</span></p>
                            <p><span>Share</span>   <span className='icon'><span>:</span> <FaFacebook/> <i><FaLinkedin/></i> <FaSquareTwitter/> </span></p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="single-product-about">
                <div className="single-product-about-title">
                    <NavLink to='/singleProduct'>Description</NavLink>
                    <NavLink to='/'>Additional Information</NavLink>
                    <NavLink to='/'>Reviews [5]</NavLink>
                </div>
                <div className="single-product-about-info">
                    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
                <div className="single-product-about-img">
                    <img src={single_product_imgs.single_product_img6} alt="" />
                    <img src={single_product_imgs.single_product_img7} alt="" />
                </div>
            </div>

            <hr />
            
            <div className="single-product-related">
                <h1>Related Products</h1>
                <p><ProductsData/></p>
                <Link to='/shop'>Show More</Link>
            </div>
        </div>
    </div>
  )
}

export default SingleProducts
