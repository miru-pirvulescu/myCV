import React from 'react';
import {Tab} from 'react-bootstrap';

const experiencestyle = {
    marginLeft: "40px",
    marginRight: "40px",
    fontFamily: "calibri",
    fontSize: "20px",
    color: "black"
}

const Job = ({title, company, period, description}) =>{

    return(
        <>
            <Tab.Pane eventKey="first" style={experiencestyle}>
                <b>{title}</b>
                <br></br>
                <i style={{fontSize: "15px"}}>{company}, {period}</i>
                <br></br>
                {description}
                <br></br><br></br><br></br>
            </Tab.Pane>
        </>
    );
}

export default Job;