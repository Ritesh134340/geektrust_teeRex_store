import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin-top: 60px;
  border: 1px solid transparent;

  .items-wrapper {
    display: flex;
    margin-top: 50px;
    gap: 30px;
  }
  .product-container {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(4, 1fr);
    gap: 35px 20px;
    margin-right: 50px;
  }
  .product-card {
    border-radius: 10px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .product-card > img {
    width: 100%;
  }

  .cart-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cart-btn-wrapper span {
    font-weight: bold;
  }
  .cart-btn-wrapper > p {
    font-size: 14px;
    font-weight: 600;
  }
  .name-div {
    text-align: left;
    font-size: 13px;
    padding: 0px;
    margin-top: 0px;
  }

  .cart-btn-wrapper > button {
    background-color: black;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 6px 10px;
  }
  .filter-box{
text-align:left;
  width:150px;
  height:440px;
  margin-left:50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0px 20px;
  }
  .search-box{

    display:flex;
   align-items :center ;
   margin-top:50px;
   height:50px;
   justify-content: center;
   box-sizing: border-box;
   gap:5px;
 
  }
 
  .filter-icon{
  margin-bottom:5px;
  display:none;
    height:28px;
    width:27px;
    padding:5px;
    cursor:pointer;
    color:white;
    background-color: black;
    border-radius:6px;
  
  }
  @media all and (max-width: 1024px) and (min-width: 769px) {
    .product-container {
  
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    margin-right:40px
  
  }

  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    .product-container {
  
  width: 90%;
  margin-right:30px;
  gap:15px 20px;
  grid-template-columns: repeat(2, 1fr);

}
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    .product-container {
  
  width: 90%;
  margin-right:0px;
  margin:auto;
  grid-template-columns: repeat(1, 1fr);

}

.filter-icon{
    display:block;
    margin-bottom:8px;
}

.filter-box{
    position:absolute;
    top:-40px;
    right:13%;
   z-index:5;
    background-color: white;
    visibility:${(props)=>props.show?"visible":"hidden"}
    
}
.items-wrapper{
    position:relative;
}

  }
`;
