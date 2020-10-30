import React from 'react';

import Headers from '../Header/Headers';
import Carusole from './Carusole/Carusole';
import Fontpage from './Fontpage/Fontpage';


const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Fontpage></Fontpage>
             <Carusole></Carusole>
        </div>
    );
};

export default Home;