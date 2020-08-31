import React from 'react';
import Welcome from './Welcome';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';


const Body = ({weekend, weekendList, weekList}) => {
    return(
        <>
            <Welcome />
            <About />
            <Portfolio />
            <Contact />
        </>
    );
}

export default Body;