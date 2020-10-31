import React, { useState } from 'react';
import im1 from '../../../Image/project2.PNG';
import im2 from '../../../Image/project3.PNG'
import SubPart from './SubPart/SubPart';
const data = [

        {
            img:"https://i.postimg.cc/MKg0XNDs/project2.png",
            name:"Socal-Work",
            f1:"a",
            f2:"a ",
            f3:" a",
            f4:"a ",
            f5:" a"
        },
        {
            img:"https://i.postimg.cc/MKg0XNDs/project2.png",
            name:"Socal-Work",
            f1:"a ",
            f2:"a ",
            f3:"a ",
            f4:" a",
            f5:"a "
        },
        {
            img:"https://i.postimg.cc/MKg0XNDs/project2.png",
            name:"Socal-Work",
            f1:" a",
            f2:"b ",
            f3:" c",
            f4:" d",
            f5:" 3"
        }  
  

]
const Part1 = () => {
    const [state,setState] = useState(data)
    return (
        <div className="row">
            {
                state.map(pd => <SubPart service={pd}></SubPart>)
            }
        </div>
    );
};

export default Part1;