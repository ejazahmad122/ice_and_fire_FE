import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  function logoutHandler(e) {
    localStorage.clear()
    navigate('/', { replace: true })
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            ICE AND FIRE
          </Typography>
          <div className="d-flex flex-row-reverse">
            {!token && <div><Link to='/login' className='p-2 text-white btn btn-primary'>login</Link></div>}
            {!token && <div><Link to='/register' className='p-2 text-white btn btn-dark'>sigup</Link></div>}
            {token && <div><button onClick={logoutHandler} className='p-2 text-white btn btn-dark'>logout</button></div>}
            {token && <div><Link to='/changepassword' className='p-2 text-white btn'>change password</Link></div>}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
