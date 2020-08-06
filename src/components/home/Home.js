import React from 'react';
import Welcome from './Welcome';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const Home = ({weekend, weekendList, weekList}) => {
    return(
        <>
            <Header />
            <Welcome/>
            <Footer />
        </>
    );
}

export default Home;