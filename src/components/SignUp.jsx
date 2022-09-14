import { Checkbox, Input } from '@mui/material';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../store/accountSlice';

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const [tc, setTc] = useState(false)

    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register({
            email,
            name,
            password,
            password2,
            tc
        }))
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className='border m-5 d-flex justify-content-center w-50'>
                <Form onSubmit={submitHandler} className='m-5 p-5' style={{ width: '60%' }}>
                    <div className='mb-5'>
                        <h1>Sign Up</h1>
                    </div>
                    <div className='mb-3'>
                        <Input type='text' fullWidth onChange={e => setName(e.target.value)} required placeholder='Enter your name'></Input>
                    </div>
                    <div className='mb-3'>
                        <Input type='email' fullWidth onChange={e => setEmail(e.target.value)} required placeholder='Enter your email'></Input>
                    </div>
                    <div className='mb-3'>
                        <Input type='password' fullWidth onChange={e => setPassword(e.target.value)} required placeholder='Enter your password'></Input>
                    </div>
                    <div className='mb-3'>
                        <Input type='password' fullWidth onChange={e => setPassword2(e.target.value)} required placeholder='Enter your confirm password'></Input>
                    </div>
                    <div className='mb-3'>
                        <label >Accept</label>
                        <Checkbox name='TC' value={true} onChange={e => setTc(e.target.value)} required></Checkbox>
                    </div>
                    <div className='mb-3'>
                        <Button type='submit' >Register</Button>
                    </div>
                    <div>
                        <Link to='/login' className='text-decoration-none'>Login now</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;
