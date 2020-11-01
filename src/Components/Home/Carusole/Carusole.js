import React from 'react'
import im1 from '../../../Image/project2.PNG';
import im2 from '../../../Image/project3.PNG'

const Carusole = () => {
  return (
    <div className="p-5" style={{ backgroundColor:'#779FC8',height:'500px',width:'',marginTop:"150px"}} >
      <h2 className='text-center text-light '>Here are some of  <span style={{color: '#0A77E7'}}>my works</span></h2>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner"style={{ height:'400px'}} >
      <div class="carousel-item active">
        <img class="d-block w-100" style={{ height:'300px'}}  src="https://i.imgur.com/IMJBI3x.png" alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100"style={{ height:'300px'}}   src="https://i.pixxxels.cc/MKg0XNDs/project2.png" alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" style={{ height:'300px'}}  src="https://i.postimg.cc/8cvvvBN2/project1.png" alt="Third slide"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    </div>
    
  );
};

export default Carusole;