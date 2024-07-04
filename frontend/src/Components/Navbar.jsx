import React, { useContext, useRef, useState } from "react";
import cart_icon from "./Assets/cart_icon.png";
import "./Navbar_module.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import nav_dropdown from "./Assets/navdrop-down.png"

const Navbar = () => {

    const[menu,setMenu] = useState("shop");//this state is used with the ternary operator to select an option in the the navmenu
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();//

    const dropDownToggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible');//this is ref to the ul 
      e.target.classList.toggle('open');//the target is the image with the onclick event
    }

  return (
    <div className="navbar ">
      <div className="brandlogo">
        <h1>MENIVOL</h1>
      </div>
      <img className="nav-dropdown" style={{width:30+'px'}} onClick={dropDownToggle} src={nav_dropdown} alt="" />
      <ul className="Nav-menu" ref={menuRef}>
        <li onClick={()=>{setMenu('shop')}}> <Link style={{textDecoration:'none'}} to="/">Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('men')}}> <Link className="pee" to="/men">Men</Link> {menu==='men'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('women')}}> <Link className="pee" to="/women">Women</Link> {menu==='women'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}> <Link className="pee" to="/kids">Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
      </ul>
      <div className="login-cart">
        <button> <Link to="/login">login</Link> </button>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="navbar-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
