import React from 'react'
import { useForm } from "react-hook-form"
import { Form, Button } from 'semantic-ui-react';
import {toast} from 'react-hot-toast'
import 'semantic-ui-css/semantic.min.css'

function EditProfile() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {

    const loggedIn = localStorage.getItem("loggedIn");
    const loggedInuser = JSON.parse(loggedIn);
    const email = loggedInuser.email;
    if(data.email === email){
        toast.success('this email already exist')
    }
    else{
         // update local storage with new data
         const usersData = JSON.parse(localStorage.getItem("users"));
         const indexToUpdate = usersData.findIndex(
           (u) => u.email === email
         );
         
         if (indexToUpdate !== -1) {
           usersData[indexToUpdate] = {
             firstname: data.firstName,
             lastname: data.lastName,
             email: data.email,
             mnumber: data.mnumber,
             password: loggedInuser.password,
           };
           localStorage.setItem("users", JSON.stringify(usersData));
           toast.success('profile updated successfully')
         }


          //updating logged in user in localstorage
        const loggedIn = {
            email : data.email,
            password : loggedInuser.password
          }
          localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
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
                placeholder='Last Name'
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
        <Button type='submit'>Sign Up</Button>
    </Form>
      
    </div>
  )
}

export default EditProfile
