import React from 'react';

const SubPart = (props) => {
    const {img,f1,f2,f3,f4,f5} = props.service;

    console.log(props.service)
    return (
        <>
        <div className="col-md-7 mt-2 ml-2 pl-5">
        <div className="card" style={{width:" 18rem"}}>
  <img className="card-img-top" src={img} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>



    </div>
    <div className="col-md-3 ">
<h1>{f1} <br/>{f2} <br/> {f3} <br/> {f4} <br/> {f5}</h1>
    </div>
    </>
    );
};

export default SubPart;
