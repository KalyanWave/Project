import React from 'react'
import './Home.css'
import Services from './Services'
import Trusted from './Trusted'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="top">
          <div className="left">
            <p className='para'>welcome to</p>
            <h1>VRK ECOMMERCE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officiis laboriosam iusto. Numquam, nam iste maiores, voluptatum labore nemo doloremque ab culpa veritatis magnam qui.</p>
            <Link to='/products'>
            <button>Shop Now</button>
            </Link>
          </div>
          <div className="right">
            <img src="https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lady shopping" />
          </div>
        </div>
{/* ====================================================== */}
    <Services/>
    <Trusted/>

      </div>
    </div>
  )
}

export default Home
