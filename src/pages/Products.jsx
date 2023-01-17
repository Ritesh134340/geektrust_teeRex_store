import React, { useEffect ,useState} from "react";
import Search from "../components/Search";
import { ProductWrapper } from "../styles/products.styled";
import Filter from "../components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { getProduct,itemCounter } from "../Redux/action";
import {BiFilterAlt} from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const dispatch = useDispatch();
  const [showFilter,setShowFilter]=useState(false)
  const products = useSelector((state) => state.checkFilter);

const handleAdd=(ele)=>{
  let data=JSON.parse(localStorage.getItem("cartItems")) || [];
  if(data.length>0){
    let x=data.filter((item)=>Number(item.id)===Number(ele.id));

    if(x.length>0){
      toast.warn('Product already in Cart !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else{
      ele.cartQuantity=1;
      data.push(ele);
      localStorage.setItem("cartItems",JSON.stringify(data));

      dispatch(itemCounter(data.length))

      toast.success('Product added to Cart !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    
    }
    
  }else{
    ele.cartQuantity=1;
    data.push(ele);
    dispatch(itemCounter(data.length))
    localStorage.setItem("cartItems",JSON.stringify(data))
    toast.success('Product added to Cart !', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  
  }


  
}

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <ProductWrapper show={showFilter}>
      
      <div className="search-box">
        <div className="s-b">
        <Search />
        </div>
      
      <div>
        <BiFilterAlt 
      
        className="filter-icon" onClick={()=>setShowFilter(!showFilter)}/>
      </div>
      </div>
    
      <div className="items-wrapper">
       <div className="filter-box">
       <Filter />
        </div> 
        <div className="product-container">
          {products &&
            products.map((ele, index) => (
              <div className="product-card" key={index}>
                <img src={ele.imageURL} alt="" />
                <div className="name-div">
                  <h3>{ele.name}</h3>
                </div>
                <div className="cart-btn-wrapper">
                  <p>
                    <span>Price :</span> {ele.price}
                  </p>
                  <button onClick={()=>handleAdd(ele)}>Add to Cart</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ToastContainer/>
    </ProductWrapper>
  );
};

export default Products;
