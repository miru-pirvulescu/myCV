import React from 'react';

import {Cell} from 'react-mdl';

const PersonalDetails = () => {
    return(
        <>
            <Cell col={5} tablet={12} phone={12} style={{textAlign: 'center'}}>
                    <h4 style={{fontWeight: "bold",fontSize: "30px"}}>
                            About me (in short)
                    </h4>
                    <h5>Name: Miruna-Ioana Pirvulescu</h5>
                    <h5>Age: 21</h5>
                    <h5>Studies: King's College London</h5>
                    <h5>Subject: Computer Science (Artificial Intelligence)</h5>
                    <h5>Interests: Artificial Intelligence, Web Development, Gameplay Programming</h5>
                    <h5>Preferred languages: C++, Java, Python, JavaScript, React.js, React Native</h5>
            </Cell>
        </>
        
    );
}

export default PersonalDetails;