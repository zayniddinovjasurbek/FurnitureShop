import { assets } from '../../assets/assets'
import './Keybenefits.css'

const Keybenefits = () => {
  return (
    <div className='keybenefits'>
      <div className="keybenefits-container">
        <div className="keybenefits-con">
            <img src={assets.kubik} alt="" />
            <div className="text">
                <h2>High Quality</h2>
                <p>crafted from top materials</p>
            </div>
        </div>

        <div className="keybenefits-con">
            <img src={assets.kafolat} alt="" />
            <div className="text">
                <h2>Warranty Protection</h2>
                <p>Over 2 years</p>
            </div>
        </div>

        <div className="keybenefits-con">
            <img src={assets.dastafka} alt="" />
            <div className="text">
                <h2>Free Shipping</h2>
                <p>Order over 150 $</p>
            </div>
        </div>

        <div className="keybenefits-con">
            <img src={assets.admin} alt="" />
            <div className="text">
                <h2>24 / 7 Support</h2>
                <p>Dedicated support</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Keybenefits
