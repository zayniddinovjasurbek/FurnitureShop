import React from 'react'
import './Cart.css'
import Keybenefits from '../../components/keybenefits/Keybenefits'
import { assets } from '../../assets/assets'
import { AiFillDelete } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='cart'>
        <div className="title">
            <img src={assets.logo_img} alt="" />
            <h1>Cart</h1>
            <div className="link">
                <h3><NavLink to='/'>Home</NavLink> <IoIosArrowForward /> <NavLink to='/cart'>Cart</NavLink></h3>
            </div>
        </div>
        <div className="cart-container">
          <div className="cart-product">
            <div className="cart-product-title">
                <h4>Product</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Subtotal</h4>
            </div>
            <div className="cart-product-container">
              <div className="img">
                <img src={assets.group_img} alt="" />
                <span>Asgaard sofa</span>
              </div>
              <span className='price'>Rs. 250,000.00</span>
              <p className='quantify'>1</p>
              <div className="cart-total-dele">
                <p>Rs. 250,000.00</p>
                <i><AiFillDelete /></i>
              </div>

            </div>
          </div>
          <div className="cart-total">
            <h1>Cart Totals</h1>
            <div className="sub">
              <p>SubTotal</p>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="total">
              <p>Total</p>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="checkout">
              <button>Checkout</button>
            </div>
          </div>
        </div>
        <Keybenefits/>
    </div>
  )
}

export default Cart
