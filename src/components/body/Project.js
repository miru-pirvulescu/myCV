import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Project = ({title, description, thumbnail}) => {
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="primary">More details (open modal)</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Project;