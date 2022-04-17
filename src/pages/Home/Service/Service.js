import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { name, price1, price2, picture, description } = props.service;

    const navigate = useNavigate();
    const handleBooking = () => {
        navigate('/checkout');
    }
    return (
        <div className='col-lg-4 col-md-12 col-12'>
            <Card style={{ width: '22rem' }}>
                <Card.Img className='p-2' variant="top" src={picture} />
                <Card.Body>
                    <h3 className='pb-3'>{name}</h3>
                    <h6>For Childrens : ${price1}</h6>
                    <h6>For Adults : ${price2}</h6>
                    <Card.Text>{description.length ? description.slice(0, 80) + '...' : description}</Card.Text>
                    <Button onClick={handleBooking} variant="secondary">Confirm Your Booking</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;