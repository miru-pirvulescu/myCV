import React from 'react';
import {Cell} from 'react-mdl';

const ContactDetails = () =>{
    return(
        <>
            <Cell col={3} tablet={12} phone={12} style={{textAlign: 'center'}} id="contact">
                    <h4 style={{fontWeight: "bold",fontSize: "30px"}}>
                            Contact
                    </h4>
                    <i className="fas fa-2x fa-phone"></i><p>+44 7470 200856</p>
                    <i className="fas fa-2x fa-at"></i><p>miruna.pirvulescu@yahoo.com</p>
                    <i class="fas fa-2x fa-map-marker-alt"></i><p>203 Westminster Bridge Rd, London</p>
            </Cell>
        </>
    );
}

export default ContactDetails;