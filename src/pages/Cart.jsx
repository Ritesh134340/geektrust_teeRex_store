import React,{useState,useEffect} from 'react'
import { CartWrapper } from '../styles/cart.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { itemCounter } from "../Redux/action";
import {  useDispatch } from "react-redux";


const Cart = () => {
const dispatch=useDispatch()
const [sum,setSum]=useState(0)
 let data=JSON.parse(localStorage.getItem("cartItems")) || [];

 const [cartData,setCartData]=useState(data)

const handleDelete=(id,price,quan)=>{
  const newData=cartData.filter((ele)=>ele.id!==id);
  const length=newData.length;
  localStorage.setItem("cartItems",JSON.stringify(newData))
  setCartData(newData)

  dispatch(itemCounter(length))
   setSum(sum-(Number(price)*Number(quan)))
    toast.success('Deleted successfully !', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      
  })

}

const handleincQuantity=(id)=>{
  let newCartData=[...cartData]

  const data=newCartData.filter((ele)=>Number(ele.id)==Number(id));
if(data[0].quantity>data[0].cartQuantity){
  let quant=(data[0].cartQuantity+1)
   setSum(sum+Number(data[0].price))
  data[0].cartQuantity=quant
  let newObj=data[0]

    newCartData.map((ele)=>{
      if( Number(ele.id)===Number(id)){
             ele=newObj
      }
     
    })

     localStorage.setItem("cartItems",JSON.stringify(newCartData))
     setCartData(newCartData)
}
else{
  toast.error('Item Quantity reached to available limit !', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    
})
}
   
}
useEffect(()=>{
  let newsum=0;
  cartData && cartData.map((ele)=>
  { newsum+=Number(ele.price)}
 )
  setSum(newsum)
},[])




  return (
    <CartWrapper>
      <div className="total">
        <h3>
        Total Amount : {sum}
        </h3>
       
      </div>
     { cartData.length>0 ? cartData.map((ele)=>
      
     <div key={ele.id} className="indiv-cart">
     
      <div className="img-div">
      <img src={ele.imageURL} />
      <div className="para-div">
      <p>{ele.name}</p>
        <p>{ele.price}</p>
      </div>
       
      </div>
      <div className="btn-div">
      <button className='Q-btn' onClick={()=>handleincQuantity(ele.id)}>Qty {ele.cartQuantity} +</button>
      <button className="del-btn" onClick={()=>handleDelete(ele.id,ele.price,ele.cartQuantity)}>Delete</button>
      </div>
      
     </div>
       
     ) : <h3 className="no-item">"You Don't have any product in Cart"</h3>}

     
      <ToastContainer/>
    </CartWrapper>
  )
}

export default Cart
