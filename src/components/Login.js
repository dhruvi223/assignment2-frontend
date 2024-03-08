import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from 'semantic-ui-react';
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs-react";



function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    console.log(email);
    console.log(password);
    
    
    const onSubmit = (data) => {

      
      const userData = localStorage.getItem('users')
      const userDataj = JSON.parse(userData)
      const user = userDataj.find(user => user.email === data.email)
      
      //setting logged in user in local storage
      const loggedInuser = {
        email : data.email,
        password : user.password
      }
      localStorage.setItem('loggedIn', JSON.stringify(loggedInuser))

    if (user !== null){
      const result = bcrypt.compareSync(data.password, user.password)
      console.log(result);
      if(result){
        setEmail(data.email)
        setPassword(data.password)
        navigate("/");
      }
      else{
        toast.error('password is incorrect')
      }
    }
    else{
       toast.error('email is not registered')
    }
    
}



  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
        <label>Email</label>
            <input
                placeholder='Email'
                type="email"
                {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ } )}
                    />
               {errors.email && <p>Invalid Email address</p>}
        </Form.Field>
        <Form.Field>
        <label>Password</label>
            <input
                placeholder='Password'
                type="password"
                {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ })}
                    />
               {errors.password && <p>Password is weak (must contain at least one digit, one lowercase letter, one uppercase letter, and be between 8 and 32 characters)</p>}
        </Form.Field>
        <Button type='submit'>Login</Button>
    </Form>
    </div>
  )
}

export default Login
