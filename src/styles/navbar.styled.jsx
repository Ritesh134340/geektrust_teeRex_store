import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavbarWrapper = styled.div`
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: black;
  color: white;
  height: 60px;
  margin-bottom:70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  box-sizing: border-box;
  cursor: pointer;

  .nav-left-div {
    width: 105px;
    text-align: left;
    font-weight: bold;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  .nav-right-div {
   
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: space-between;
    margin-right: 50px;
    font-size: 18px;
    font-weight: 600;
  }
  .icon-div {
    position: relative;
   
  }

  .cart-icon {
    font-size: 28px;
  }
  .ham-icon-div {
    display: none;
    cursor: pointer;
  }
  .ham-icon {
    font-size: 30px;
  }
  .cross-icon {
    font-size: 30px;
    font-weight: bold;
  }
  .cart-items-count {
    position: absolute;
    top: -78%;
    right: -25%;
    font-size: 15px;
  }
  .cart-text {
    display: none;
  }

  @media all and (max-width: 1024px) and (min-width: 769px) {
  }

  @media all and (max-width: 768px) and (min-width: 481px) {
  }

  @media all and (max-width: 480px) and (min-width: 279px) {
    .ham-icon-div {
      display: block;
    }
    .icon-div{
        transition: all 500ms ease-in-out;
    }
    .cart-items-count {
        top:-8%;
       right: -35%;
    }
    .cart-icon {
      display: none;
    }

    .cart-text {
      display: block;
    
    
    }

    .ham-icon {
      display: ${(props) => (props.show ? "none" : "block")};
    }
    .product-div {
      margin-top: 50px;
    }

    .cross-icon {
      display: ${(props) => (!props.show ? "none" : "block")};
    }

    .nav-right-div {
        transition: all 500ms ease-in-out;
      flex-direction: column;
      position: absolute;
      height: 100vh;
      width: 100%;
      background-color: black;
      position: absolute;
      top: 100%;
      right: ${(props) => (props.show ? "0%" : "-100%")};
      justify-content: flex-start;
      margin-right: 0px;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
