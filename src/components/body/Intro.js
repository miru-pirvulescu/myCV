import React from 'react';

import {Cell} from 'react-mdl';

const introstyle = {
    textAlign: "center",
    fontFamily: "calibri"
}


const Intro = () => {
    return(
        <Cell col={5} tablet={12} phone={12} style={introstyle}>
                <br></br>
                <p style={{fontWeight: "bold",fontStyle: "italic", fontSize: "30px"}}>
                    Hello, and welcome to my website!
                </p>
                <br></br>
                <p style={{fontSize: "20px"}}>
                    Here, you will be able to see some information about my work and a few demos of personal projects developed in the last few years.
                <br></br><br></br>
                    If you have any questions, you can always contact me via the channels listed below, or using the form at the end of the page.
                </p>
        </Cell>
    );
}

export default Intro;