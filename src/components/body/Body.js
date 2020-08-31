import React from 'react';
import Welcome from './Welcome';
import About from './About';
import Portfolio from './Portfolio';


const Body = ({weekend, weekendList, weekList}) => {
    return(
        <>
            <Welcome />
            <About />
            <Portfolio />
        </>
    );
}

export default Body;