import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
    <footer>
      <div className="footer-logo">
        <h1>Funiro.</h1>
        <span>400 University Drive Suite 200 Coral <br />Gables,<br />
        FL 33134 USA</span>
      </div>
      <div className="footer-links">
        <span>Links</span>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className="footer-help">
        <span>Help</span>
        <Link>Payment Options</Link>
        <Link>Returns</Link>
        <Link>Privacy Policies</Link>
      </div>
      <div className="footer-newslatter">
        <span>Newsletter</span>
        <div className="input">
          <input type="text" placeholder='Enter Your Email Address'/>
          <a href="#" className='btn'>SUBSCRIBE</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
