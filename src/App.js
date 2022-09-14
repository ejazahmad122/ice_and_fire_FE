import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ChangePassword from './components/ChangePassword';
import ForgotPassword from './components/ForgotPassword';
import LogIn from './components/LogIn';
import SetNewPassword from './components/SetNewPassword';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  function checkValidRoute(element) {
    const token = localStorage.getItem('token')
    return token ? element : <Navigate to='/login' />
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Main></Main>} />
        <Route path='/register' element={<SignUp></SignUp>} />
        <Route path='/login' element={<LogIn></LogIn>} />
        <Route path='/home' element={checkValidRoute(<Home></Home>)} />
        <Route path='/changepassword' element={checkValidRoute(<ChangePassword />)} />
        <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>} />
        <Route path='/set-new-pass/*' element={<SetNewPassword></SetNewPassword>} />
      </Routes>
    </>
  );
}
export default App;
