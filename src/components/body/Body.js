import React from 'react';
import Welcome from './Welcome';
import About from './About';


const Body = ({weekend, weekendList, weekList}) => {
    return(
        <>
            <Welcome />
            <About />
        </>
    );
}

export default Body;