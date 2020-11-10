import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Headers = () => {
    return (

<nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand pl-5 notHover" style={{color:"#0A77E7"}}>Portfolio</a> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto pl-5">
      <li class="nav-item active">
      <NavLink to="/home" activeStyle={{borderBottom:"1px solid #0A77E7"}} className="notHover nav-link ml-5 addColor"><span style={{color:"#0A77E7"}}>Home</span></NavLink>
       
      </li>
      <li class="nav-item">
        <NavLink to="/project" activeStyle={{borderBottom:"1px solid #0A77E7"}}  className="notHover nav-link ml-5 addColor"> <span style={{color:"#0A77E7"}}>project</span> </NavLink>
       
      </li>
      <li class="nav-item">
        <NavLink to="/blog" activeStyle={{borderBottom:"1px solid #0A77E7"}}  className="notHover nav-link ml-5 addColor"> <span style={{color:"#0A77E7"}}>Blog</span> </NavLink>
       
      </li>
      <li class="nav-item">
        <NavLink className="notHover nav-link ml-5 addColor " activeStyle={{borderBottom:"1px solid #0A77E7"}}  > <span style={{color:"#0A77E7"}}>About me</span></NavLink>
       
      </li>
      <li class="nav-item ">
       <NavLink to="/resume" activeStyle={{borderBottom:"1px solid #0A77E7"}}  className="notHover nav-link ml-5 addColor "><span style={{color:"#0A77E7"}}>Resume</span> </NavLink>
      </li>
    
     
      </ul>
    
  </div>
</nav>


      
    
    );
};

export default Headers;