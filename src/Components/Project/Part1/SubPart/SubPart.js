import React from 'react';

const SubPart = (props) => {
    const {name,img,f1,f2,f3,f4,f5,link} = props.service;

    console.log(props.service)
    return (
        <>
        <div className="col-md-7 mt-2 ml-2 pl-5">
        <div className="card" style={{width:" 40rem"}}>
        <h3>{name}</h3>
        <div className="mt-5 pb-2 one-edge-shadow" >
        <a href={link} target="_blank" ><img className=" card-img-top" src={img} alt="Card image cap"/></a>
        </div>
       
  
 
</div>



    </div>
    <div className="col-md-3 mt-5 one-edge-shadow">
<p>{f1} <br/>{f2} <br/> {f3} <br/> {f4} <br/> {f5}</p>
    </div>
    </>
    );
};

export default SubPart;
