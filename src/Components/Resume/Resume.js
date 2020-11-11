import React from 'react';
import Headers from '../Header/Headers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Resume = () => {
    return (
        <div>
            
 <div className="row">
            <div className="col-md-8" style={{ paddingRight: "", marginTop: "20px" }}>
            <Headers/>
                <div>
                <h1>Jahed Hossen</h1>
                <h5>Front-end developer &MERN Stack developer</h5>
                <p style={{ marginBottom: "-40px" }}>Linkedin: <a href=" linkedin.com/in/jahed-hossen-30589b179" target="_blank">click here</a></p>
                <p style={{ paddingBottom: "-4px" }} >GitHub: <a href=" https://github.com/JahedHossenBangladesh?tab=repositories " target="_blank" >click here</a>   </p>
                <p style={{ marginTop: "-10px" }} >Website: <a href="https://murmuring-stream-42393.herokuapp.com/?fbclid=IwAR2vS36cIkD_EgipgQsBHQW9krsu9kywdwOQHPEo-MUD8MqpN3M3iZ5-apY" target="_blank">Click here</a></p>
                </div>
            <div>
                <h2 style={{color:"blue"}}>Project</h2>
                <hr/>
                <h3>E-learning website:-</h3>
                <div style={{paddingLeft:"30px"}}>
                    <h4  style={{textDecoration:"underline"}}>Features:</h4>
                    <div style={{paddingLeft:"40px"}}>
                      <h5>  ○ Customers can add and remove selected services.
                          <br/>
          ○ Customer specific dashboard to control orders and
           provide   feedback. <br/>
         ○ Firebase Authentication for customers. <br/>
         ○ Admin dashboard to control the orders, services and new   
          admin access. <br/>
         ○ Customer’s information stored to the database for future
          Use.
</h5>

                    </div>
                    <h4  style={{textDecoration:"underline"}}> Usages-technology:</h4>
                    <div> <h5>      React,Mongodb,Express,Nodejs,React bootstrap ,   
         Boostrap,Firebase,Material Ui .
 </h5> </div>
                </div>
                <hr/>
                <h3>Social Work website:-</h3>
                <div style={{paddingLeft:"30px"}}>
                    <h4  style={{textDecoration:"underline"}}>Features:</h4>
                    <div style={{paddingLeft:"40px"}}>
                      <h5>        ○ Users can add and register for volunteer tasks.
                          <br/>
                          ○ Firebase Authentication for users registration or login. <br/>
                          ○ Users specific dashboard to check how many tasks they     
              registered for. 
 <br/>
 ○ Admin dashboard to add the new task and check the   
            registered volunteer list.
 <br/>
 ○ Users information stored to the MongoDB database for 
                    data load & future use.  
</h5>

                    </div>
                    <h4  style={{textDecoration:"underline"}}> Usages-technology:</h4>
                    <div> <h5>         React,Mongodb,Express,Nodejs,React  
          bootstrap,Boostrap,Firebase,Material Ui .

 </h5> </div>
                </div>
                <hr/>
                <h3>Hotel website:-</h3>
                <div style={{paddingLeft:"30px"}}>
                    <h4  style={{textDecoration:"underline"}}>Features:</h4>
                    <div style={{paddingLeft:"40px"}}>
                      <h5>        ○ Users can add and register for volunteer tasks.
                          <br/>
                          ○ Firebase Authentication for users registration or login. <br/>
                          ○ Users specific dashboard to check how many tasks they     
              registered for. 
 <br/>
 ○ Admin dashboard to add the new task and check the   
            registered volunteer list.
 <br/>
 ○ Users information stored to the MongoDB database for 
                    data load & future use.  
</h5>

                    </div>
                    <h4  style={{textDecoration:"underline"}}> Usages-technology:</h4>
                    <div> <h5>         React,Mongodb,Express,Nodejs,React  
          bootstrap,Boostrap,Firebase,Material Ui .

 </h5> </div>
                </div>
            </div>
             </div>
            <div className="col-md-3" style={{ marginTop: "20px" }}>
           <div>   <p>Uttor Kattoli,city gate, <br />  Golar bari,Akborshah, <br />  Chittagong,4217,Bangaldesh. <br /> +8801815512451 <br /> <a href="mailto:jahedhossen4358@gmail.com ">send me a mail</a></p> </div>
            </div>


        </div>

        </div>
       
    );
};

export default Resume;