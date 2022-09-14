import { Input } from '@mui/material';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../store/accountSlice';

const LogIn = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(logIn({
            email,
            password
        }))
        const token = localStorage.getItem('token')
        token && navigate('/', { replace: true })
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='border m-5 d-flex justify-content-center w-50'>
                <Form onSubmit={submitHandler} className='m-5 p-5' style={{ width: '60%' }} >
                    <div className='mb-5'>
                        <h1>Sign In</h1>
                    </div>
                    <div className='mb-3'>
                        <Input type='email' fullWidth onChange={e => setEmail(e.target.value)} required placeholder='Enter your email'></Input>
                    </div>
                    <div className='mb-3'>
                        <Input type='password' fullWidth onChange={e => setPassword(e.target.value)} required placeholder='Enter your password'></Input>
                    </div>
                    <div className='mb-3'>
                        <Button type='submit' >LogIn</Button>
                    </div>
                    <div>
                        <Link to='/register' className='text-decoration-none'>create account</Link>
                    </div>
                    <div>
                        <Link to='/forgotpassword' className='text-decoration-none'>forgot password ? </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default LogIn
