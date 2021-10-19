import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = (props) => {
    const { img, des, post, name, } = props.doctor;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h3>{post}</h3>
                        <p>{des}</p>
                        <button className="btn btn-primary">Details</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;