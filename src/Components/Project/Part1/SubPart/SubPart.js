import React from 'react';

const SubPart = (props) => {
    const {img,f1,f2,f3,f4,f5} = props.service;

    console.log(props.service)
    return (
        <>
        <div className="col-md-7 mt-2 ml-2 pl-5">
        <div className="card" style={{width:" 40rem"}}>
  <img className="card-img-top" src={img} alt="Card image cap"/>
 
</div>



    </div>
    <div className="col-md-3 pt-5">
<p>{f1} <br/>{f2} <br/> {f3} <br/> {f4} <br/> {f5}</p>
    </div>
    </>
    );
};

export default SubPart;