import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='err-total' >
      <h1>404</h1>
      <h3>uh oh! you're lost</h3>
      <p>the page you are looking does not exist.how you got here is a mystery.but you can click the button below to go back to the homepage</p>
      <Link to='/'>
      <button>HOME</button>
      </Link>
    </div>
  )
}

export default Error
