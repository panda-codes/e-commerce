import React, { useState } from "react";
import cart_icon from "./Assets/cart_icon.png";
import "./Navbar_module.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    const[menu,setMenu] = useState("shop");//this state is used with the ternary operator to select an option in the the navmenu

  return (
    <div className="navbar container1">
      <div className="brandlogo">
        <h1>MENIVOL</h1>
      </div>
      <ul className="Nav-menu">
        <li onClick={()=>{setMenu('shop')}}> <Link style={{textDecoration:'none'}} to="/">Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('men')}}> <Link className="pee" to="/men">Men</Link> {menu==='men'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('women')}}> <Link className="pee" to="/women">Women</Link> {menu==='women'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}> <Link className="pee" to="/kids">Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
      </ul>
      <div className="login-cart">
        <button> <Link to="/login">login</Link> </button>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="navbar-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
