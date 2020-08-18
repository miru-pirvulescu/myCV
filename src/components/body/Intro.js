import React from 'react';

import {Cell} from 'react-mdl';


const Intro = () => {
    return(
        <Cell col={5} tablet={12} phone={12} style={{
            textAlign:'center',
            paddingLeft:"50px",
            paddingRight:"50px"
        }}>
                <h4 style={{fontWeight: "bold",fontSize: "30px"}}>
                    Hello, and welcome to my website!
                </h4>

                <h5>
                    This is where you can find some demos my personal projects, as well as  request
                    more information about me (such as a CV, a cover letter, references, or more
                    information about my work).
                </h5>
                <h5>
                    If you have any questions about how the website works, please feel free to ask
                    me at any time, using the contact details provided below.
                </h5>
        </Cell>
    );
}

export default Intro;