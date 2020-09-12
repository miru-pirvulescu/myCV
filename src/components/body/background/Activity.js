import React from 'react';
import {Tab} from 'react-bootstrap';

const experiencestyle = {
    marginLeft: "40px",
    marginRight: "40px",
    fontFamily: "calibri",
    fontSize: "20px",
    color: "black"
}

const Activity = ({name, organisation, period, description}) =>{

    return(
        <>
            <Tab.Pane eventKey="third" style={experiencestyle}>
                <b>{name}</b>
                <br></br>
                <i style={{fontSize: "15px"}}>{organisation}, {period}</i>
                <br></br>
                {description}
                <br></br><br></br><br></br>
            </Tab.Pane>
        </>
    );
}

export default Activity;