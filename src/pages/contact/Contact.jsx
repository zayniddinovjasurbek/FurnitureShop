import './Contact.css'
import Keybenefits from '../../components/keybenefits/Keybenefits'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const Contact = () => {
  return (
    <div className='contact'>
        <div className="title">
            <img src={assets.logo_img} alt="" />
            <h1>Contact</h1>
            <div className="link">
                <h3><NavLink to='/'>Home</NavLink> <IoIosArrowForward /> <NavLink to='/contact'>Contact</NavLink></h3>
            </div>
        </div>

        <div className="contact-container">
            <h1>Get In Touch With Us</h1>
            <p>For More Information About Our Product & Services. Please Feel Free To Drop Us <br />An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            <div className="contact-con">
                <div className="appeal">
                    <div className="address">
                        <i><MdLocationOn /></i>
                        <div className="text">
                            <h1>Address</h1>
                            <p>236 5th SE Avenue, New <br />York NY10000, United <br />States</p>
                        </div>
                    </div>
                    <div className="phone">
                        <i><FaPhoneAlt /></i>
                        <div className="text">
                            <h1>Phone</h1>
                            <p>Mobile: +(84) 546-6789 <br />
                            Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                    <div className="time">
                        <i><MdAccessTimeFilled /></i>
                        <div className="text">
                            <h1>Working Time</h1>
                            <p>Monday-Friday: 9:00 - 22:00 <br />
                            Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>

                <div className="form">
                    <label> 
                        Your Name
                        <input type="text" placeholder='ABC'/>
                    </label>

                    <label> 
                        Email address
                        <input type="text" placeholder='Abc@def.com'/>
                    </label>

                    <label> 
                        Subject
                        <input type="text" placeholder='This is an optional'/>
                    </label>

                    <label> 
                        Massage
                        <textarea name="" id="" rows="4" placeholder='Hi! i’d like to ask about'></textarea>
                    </label>
                    <button>Submit</button>
                </div>

            </div>
        </div>
      <Keybenefits/>
    </div>
  )
}

export default Contact
