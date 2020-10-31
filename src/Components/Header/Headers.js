import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css'

const Headers = () => {
    return (

<nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand pl-5 notHover" style={{color:"#0A77E7"}}>Portfolio</a>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto pl-5">
      <li class="nav-item active">
      <Link to="/home" className="notHover "><a class="nav-link ml-5 addColor effect" >Home</a></Link>
       
      </li>
      <li class="nav-item">
        <Link to="/project" className="notHover"> <a class="nav-link ml-5 addColor effect" > project</a></Link>
       
      </li>
      <li class="nav-item">
        <Link to="/blog"className="notHover"> <a class="nav-link ml-5 addColor effect" > Blog</a></Link>
       
      </li>
      <li class="nav-item">
        <Link className="notHover"> <a class="nav-link ml-5 addColor effect" > About me</a></Link>
       
      </li>
      <li class="nav-item ">
       <Link to="/resume" className="notHover "><a class="nav-link ml-5 addColor effect" >Resume  </a></Link>
      </li>
    
      </ul>
    
  </div>
</nav>


      
    
    );
};

export default Headers;