import React from 'react';

import {Cell} from 'react-mdl';

const detailsstyle = {
    textAlign: "center",
    fontFamily: "calibri",
}

const PersonalDetails = () => {
    return(
        <>
            <Cell col={5} tablet={12} phone={12} style={detailsstyle}>
                <br></br>
                    <p style={{fontWeight: "bold", fontStyle: "italic", fontSize: "30px"}}>
                            About me (in short)
                    </p>
                    <br></br>
                    <p style={{fontSize: "25px"}}>
                        My name is Miruna, I am a final year student at King's College London, and my main area of interest is Artificial Intelligence. I also enjoy web design and gameplay programming for a bit of a different challenge.<br></br><br></br>
                        As I will graduate around the end of May 2021, I am looking to pursue a career in technology, benefiting a company whose values I respect and appreciate, and who sees me in the same way.
                    </p>
            </Cell>
        </>
        
    );
}

export default PersonalDetails;