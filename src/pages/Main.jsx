import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar'

const Main = (props) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    function viewBookHandler(e) {
        navigate('/home', { replace: true })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className='d-flex justify-content-center' style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
                height: '100vh',
                backgroundSize: 'cover',
            }}>
                <div className='m-5'>
                    <div>
                        <h1 >Welcome To Ice And Fire Book Store</h1>
                    </div>
                    <div className='d-flex justify-content-center'>
                        {token && <div><button onClick={viewBookHandler} className='p-2 text-white btn btn-info'>View Books</button></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
