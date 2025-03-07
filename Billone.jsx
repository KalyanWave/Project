import React from 'react'
import { useParams } from 'react-router-dom'
import './billone.css'
import { useSelector } from 'react-redux';
import './prodetails.css'
const Billone = () => {
    let {name} = useParams();
    let product;
    const state=useSelector((state)=>state);
    const pro=state.todo.data.map((e)=>{
        if(e.title === name){
            product=e;
            console.log(product);
        }
    })

//     let {name}=useParams();
//     let product;
//     const state = useSelector((state) =>state);
//    const pro = state.todo.data.map((e)=>{
//         if(e.title === name)
//         {
//             product=e;
//            return e;
//         }
//     })
//     console.log(pro);
    return(
        
        <center>
            <main>
               {
                <>
                 <img src={product.image} alt="" width="200px" />
                <p>{product.title}</p>
                <h2>pay using</h2>
                <ul>
                <li ><a href="#">netbanking</a></li>
            <li><a href="#">upi</a></li>
            <li><a href="#">cashon delivery</a></li>
            <li><a href="#">credit/debit card</a></li>
                </ul>
                </>
               }
         {/* <img className='imge' src={product.image} alt="" />
         <h1>{product.name}</h1>
         
         <h2>total amount: {product.price}</h2>
         <h2>pay using</h2>
         <ul style={{listStyle:"none"}}>
            <li ><a href="#">netbanking</a></li>
            <li><a href="#">upi</a></li>
            <li><a href="#">cashon delivery</a></li>
            <li><a href="#">credit/debit card</a></li>
         </ul> */}
         </main>
        </center>
        
    )
}
export default Billone
