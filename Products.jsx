import { fetchTodos } from "../redux/slice/pro";
import {useDispatch,useSelector} from 'react-redux'
import "./product.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addCart } from "../redux/slice/cartSystem";
const Products = () => {

  const dispatch=useDispatch();
  const state=useSelector((state)=>state)
  console.log("state",state.todo.data);
  useEffect(()=>{
    dispatch(fetchTodos())
  },[])
  if(state.todo.isLoading==true)
  {
    return <h1>Loading.....</h1>
  }
  return (
    <div>
      {/* <button onClick={(e)=> dispatch(fetchTodos())}>fetch</button> */}
      <div className="wholepro">
      {
        state.todo.data && state.todo.data.map((e)=>{
        return  <>
        <div className="pro">
        <img src={e.image} alt="images" className="imga"/>
        <h2>{e.title}</h2>
        <h3>{e.price}</h3>
        <Link to={`/Prodetails/${e.title}`}><button className="one">more details</button></Link>
        <button className="two" onClick={()=>dispatch(addCart(e))}>add to cart</button>
        
        </div>
        </>
        })
      }
      </div>
    </div>
  )
}

export default Products
