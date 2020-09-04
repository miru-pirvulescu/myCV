import React from 'react';
import {Tab} from 'react-bootstrap';

const experiencestyle = {
    marginLeft: "40px",
    marginRight: "40px",
    fontFamily: "calibri",
    fontSize: "20px",
    color: "black"
}

const School = ({award, topic, school, period, description}) =>{

    return(
        <>
            <Tab.Pane eventKey="second" style={experiencestyle}>
                <b>{award} - {topic}</b>
                <br></br>
                <i style={{fontSize: "15px"}}>{school}, {period}</i>
                <br></br>
                {description}
                <br></br><br></br><br></br>
            </Tab.Pane>
        </>
    );
}

export default School;