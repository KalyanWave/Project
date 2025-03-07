import React from 'react'
import { useParams } from 'react-router-dom'
// import { fetchTodos } from "../redux/slice/pro";
import {  useSelector } from 'react-redux';
import './prodetails.css'
import { Link } from 'react-router-dom';
const Prodetails = () => {
let {id}=useParams();
let product;
const state=useSelector((state)=>state);
console.log(state.todo.data);
const pro=state.todo.data.map((e)=>{
  if(e.title === id){
    console.log(e);
    product=e;
  }
});
console.log(product);

  //   let {id}=useParams();
  //   let product;
  //   const dispatch=useDispatch();
  //   console.log(state.todo.data);
  //   const state = useSelector((state) =>state);
  //   useEffect(()=>{
  //     dispatch(fetchTodos())
  //   },[])
  //  const pro = state.todo.data.map((e)=>{
  //       if(e.title === id)
  //       {
  //           product=e;
  //          return e;
  //       }
  //   })
  //   console.log(product);
  return (
    <div className='hole'>
     
     <>
      <img src={product.image} alt="image" />
      <div className="details">
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
      <p>{product.price} $</p>
      <Link to={`/billone/${product.title}`}><button>buy now</button></Link>
      </div>
     </>

      {/* <img className='img' src={product.image} alt="" />
      <div className="details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to={`/billone/${product.name}`}><button>buy now</button></Link>
      
      <button>Add to cart</button>
      {
        product.colors.map((e)=>{
          return  <input className='color' type="color" value={e}/>
        })
      }
      </div> */}
    </div>
  )
}

export default Prodetails
