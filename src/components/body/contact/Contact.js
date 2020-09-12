import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

import {Grid} from 'react-mdl';
import Divider from '@material-ui/core/Divider';

const Contact = () =>{
    return(
        <>
            <Grid className="demo-grid-ruler justify-content-around" id="contact">
                <ContactForm />
                <Divider orientation="vertical" flexItem={true}/>
                <ContactDetails />
            </Grid>
        </>
    );
}

export default Contact;