import React from "react";
import "semantic-ui-css/semantic.min.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import bcrypt from "bcryptjs-react";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.npassword === data.cpassword) {
      // getting information of which user is logged in from local storage
      const loggedIn = localStorage.getItem("loggedIn");
      const loggedInuser = JSON.parse(loggedIn);
      const email = loggedInuser.email;

      //getting information of user which is logge din from localstorage
      const userData = localStorage.getItem("users");
      const userDataj = JSON.parse(userData);

      const user = userDataj.find((user) => user.email === email);
      // checking if entered old password is correct
      const result = bcrypt.compareSync(data.password, user.password);
      if (result) {
        // encrypting new password
        const salt = bcrypt.genSaltSync(10);
        const hashednewPassword = bcrypt.hashSync(data.password, salt);

        console.log(hashednewPassword);
        console.log(user.email);
        console.log(user.firstname);
        
        // update local storage with new password
        const usersData = JSON.parse(localStorage.getItem("users"));
        const indexToUpdate = usersData.findIndex(
          (u) => u.email === user.email
        );
        if (indexToUpdate !== -1) {
          usersData[indexToUpdate] = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            mnumber: user.mnumber,
            password: hashednewPassword,
          };
          localStorage.setItem("users", JSON.stringify(usersData));
          toast.success('password updated successfully')
        }


        //updating logged in user in localstorage
        const loggedInuser = {
            email : user.email,
            password : hashednewPassword
          }
          localStorage.setItem('loggedIn', JSON.stringify(loggedInuser))
      
    
    
    
    } else {
        toast.error("password is incorrect");
      }
    } else {
      toast.error("new password and confirm new passord are not same");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
            })}
          />
          {errors.password && (
            <p>
              Password is weak (must contain at least one digit, one lowercase
              letter, one uppercase letter, and be between 8 and 32 characters)
            </p>
          )}
        </Form.Field>
        <Form.Field>
          <label>New Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("npassword", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
            })}
          />
          {errors.cpassword && (
            <p>
              Password is weak (must contain at least one digit, one lowercase
              letter, one uppercase letter, and be between 8 and 32 characters)
            </p>
          )}
        </Form.Field>
        <Form.Field>
          <label>Confirm new Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("cpassword", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
            })}
          />
          {errors.cpassword && (
            <p>
              Password is weak (must contain at least one digit, one lowercase
              letter, one uppercase letter, and be between 8 and 32 characters)
            </p>
          )}
        </Form.Field>

        <Button type="submit">Change Password</Button>
      </Form>
    </div>
  );
}

export default ChangePassword;
