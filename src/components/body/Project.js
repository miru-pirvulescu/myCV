import React, {useState} from 'react';
import {Card, Button, Badge, Modal} from 'react-bootstrap';
import {Grid, Cell} from 'react-mdl';
import { Player } from 'video-react';

const Project = ({title, description, thumbnail, tags, details, demo}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

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
                <Modal.Body>
                    <Grid>
                        {demo ?
                            <Cell col={6} phone={12}>
                                <Player
                                    playsInline
                                    poster={thumbnail}
                                    src={demo}
                                    />
                            </Cell>
                            :
                            <></>
                        }
                        <Cell col={!demo ? 12 : 6} phone={12}>
                            {details}
                        </Cell>
                    </Grid>
                    
                
                </Modal.Body>
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