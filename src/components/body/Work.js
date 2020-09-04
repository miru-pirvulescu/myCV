import React, {useState} from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import WorkEducation from './WorkEducation';
import WorkExperience from './WorkExperience';
import WorkExtracurriculars from './WorkExtracurriculars';

const workstyle = {
    marginLeft: "40px",
    marginRight: "40px",
    fontFamily: "calibri",
    fontSize: "25px",
    color: "black"
}

const Work = () =>{

    return(
        <div style={workstyle}>
            <h3>My work</h3>
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item><Nav.Link eventKey="first">Experience</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="second">Education</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="third">Extracurriculars</Nav.Link></Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <WorkExperience />
                        <WorkEducation />
                        <WorkExtracurriculars />
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default Work;