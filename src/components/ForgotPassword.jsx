import { Input } from '@mui/material';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { sendResetPassEmail } from '../store/accountSlice';

const ForgotPassword = () => {
    const [email, setEmail] = useState()

    const dispatch = useDispatch()

    const submitHandler = async (e) => {
        e.preventDefault()
        await dispatch(sendResetPassEmail({
            email,
        }))
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className='border m-5 d-flex justify-content-center w-50'>
                <Form onSubmit={submitHandler} className='m-5' tyle={{ width: '60%' }}>
                    <div className='mb-5'>
                        <h1>Reset Password</h1>
                    </div>
                    <div className='mb-3'>
                        <Input type='email' fullWidth onChange={e => setEmail(e.target.value)} required placeholder='Enter your email'></Input>
                    </div>
                    <div className='mt-3'>
                        <Button type='submit' >Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ForgotPassword;
