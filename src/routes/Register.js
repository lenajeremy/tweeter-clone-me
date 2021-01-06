import React from 'react';
import {Link } from 'react-router-dom';
import firebase from '../firebase';
import './Login.css';
import tweeterlogo from '../tweeter.svg';
import {useDispatch} from 'react-redux';
import {setHeaderVisibility } from '../actions';

const Register = props =>{
	const [formDetails, setFormDetails] = React.useState({username: '', password: '', conf_password: '', email_address: ''})
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const dispatch = useDispatch();

  // Ensure that the header is not visible when the user gets to this route
  dispatch(setHeaderVisibility(false))

  const validateFormValue = (formDetails) => {
    if(formDetails.username && formDetails.password && formDetails.conf_password === formDetails.password && formDetails.email_address) return true;
    return false;
  }

  React.useEffect(()=> setSubmitted(() => validateFormValue(formDetails)),[formDetails]);

  const handleFormChange = e=> {
    setFormDetails({...formDetails, [e.target.name] : e.target.value})
  }

  firebase.auth().onAuthStateChanged(user => {
    if(user){
      console.log(user);
      console.log('there is a user')
    }else{
      console.log('there is no user');
    }
  })

  const handleFormSubmission = e =>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(formDetails.email_address, formDetails.password)
      .then(({user}) => {
        firebase.firestore().collection("users").add({
          email: formDetails.email_address,
          username: formDetails.username,
          isVerified: false
        })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      })
    .catch(error => {
      setErrors([error.message])
    });
  }
	return(
      <form className = 'registrationForm' onSubmit = {handleFormSubmission}>
      <div className = 'mx-auto text-center mb-4'>
        <img src = {tweeterlogo} alt = 'logo'/>
      </div>
      <h6 className = 'my-3 text-center faded'>Create a New Account</h6>
      {errors.map(error => 
        <div className = 'small alert alert-danger text-center'>{error}</div>
      )}
        <input type = 'text' value = {formDetails.username} className = 'form-control small' name = 'username' onChange = {handleFormChange} placeholder = "Username"/>
        <input type = 'email' value = {formDetails.email_address} className = 'form-control small' name = 'email_address' onChange = {handleFormChange} placeholder = "Email Address"/>
        <input type = 'password' value = {formDetails.password} className = 'form-control small' name = 'password' onChange = {handleFormChange} placeholder = "Password"/>
        <input type = 'password' value = {formDetails.conf_password} className = 'form-control small' name = 'conf_password' onChange = {handleFormChange} placeholder = "Password Again"/>
        <button className = 'mb-3 btn btn-block btn-primary' disabled = {!submitted} type = 'submit'>Register</button>
        <p className = 'faded small'>Already have an account, login <Link className = 'main' to = '/login'>here</Link></p>
      </form>
		)
}
export default Register;