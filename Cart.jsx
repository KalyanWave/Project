import React from 'react'
import './cart.css';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { removeFromCart } from '../redux/slice/cartSystem';
const Cart = () => {
  const dispatch=useDispatch();
  const seven=useSelector(state=>state);
  console.log("hi:",seven.cart);
  return (
    <div>
      <center>
      <h1>quantity:{seven.cart.quantity}</h1>
      </center>
      {
        seven.cart.cart.map((e)=>{
          return <>
          <div className="who">
          <img src={e.image} alt="" />
           <div className="whoo">
           <li>{e.title}</li>
           <li>{e.price}</li>
           <Link to={`/Prodetails/${e.title}`}><button>buy now </button></Link>
           <button onClick={()=>dispatch(removeFromCart(e))}>remove</button>
           </div>
          </div>
          </>
        })
      }
    </div>
  )
}

export default Cart
