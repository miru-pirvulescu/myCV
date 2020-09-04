import React from 'react';
import Welcome from './Welcome';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Work from './Work';


const Body = () => {
    return(
        <>
            <Welcome />
            <About />
            <Work />
            <Portfolio />
            <Contact />
        </>
    );
}

export default Body;