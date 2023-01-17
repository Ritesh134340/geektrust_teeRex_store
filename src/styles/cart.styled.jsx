import styled from "styled-components"

export const CartWrapper=styled.div`
  margin:auto;
  width:100%;
  margin-top:120px;
  box-sizing:border-box;

  .img-div{
       display:flex;
       align-items: center;
       
       width:200px;
       justify-content: space-between;
  }
  .indiv-cart{

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width:50%;
    margin:auto;
    display:flex;
    align-items: center;
    gap:35px;
    padding:10px 15px;
     justify-content: space-between;
    margin-bottom:20px;

  }  
  .img-div>img{
    width:80px;
    height:80px;
  }
  .btn-div{
     display:flex;
     width:190px;
     margin-right:20px;
     align-items: center;
     justify-content: space-between;
  }
  .del-btn{
   cursor:pointer;
   padding:8px 15px;
   color:white;
   background-color: red;
   border-radius:5px;
   outline:none;
   border:none;
   font-weight:bold;
  }
  .Q-btn{
    cursor:pointer;
    padding:8px 15px;
   color:white;
   background-color: blue;
   border-radius:5px;
   outline:none;
   border:none;
   font-weight:bold;
  }
  .no-item{
    width:98%;
    margin:auto;
  }
  .para-div{
    font-size:13px ;
    font-weight:bold;
  }
  .total{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin:auto;
    display:flex;
    justify-content: center;
    align-items: center;
    height:60px;
   
    margin-bottom:50px;
    width:50%;
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
     .indiv-cart{
        width:80%;
     }
     .total{
    width:85%;
   }
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
    .indiv-cart{
        width:80%;
     }
     .total{
    width:85%;
   }
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    .indiv-cart{
width:86%;
gap:15px;
padding:5px 8px;
margin-bottom:25px;

}

     .btn-div{
   
     width:180px;
     margin-right:0px;

  }
     .Q-btn{
        padding:5px 13px
     }
     .del-btn{
        padding:5px 13px
     }
   .total{
    width:90%;
   }
}

`