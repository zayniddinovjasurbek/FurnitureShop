import React from 'react'
import './Checkout.css'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { assets } from '../../assets/assets'
import Keybenefits from '../../components/keybenefits/Keybenefits'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className="title">
            <img src={assets.logo_img} alt="" />
            <h1>checkout</h1>
            <div className="link">
                <h3><NavLink to='/'>Home</NavLink> <IoIosArrowForward /> <NavLink to='/checkout'>Checkout</NavLink></h3>
            </div>
        </div>
        <div className="checkout-container">
            <div className="checkout-left-con">
                <h1>Billing details</h1>
                <div className="form">
                    <div>
                        <label>
                            First Name
                            <input type="text" />
                        </label>
                        <label>
                            Last Name
                            <input type="text" />
                        </label>
                    </div>
                    <label>
                        Company Name (Optional)
                        <input type="text" />
                    </label>
                    <label>
                        Country / Region
                        <select>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                        </select>
                    </label>
                    <label>
                        Street address
                        <input type="text" />
                    </label>
                    <label>
                        Town / City
                        <input type="text" />
                    </label>
                    <label>
                        Province
                        <select>
                            <option value="WesternProvince">Western Province</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Canada">Canada</option>
                        </select>
                    </label>
                    <label>
                        Zip code
                        <input type="text" />
                    </label>
                    <label>
                        Phone
                        <input type="text" />
                    </label>
                    <label>
                        Email address
                        <input type="text" />
                    </label>
                    <label>
                        <input type="text" placeholder='Additional information'/>
                    </label>
                </div>
            </div>
            <div className="checkout-right-con">
                <div className="checkout-top-con">
                    <div className="checkout-product">
                        <h2>Product</h2>
                        <p>Asgaard sofa<span>X</span> <span>1</span></p>
                        <h3>Subtotal</h3>
                        <h3>Total</h3>
                    </div>
                    <div className="checkout-subtotal">
                        <h2>Subtotal</h2>
                        <p>Rs. 250,000.00</p>
                        <p>Rs. 250,000.00</p>
                        <h1>Rs. 250,000.00</h1>
                    </div>
                </div>
                <hr />
                <div className="checkout-bottom-con">
                    <div>
                        <input type="radio" name="checkbox" id="checbox" />
                        <span>Direct Bank Transfer</span>
                    </div>
                    <p >Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <div>
                        <input type="radio" name="checkbox" id="chekbox" />
                        <p>Direct Bank Transfer</p>
                    </div>
                    <div>
                        <input type="radio" name="checkbox" id="chekbox" />
                        <p>Cash On Delivery</p>
                    </div>
                    <p style={{color: '#000'}}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link>privacy policy.</Link></p>
                    <Link to='/'>
                        <button>Place order</button>
                    </Link>
                </div>
            </div>
        </div>

        <Keybenefits/>
    </div>
  ) 
}

export default Checkout
