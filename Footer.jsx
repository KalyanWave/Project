import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";




import './footer.css'
const Footer = () => {
  return (
    <div>
      <div className="foot">
        <div className="topfoot">
          <div className="topleft">
            <h4>ready to get started</h4>
            <h4>talk to us today</h4>
          </div>
          <div className="topright">
            <button className='btn'>get started</button>
          </div>
          <div className="topright"></div>
        </div>
        <div className="downfoot">
          <div className="footfirst">
            <h2>kvr store</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</p>
          </div>
          <div className="footsec">
            <h3>subscribe to get more updates</h3>
            <input type="email"  placeholder='your mail-id'/>
            <button>subscribe</button>
          </div>
          <div className="footthird">
            <h3>follow us</h3>
            <div className="logos">
            <PiInstagramLogoFill />
            <BsTwitterX />
            <FaFacebookSquare />
            <IoLogoYoutube />
            </div>


          </div>
          <div className="footfourth">
            <h3>call us</h3>
            <p>+91 1234567890</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
