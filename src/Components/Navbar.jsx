import React from "react";
import "../Stylesheets/Navbar.css"
import logo from "../assets/SVG/bitmama-green.svg"
import { BiChevronDown } from "react-icons/bi";


const Navbar =()=>{
    return(
        <>
        
            <div className="navbar">
                <div className="nav-left">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-mid">
                    <div className="option-wrap">
                        <p>Products</p>
                        <BiChevronDown/>
                    </div>
                    <div className="option-wrap">
                        <p>Company</p>
                        <BiChevronDown/>
                    </div>
                    <div className="option-wrap">
                        <p>Buy and Sell</p>
                    </div>
                    <div className="option-wrap">
                        <p>Get Crypto Cards</p>
                    </div>
                    <div className="option-wrap">
                        <p>Blog</p>
                    </div>
                </div>

                <div className="nav-right">
                    <p>Sign In</p>
                    <button id='nav-butn'>Get Started</button>
                </div>
            </div>
        
        </>
    )
}

export default Navbar;