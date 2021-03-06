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
      <Link to="/home" className="notHover "><a class="nav-link ml-5 addColor effect" ><span style={{color:"#0A77E7"}}>Home</span></a></Link>
       
      </li>
      <li class="nav-item">
        <Link to="/project" className="notHover"> <a class="nav-link ml-5 addColor effect" ><span style={{color:"#0A77E7"}}>project</span> </a></Link>
       
      </li>
      <li class="nav-item">
        <Link to="/blog" className="notHover"> <a class="nav-link ml-5 addColor effect" ><span style={{color:"#0A77E7"}}>Blog</span> </a></Link>
       
      </li>
      <li class="nav-item">
        <Link className="notHover"> <a class="nav-link ml-5 addColor effect" > <span style={{color:"#0A77E7"}}>About me</span></a></Link>
       
      </li>
      <li class="nav-item ">
       <Link to="/resume" className="notHover "><a class="nav-link ml-5 addColor effect" ><span style={{color:"#0A77E7"}}>Resume</span> </a></Link>
      </li>
    
     
      </ul>
    
  </div>
</nav>


      
    
    );
};

export default Headers;