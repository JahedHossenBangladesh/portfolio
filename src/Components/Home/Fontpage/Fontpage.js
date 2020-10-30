import React from 'react';
import Cv from '../../Cv/Resume of Jahed Hossen (8).pdf'
const Fontpage = () => {
    return (
        <div className="row">
            <div className="col-md-6" style={{marginTop:"100px", paddingRight:"50px"}}>
           <div style={{paddingLeft:"90px"}}>
           <h1  style ={{paddingBottom:"0px",paddingLeft:"120px"}}> Hi,I am </h1>
               <h1> <span className="fontStyle"style={{paddingTop:"0px"}}> Jahed</span></h1>
           </div>
                <br/>
                <div style={{marginTop:"20px",paddingLeft:"200px"}}>
                <h2 >A front-end Developer</h2>
                <br/>
                <button type="button" class="btn btn-primary btn-lg"><a href={Cv} download style={{textDecoration:"none",color:"white"}}>Download Resume</a></button>
                </div>

            </div>
            <div className="col-md-6">
                <div style={{marginTop:"60px", paddingRight:"100px",marginLeft:"180px"}}>
              <img src="https://i.imgur.com/rPN3YNQ.png" alt=""/>
                </div>
               
            </div>
        </div>
    );
};

export default Fontpage;