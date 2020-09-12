import React from 'react';
import {Cell} from 'react-mdl';
import {Form, FormLabel, Button} from 'react-bootstrap';

const ContactForm = () =>{
    return(
        <Cell col={8} tablet={12} phone={12}>
            <Form>
                <h4>Get in touch!</h4>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type of request</Form.Label>
                <Form.Control required as="select">
                <option>--Select--</option>
                <option>CV</option>
                <option>Cover Letter</option>
                <option>Project details</option>
                <option>Reference</option>
                <option>Meeting</option>
                </Form.Control>
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Details (optional)</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            </Form>
            <Button type="submit" className="mb-2">
                Submit
            </Button>
        </Cell>
    );
}

export default ContactForm;