import React from 'react';
import {Link} from "react-router-dom";
// import styles from ./Navbar.module.css";

const Navbar = ()=>{

   
    return(
        <nav className={StyleSheet.navbar}>
            <Link to = "/login" >Login</Link>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/products">Products</Link>


        </nav>
    );
};
    
  
export default Navbar;
