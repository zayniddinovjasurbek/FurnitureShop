import React from 'react'
import './Shop.css'
import { assets } from '../../assets/assets'
import { NavLink, Link } from 'react-router-dom'

import { IoIosArrowForward } from 'react-icons/io'
import { VscSettings } from "react-icons/vsc";
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import ProductsData from '../../components/products.data/ProductsData'


const Shop = () => {
  return (
    <div className='shop'>
        <div className="title">
            <img src={assets.logo_img} alt="" />
            <h1>Shop</h1>
            <div className="link">
                <h3><NavLink to='/'>Home</NavLink> <IoIosArrowForward /> <NavLink to='/shop'>Shop</NavLink></h3>
            </div>
        </div>
            <div className="shop-title">
                <div className="shop-title-left">
                    <VscSettings />
                    <p>Filter</p>
                    <BsFillGridFill />
                    <BsViewList />
                    <div></div>
                    <p>Showing 1-16 of 32 results</p>
                </div>
                <div className="shop-title-right">
                    <div className="show">
                        <p>Show</p>
                        <span>16</span>
                    </div>
                    <div className="short">
                        <p>Short by</p>
                        <span>default</span>
                    </div>
                </div>
            </div>
                <div className="shop-container">
                    <ProductsData/>
                    <ProductsData/>
                    <ProductsData/>
                    <ProductsData/>
                </div>
                <div className="shop-btn">
                    <NavLink to=''>1</NavLink>
                    <NavLink to='/'>2</NavLink>
                    <NavLink to='/'>3</NavLink>
                    <NavLink to='/' style={{width: '90px'}}>Next</NavLink>
                </div>
    </div>
  )
}

export default Shop
