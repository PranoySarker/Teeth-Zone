import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();



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
            setErrors({ ...errors, password: 'Give 6 charecters or more' });
            setUserInfo({ ...userInfo, password: '' });
        }
    }

    const handleConfirmPassword = event => {
        if (event.target.value !== userInfo.password) {
            setErrors({ ...errors, password: 'Password did not match' });
            setUserInfo({ ...userInfo, confirmPassword: '' });
        }
        else {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value });
            setErrors({ ...errors, password: '' })
        }
    }

    const handleUserSignUp = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    if (user) {
        navigate('/home');
    }

    let errorMessage;
    if (hookError) {
        console.log(hookError);
        errorMessage = <p className='text-danger'>Error: {hookError.message}</p>
    }
    return (
        <div>
            <div className='container mx-auto w-50'>

                <Form onSubmit={handleUserSignUp} className='mt-5 border border-left-0 p-4'>
                    <h2 > Sign-Up </h2>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    {errors?.email && <p className='text-danger'>{errors.email}</p>}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errors?.password && <p className='text-danger'>{errors.password}</p>}

                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="secondary" className='fw-bold' type='submit'>
                            Create an account
                        </Button>
                    </div>
                    <p>{errorMessage}</p>
                    <p className='mt-2'>Already have an account?<Link to='/signin' style={{ textDecoration: 'none' }} className='text-primary px-3'>Signin please</Link></p>
                </Form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default SignUp;