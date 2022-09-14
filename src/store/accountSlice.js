import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        token: null,
        msg: ''
    },
    reducers: {
        registerUser(state, action) {
            console.log("registered Successfully")
        },
        logInUser(state, action) {
            const response = action.payload.res
            state.msg = response.msg
            state.token = response.token.access
            localStorage.setItem('token', response.token.access)         
        },
    }

})

export const register = (data) => {
    return async dispatch => {
        await axios.post(`http://127.0.0.1:8000/user/register/`, {
            ...data
        }).then(res => {
            alert("You Registered Successfully !!")
            return dispatch(accountActions.registerUser({ res: res.data }))
        }).catch(err => {
            alert("something went wrong while registeration !!!")
        })
    };
};
export const logIn = (data) => {
    return async(dispatch) => {
        await axios.post(`http://127.0.0.1:8000/user/login/`, {
            ...data
        }).then(res => {
            alert("You Logged In Successfully !!")
            return dispatch(accountActions.logInUser({ res: res.data }))
        }).catch(err => {
            alert("UserName or Password is Invalid !!!")
        })
    };
};
export const changePass = (data, accesstoken) => {
    return async dispatch => {
        await axios.post(`http://127.0.0.1:8000/user/changepassword/`, { ...data },
            {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + accesstoken
                }
            }).then(res => {
                alert("your password has been changed successfully !!!")
            }).catch(err => {
                alert("something went wrong while changing password !!!")
            })
    };
};

export const sendResetPassEmail = (data) => {
    return dispatch => {
        axios.post(`http://127.0.0.1:8000/user/sent-password-reset-email/`, {
            ...data
        }).then(res => {
            alert("email sent successfully , please check your email !!")
        }).catch(err => {
            alert("something went wrong while sending email !!!")
        })
    };
};
export const setNewPassword = (data, uidToken) => {
    return dispatch => {
        axios.post(`http://127.0.0.1:8000/user/reset-password/${uidToken}/`, {
            ...data
        }).then(res => {
            alert("password reset successfully !!")
        }).catch(err => {
            alert("something went wrong while reset password !!!")
        })
    };
};

export const accountActions = accountSlice.actions
export default accountSlice
