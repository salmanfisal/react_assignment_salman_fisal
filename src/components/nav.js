import React, { useState, useEffect, } from "react";
import "../styles/nav.css";
import { GlobalContext } from "../contextApi/customContext.js";
import {NavLink, Link } from "react-router-dom"
function Nav({ inputNav }) {


  useEffect(() => {}, []);

  return (
    <>
    <ul>
      <li ><Link><img className="logoImage" src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" alt="" /> </Link></li>
      <li > <NavLink className= {({isActive})=> isActive ? "hideNav":"navlink"} to="/details">ADD ITEM </NavLink></li>
      <li className="avatar"><img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="avatar"/></li>
      </ul>
   
    </>
  );
}

export default Nav;
