import React from 'react'
import './services.css'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";


const Services = () => {
  return (
    <div>
      <div className="all-services">
        <div className="first-services">
        <TbTruckDelivery /><br />
        <p>superfast and free delivery </p>
        </div>
        <div className="seco-services">
            <div className="top">
                <MdSecurity/>
            <p>non-contact shipping</p>
            </div>
            <div className="down">
                <GiReceiveMoney/>
                Money-back guaranteed
            </div>
        </div>
        <div className="third-services">
        <RiSecurePaymentFill />
            super secure payment system
        </div>
      </div>
    </div>
  )
}

export default Services
