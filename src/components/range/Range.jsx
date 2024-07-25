import React from 'react'
import './Range.css'
import { assets } from '../../assets/assets'

const Range = () => {
  return (
    <div className='range'>
      <div className="range-title">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="range-container">
        <div className="range-con">
            <img src={assets.range_img1} alt="" />
            <h2>Dining</h2>
        </div>
        <div className="range-con">
            <img src={assets.range_img2} alt="" />
            <h2>Living</h2>
        </div>
        <div className="range-con">
            <img src={assets.range_img3} alt="" />
            <h2>Bedroom</h2>
        </div>
  
      </div>
    </div>
  )
}

export default Range
