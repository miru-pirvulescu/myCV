import React from 'react';
import Intro from './Intro.js';
import PersonalDetails from './PersonalDetails.js';

import {Grid} from 'react-mdl';
import Divider from '@material-ui/core/Divider';

const About = () => {
    return(
        <Grid className="demo-grid-ruler justify-content-around" id="about">
            <Intro />
            <Divider orientation="vertical" flexItem={true}/>
            <PersonalDetails />
        </Grid>
    );
}

export default About;