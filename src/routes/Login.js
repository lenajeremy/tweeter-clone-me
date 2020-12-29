import React, { useState, useEffect } from 'react';
import {Redirect } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks';
import './Login.css';

const Login = (props) =>{
  const auth = 
  const [toRedirect, setRedirect] = useState(false);
  const [user, auth, error] = useAuthState(auth)
  const handleFormChange = e => {
    return e
  }
  if(toRedirect){
    return <Redirect to = '/'/>
  }else
  return (
    <div className = 'loginPage'>
      <form action = '' method='POST'>
        <input type = 'text' onChange = {handleFormChange} name = 'username' placeholder = 'Enter your username'/>
        <input type = 'password' onChange = {handleFormChange} name = 'password' placeholder = 'Enter your password'/>
        <input type = 'submit' value = "Login"/>
        <p>Don't have an account? Register <a href = '/register'>Here</a></p>
      </form>
    </div>
  )

}
export default Login
