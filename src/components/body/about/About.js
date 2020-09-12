import React from 'react';

import {Grid, Cell} from 'react-mdl';
import Divider from '@material-ui/core/Divider';

import aboutData from "../../../data/about/AboutData.js";

const introstyle = {
    textAlign: "center",
    fontFamily: "calibri"
}

const About = () => {
    return(
        <Grid className="demo-grid-ruler justify-content-around" id="about">
            {
                aboutData.map(section =>(
                    <>
                        <Cell col={5} tablet={12} phone={12} style={introstyle}>
                            <br></br>
                            <p style={{fontWeight: "bold",fontStyle: "italic", fontSize: "30px"}}>
                                {section.heading}
                            </p>
                            <br></br>
                            <p style={{fontSize: "20px"}}>
                                {section.par_one}
                            <br></br><br></br>
                                {section.par_two}
                            </p>
                        </Cell>
                        {section.divider ? <Divider orientation="vertical" flexItem={true}/> : <></>}
                    </>
                ))
            }
        </Grid>
    );
}

export default About;