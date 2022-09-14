import { Input } from '@mui/material';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePass, setNewPassword } from '../store/accountSlice';

const SetNewPassword = () => {
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    // const token = useSelector(state=>state.account)

    const dispatch = useDispatch()
    // const url = 'http://localhost:3000/api/user/reset/NA/bbn91m-4bf683f4a84f030cf8f9ddd7570751f9'
    const url = (window.location.pathname).split('/')
    const uidAndToken = url[2] + '/' + url[3]
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setNewPassword({
            password,
            password2
        }, uidAndToken))
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className='border m-5 d-flex justify-content-center w-50'>
                <Form onSubmit={submitHandler} className='m-5' style={{ width: '60%' }}>
                    <div className='mb-5'>
                        <h1>Set New Password</h1>
                    </div>
                    <div className='mb-3'>
                        <Input type='password' fullWidth onChange={e => setPassword(e.target.value)} required placeholder='Enter your password'></Input>
                    </div>
                    <div className='mb-3'>
                        <Input type='password' fullWidth onChange={e => setPassword2(e.target.value)} required placeholder='Confirm your password'></Input>
                    </div>
                    <div className='mb-3'>
                        <Button type='submit' >Submit</Button>
                    </div>
                    <div className='mb-3'>
                        <Link to='/login'>LogIn Now</Link>
                    </div>
                </Form>
            </div>
        </div >
    );
}

export default SetNewPassword;
