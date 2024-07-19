import React from 'react'
import './Footer.css'

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
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="footer-help">
        <span>Help</span>
        <p>Payment Options</p>
        <p>Returns</p>
        <p>Privacy Policies</p>
      </div>
      <div className="footer-newslatter">
        <input type="text" placeholder='Enter Your Email Address'/>
        <a href="#">SUBSCRIBE</a>
      </div>
    </footer>
  )
}

export default Footer
