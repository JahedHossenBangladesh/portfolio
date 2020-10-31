import React, { useState } from 'react';
import im1 from '../../../Image/project2.PNG';
import im2 from '../../../Image/project3.PNG'
import SubPart from './SubPart/SubPart';
const data = [

        {
            img:"https://i.postimg.cc/8cvvvBN2/project1.png",
            name:"Socal-Work",
            f1:"-Customers can add and remove selected services.",
            f2:" Customer specific dashboard to control orders and provide feedback",
            f3:"Firebase Authentication for customers.",
            f4:"Admin dashboard to control the orders, services and new admin access",
            f5:" Customer’s information stored to the database for future Use"
        },
        {
            img:"https://i.pixxxels.cc/MKg0XNDs/project2.png",
            name:"Socal-Work",
            f1:"a ",
            f2:"a ",
            f3:"a ",
            f4:" a",
            f5:"a "
        },
        {
            img:{im1},
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