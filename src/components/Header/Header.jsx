import React from 'react'
import './Header.css'
import { Link } from'react-router-dom'

import { assets } from '../../assets/assets'
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch, FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Link to='/'><img src={assets.logo} alt="" />   </Link>     
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <div className="header-icons">
        <TbUserExclamation />
        <FiSearch />
        <FiHeart />
        <Link to='/cart'><AiOutlineShoppingCart /></Link>

      </div>
    </header>
  )
}

export default Header
