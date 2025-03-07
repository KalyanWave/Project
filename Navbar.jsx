import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import '../App.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="navbar">
            <h1> <span>VRK</span>store</h1>
            <div className="navs">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Products">Products</Link>
                <Link to="Contact">Contact us</Link>
                <Link to="/Cart"><span className='cart'><FaShoppingCart /> </span>Cart</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
