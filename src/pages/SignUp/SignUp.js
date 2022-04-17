import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div>
            <div className='container mx-auto w-50'>

                <Form className='mt-5 border border-left-0 p-4'>
                    <h2 > Sign-Up </h2>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="secondary" className='fw-bold' type='submit'>
                            Create an account
                        </Button>
                    </div>
                    <p className='mt-2'>Already have an account?<Link to='/signin' style={{ textDecoration: 'none' }} className='text-primary px-3'>Signin please</Link></p>
                </Form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default SignUp;