import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        const emailReg = /\S+@\S+\.\S+/;
        const validEmail = emailReg.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, email: '' })
        } else {
            setErrors({ ...errors, email: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: '' });
        }
    }

    const handlePasswordBlur = event => {
        const p = event.target.value;
        if (p.length > 5) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'Invalid password' });
            setUserInfo({ ...userInfo, password: '' });
        }
    }

    const handleSignin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='mx-auto w-50 mt-5 '>
                <Form onSubmit={handleSignin} className='border border-left-0 p-4 mb-5'>
                    <h2 className='mb-2'> Sign-In </h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    {errors?.email && <p className='text-danger'>{errors.email}</p>}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errors?.password && <p className='text-danger'>{errors.password}</p>}

                    <div className="d-grid gap-2">
                        <Button variant="secondary" className='fw-bold' type='submit'>
                            Login
                        </Button>
                    </div>
                    <p className=' mt-2'>Don't have an account?<Link to='/signup' className='text-primary px-2' style={{ textDecoration: 'none' }}>Sign-Up please</Link></p>
                </Form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default SignIn;