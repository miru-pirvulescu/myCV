import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const ProjectModal = ({title, details, showState}) =>{
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <>
            
        </>
    );
}

export default ProjectModal;