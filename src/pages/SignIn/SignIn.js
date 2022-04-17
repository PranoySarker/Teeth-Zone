import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className='mx-auto w-50 mt-5 '>
                <Form className='border border-left-0 p-4 mb-5'>
                    <h2 > Login </h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="secondary" className='fw-bold'>
                            Login
                        </Button>
                    </div>
                    <p className=' mt-2'>Don't have an account?<Link to='/signup' className='text-primary px-2' style={{ textDecoration: 'none' }}>Sign-Up please</Link></p>
                </Form>
            </div>

        </div>
    );
};

export default SignIn;