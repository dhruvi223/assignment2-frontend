import React from 'react'
import {toast} from 'react-hot-toast'
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { Form, Button } from 'semantic-ui-react';

function Profile() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    
    const loggedIn = localStorage.getItem("loggedIn");
    const loggedInuser = JSON.parse(loggedIn);
    const email = loggedInuser.email;
    
    const userData = JSON.parse(localStorage.getItem("users"));
    const user = userData.find((user) => user.email === email);
    console.log(user);
    
    const onSubmit = () => {
        localStorage.removeItem('loggedIn')
        navigate('/')
    }
  return (

    
    <div>
      {/* <button onClick={handleClick}>Logout</button> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
        <label>First Name</label>
        <div >{user.firstname}</div>
        </Form.Field>
        
        <Form.Field>
        <label>Last Name</label>
        <div >{user.lastname}</div>
        </Form.Field>
        
        <Form.Field>
        <label>Email</label>
        <div >{user.email}</div>
        </Form.Field>

        <Form.Field>
        <label>Mobile Number</label>
        <div >{user.mnumber}</div>
        </Form.Field>
        <Button type='submit'>Log out</Button>
    </Form>
    </div>
  )
}

export default Profile
