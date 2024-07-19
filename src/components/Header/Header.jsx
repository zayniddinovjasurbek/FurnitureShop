import React from 'react'
import './Header.css'

import { assets } from '../../assets/assets'
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={assets.logo} alt="" />        
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="header-icons">
        <TbUserExclamation />
        <CiSearch />
        <CiHeart />
        <AiOutlineShoppingCart />

      </div>
    </header>
  )
}

export default Header
