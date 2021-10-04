import React from 'react';
import One from './one.PNG';
import {NavLink} from 'react-router-dom';
function Navbar(){
return(
   <>
<nav class="navbar navbar-expand-sm bg-light navbar-light">
  <NavLink className="nav-link" to="/">
  <img class="navbar-brand" src={One} height="500px"></img>
</NavLink>
  
  <ul className="navbar-nav">

  <li className="nav-item">
      <NavLink className="nav-link" to="/">Home</NavLink>
    </li>

  <li className="nav-item">
    
      <NavLink className="nav-link" to="/about">About Us</NavLink>
    </li>

    <li className="nav-item">
      <NavLink className="nav-link" to="/practice">Practice Areas</NavLink>
    </li>

    <li className="nav-item">
      <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
    </li>

  
    
 
    
  </ul>
</nav>
          
   </> 
);
}
export default Navbar;