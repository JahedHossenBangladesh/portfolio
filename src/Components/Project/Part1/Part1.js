import React, { useState } from 'react';
import im1 from '../../../Image/project2.PNG';
import im2 from '../../../Image/project3.PNG'
import SubPart from './SubPart/SubPart';
const data = [

        {
            img:"https://i.postimg.cc/8cvvvBN2/project1.png",
            name:"E-Learning-website",
            f1:"-Customers can add and remove selected services.",
            f2:"-Customer specific dashboard to control orders and provide feedback",
            f3:"-Firebase Authentication for customers.",
            f4:"-Admin dashboard to control the orders, services and new admin access",
            f5:"-Customer’s information stored to the database for future Use"
        },
        {
            img:"https://i.pixxxels.cc/MKg0XNDs/project2.png",
            name:"Socal-Work",
            f1:"-Users can add and register for volunteer tasks. ",
            f2:"-Firebase Authentication for users registration or login.",
            f3:"-Users specific dashboard to check how many tasks they registered for",

            f4:"-Admin dashboard to add the new task and check the registered volunteer list",
            f5:"-Admin dashboard to add the new task and check the  registered volunteer lisUsers information stored to the MongoDB database for "

        },
        {
            img:"https://i.postimg.cc/43wJcrWZ/project3.png",
            name:"Hotel-website",
            f1:" Users can select a tourist spot and register by the date    when  the user  go and come back ",
            f2:"Firebase Authentication for users registration or  login.",
            f3:"Users can see the hotel of the nearest  place  also can booking.",
            f4:" ",
            f5:" "
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