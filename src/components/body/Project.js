import React, {useState} from 'react';
import {Card, Button, Badge, Modal} from 'react-bootstrap';

const Project = ({title, description, thumbnail, tags, details}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    {tags.map(tag =>(
                        <>
                            <Badge variant="primary">{tag}</Badge>{' '}
                        </>
                    ))}
                    <br></br>
                    <Button
                        variant="outline-dark" 
                        onClick={handleShow}
                        style={{
                            bottom: "0px"
                        }}>Learn more</Button>
                </Card.Body>
            </Card>
            
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{details}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Project;