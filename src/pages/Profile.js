import React from 'react'
import {toast} from 'react-hot-toast'
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { Form, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

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
      <Form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column',alignItems: 'center',}}>
        <Form.Field>
        <label>First Name:</label>
        <div style={{ width: '350px', height: '40px' }}  >{user.firstname}</div>
        </Form.Field>
        
        <Form.Field>
        <label>Last Name:</label>
        <div style={{ width: '350px', height: '40px' }} >{user.lastname}</div>
        </Form.Field>
        
        <Form.Field>
        <label>Email:</label>
        <div style={{ width: '350px', height: '40px' }} >{user.email}</div>
        </Form.Field>

        <Form.Field>
        <label>Mobile Number:</label>
        <div style={{ width: '350px', height: '40px' }}>{user.mnumber}</div>
        </Form.Field>
        <Button type='submit' style={{ width: '350px', height: '40px', marginBottom: '10px' }}>Log out</Button>
        <Link to={"/showlist"}>
        <Button style={{ width: '350px', height: '40px' }}>Show List</Button>
        </Link>
    </Form>
    </div>
  )
}

export default Profile
