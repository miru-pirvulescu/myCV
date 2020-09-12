import React from 'react';
import Welcome from './Welcome';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Background from './Background';


const Body = () => {
    return(
        <>
            <Welcome />
            <About />
            <Background />
            <Portfolio />
            <Contact />
        </>
    );
}

export default Body;