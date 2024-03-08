import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from 'semantic-ui-react';
import {toast} from 'react-hot-toast'
//var bcrypt = require('bcryptjs');
import bcrypt from 'bcryptjs'
function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mnumber, setMnumber] = useState('');
    const [password, setPassword] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm();
    
    const onSubmit = (data) => {
    const cpassword = data.cpassword
    if(data.password === cpassword){

        
    const userData = localStorage.getItem('users')
    const userDataj = JSON.parse(userData)
    const user = userDataj.find(user => user.email === data.email)

    if (user === undefined){
           setFirstName(data.firstname)
           setLastName(data.lastName)
           setEmail(data.email)
           setMnumber(data.mnumber)
           setPassword(data.password)

           const salt = bcrypt.genSaltSync(10);
           const hashedPassword = bcrypt.hashSync(data.password, salt)
           console.log(hashedPassword);
           let usersData = JSON.parse(localStorage.getItem('users'))
           usersData.push({
                firstname : data.firstName,
                lastname : data.lastName,
                email : data.email,
                mnumber : data.mnumber,
                password : hashedPassword
                });
            localStorage.setItem('users', JSON.stringify(usersData))

            const loggedInuser = {
                email : data.email,
                password : hashedPassword
              }
              localStorage.setItem('loggedIn', JSON.stringify(loggedInuser))
            }
            else{
                toast.error('user is already registered')
            }
            }
        else{
           toast.error(`password and confirm password doesn't match`)
        }




 }

  return (
    <div>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
        <label>First Name</label>
            <input
                placeholder='First Name'
                type="text"
                {...register("firstName", { required: true, maxLength: 10 })}
                    />
                {errors.firstName && <p>Please check the First Name</p>}
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
            <input
                placeholder='First Name'
                type="text"
                {...register("lastName", { required: true, maxLength: 10 })}
                    />
               {errors.lastName && <p>Please check the Last Name</p>}
        </Form.Field>
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
        <label>Mobile Number</label>
            <input
                placeholder='Mobile number'
                type="tel"
                {...register("mnumber", { required: true,minLength:10, maxLength:10 })}
                    />
               {errors.mnumber && <p>Invalid Mobile number</p>}
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
        <Form.Field>
        <label>Confirm Password</label>
            <input
                placeholder='Confirm password'
                type="password"
                {...register("cpassword")}
                    />
        </Form.Field>
        <Button type='submit'>Sign Up</Button>
    </Form>
    </div>
  )
}

export default SignUp
