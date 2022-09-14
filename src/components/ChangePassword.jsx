import { Input } from '@mui/material';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changePass } from '../store/accountSlice';

const ChangePassword = () => {
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const token = localStorage.getItem('token')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(changePass({
            password,
            password2
        }, token))
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className='border m-5 d-flex justify-content-center w-50'>
                <Form onSubmit={submitHandler} className='m-5' style={{ width: '60%' }}>
                    <div className='mb-5'>
                        <h1>Change Password</h1>
                    </div>
                    <div className='mb-3'>
                        <Input type='password' fullWidth onChange={e => setPassword(e.target.value)} required placeholder='Enter your password'></Input>
                    </div>
                    <div className='mb-3'>
                        <Input type='password' fullWidth onChange={e => setPassword2(e.target.value)} required placeholder='Confirm your password'></Input>
                    </div>
                    <div>
                        <Button type='submit' >confirm</Button>
                    </div>
                </Form>
            </div>
        </div>

    );
}

export default ChangePassword
