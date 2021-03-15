/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Link, Redirect } from 'react-router-dom';
// import firebase from '../firebase';
import './Login.css';
import Logo from '../Logo';
import {useDispatch, useSelector} from 'react-redux';
import {setHeaderVisibility } from '../actions';

const Login = (props) =>{
  const [toRedirect, setRedirect] = useState(false);
  const [formDetails, setFormDetails] = React.useState({username : '', password: ''});
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();
  const palette = useSelector(store => store.colorPalette);

  // Ensure that the header is not visible when the user gets to this route
  dispatch(setHeaderVisibility(false))
  
  const handleFormChange = e => setFormDetails({...formDetails, [e.target.name] : e.target.value})

  const handleFormSubmission = e =>{
  	// e.preventDefault();
  	// firebase.auth().signInWithEmailAndPassword(formDetails.username, formDetails.password)
  	// .then(user => {
    //   setRedirect(true);
    //   console.log(user);
  	// })
  	// .catch(error => {
  	// 	setError(error.message);
  	// })
  }

  if(toRedirect){
    return <Redirect to = '/'/>
  }else
  return (
  	<form className = 'loginForm' onSubmit = {handleFormSubmission} method = "POST">
      <div className = 'mx-auto text-center mb-4'>
        <Logo dark = {true}/>
      </div>
      <h6 className = 'my-3 text-center faded'>Login to your account</h6>
      {error && <div className = 'small alert alert-danger text-center'>{error}</div>}
      <input type = 'text' value = {formDetails.username} className = 'form-control small' name = 'username' onChange = {handleFormChange} placeholder = "Username"/>
      <input type = 'password' value = {formDetails.password} className = 'form-control small' name = 'password' onChange = {handleFormChange} placeholder = "Password"/>
      <button className = 'mb-3 btn-sm btn btn-block' style = {{background: palette.special}} type = 'submit'>Register</button>
      <p className = 'faded small'>
        Don't have an account, create one <Link style = {{color: palette.special}} className = 'main' to = '/join'>here</Link>
      </p>
     </form>
  )

}
export default Login
