import React, { useState } from "react";
import { NavLink, NavbarWrapper } from "../styles/navbar.styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {useSelector} from "react-redux"

const Navbar = () => {
  const [show, setShow] = useState(false);

  const count=useSelector((state)=>state.itemCount)

  return (
    <NavbarWrapper show={show}>
      <div className="nav-left-div">
        <NavLink to="/">
          <p>TeeRex Store</p>
        </NavLink>
      </div>
      <div className="nav-right-div">
        <div className="product-div">
          <NavLink to="/product">
            <p onClick={() => setShow(false)}>Products</p>
          </NavLink>
        </div>

        <div className="icon-div">
          <NavLink to="/cart">
            <AiOutlineShoppingCart className="cart-icon" />
            <p className="cart-items-count">{count}</p>
            <div className="cart-text">
              <p onClick={() => setShow(false)}>Cart</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="ham-icon-div">
        <GiHamburgerMenu className="ham-icon" onClick={() => setShow(!show)} />
        <RxCross2 className="cross-icon" onClick={() => setShow(!show)} />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
