import styled from "styled-components"

export const SearchWrapper=styled.div`
    box-sizing:border-box;
   .input-box{
    width:360px;
    outline:none;
    border:none;
    border-bottom:2px solid gray;
    font-size:17px;
    padding-left:10px;
    
   }
   .search-icon{
      height:29px;
    width:29px;
    padding:5px;
    cursor:pointer;
    color:white;
    background-color: black;
    border-radius:6px;
   }

   @media all and (max-width: 480px) and (min-width: 279px) {
   .input-box{
      width:200px;
   }

  }
`