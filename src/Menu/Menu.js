import React from "react";

import{
    Link
  
  } from "react-router-dom"

function Menu() {
  return (
    
    
<nav aria-label="Main Navigation">
        <ul>
            <li><Link to ="/" aria-label="Home">Home</Link></li>
            <li><Link to ="/about" aria-label="About">About</Link></li> 
            <li><Link to ="/login" aria-label="Login">Login</Link></li>
        </ul>
    </nav>

  );
}

export default Menu;
