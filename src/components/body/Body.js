import React from 'react';
import Welcome from './welcome/Welcome';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Background from './background/Background';


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