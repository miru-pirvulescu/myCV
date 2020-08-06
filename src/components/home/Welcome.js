import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Welcome = () => {
    return(
        <Jumbotron style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundSize: 'cover'}}>
            <h1>Welcome!</h1>
        </Jumbotron>
    );
}

export default Welcome;