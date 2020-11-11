import React from 'react';

import Headers from '../Header/Headers';
import Carusole from './Carusole/Carusole';
import Contact from './Contact/Contact';
import Fontpage from './Fontpage/Fontpage';


const Home = () => {
    return (
        <div>
             <Headers/>
            <Fontpage></Fontpage>
             <Carusole></Carusole>
             <Contact></Contact>
        </div>
    );
};

export default Home;