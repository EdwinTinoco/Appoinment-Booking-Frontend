import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom";

import Image7 from '../../../static/assets/images/images/image-7.jpg'


export default function Register(props) {
   const [userFirstName, setUserFirstName] = useState('')
   const [userLastName, setUserLastName] = useState('')
   const [userPhoneNumber, setUserPhoneNumber] = useState('')
   const [userEmail, setUserEmail] = useState('')
   const [userPassword, setUserPassword] = useState("")
   const [userConfirmPassword, setUserConfirmPassword] = useState("")
   const [input, setInput] = useState({
      name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: ""
   })
   const [errors, setErrors] = useState({})

   const handleChange = (event) => {
      let inputs = input;


      [event.target.name] = event.target.value;
      console.log('target name', [event.target.name])
      console.log('target value', event.target.value)

      inputs.first_name = event.target.value,

         console.log("inputs", inputs)

      setInput({
         inputs
      });
   }

   const handleSubmitRegisterNewUser = () => {
      event.preventDefault();

      console.log('validate', validate())

      console.log(input, errors);

      if (validate()) {
         console.log(input, errors);

         let inputs = {};
         inputs["first_name"] = "";
         inputs["last_name"] = "";
         inputs["phone"] = "";
         inputs["email"] = "";
         inputs["password"] = "";
         inputs["confirm_password"] = "";

         setInput({
            inputs
         });

      }

      // if (userGrade === "") {
      //    setMessageUser(
      //       "You need to select an option for grade"
      //    )
      // } else {
      //    axios
      //       .post(
      //          'https://class-cash-api-ejlt.herokuapp.com/add-user',
      //          {
      //             users_first_name: userFirstName,
      //             users_last_name: userLastName,
      //             users_address: userAddress,
      //             users_zip_code: userZipCode,
      //             users_phone_number: userPhoneNumber,
      //             users_grades_id: parseInt(userGrade),
      //             users_email: userEmail,
      //             users_password: userPassword,
      //             users_active: "Y"
      //          },
      //       )
      //       .then(response => {
      //          console.log("new user", response.data)

      //          setUserFirstName('')
      //          setUserLastName('')
      //          setUserAddress('')
      //          setUserZipCode('')
      //          setUserPhoneNumber('')
      //          setUserGrade("")
      //          setUserEmail('')
      //          setUserPassword('')
      //          setMessageUser("User Added Succesfully!")
      //       })
      //       .catch(error => {
      //          console.log('handleSubmitRegisterNewUser error', error)
      //       })
      // }
   }

   const validate = () => {
      let inputs = input;
      let errors = {};
      let isValid = true;

      if (!inputs["first_name"]) {
         isValid = false;
         errors["first_name"] = "Please enter your first name.";
      }

      if (!inputs["last_name"]) {
         isValid = false;
         errors["last_name"] = "Please enter your last name.";
      }

      if (!inputs["phone"]) {
         isValid = false;
         errors["phone"] = "Please enter your phone.";
      }

      if (!inputs["email"]) {
         isValid = false;
         errors["email"] = "Please enter your email.";
      }

      if (typeof inputs["email"] !== "undefined") {
         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

         if (!pattern.test(inputs["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
         }
      }

      if (!inputs["password"]) {
         isValid = false;
         errors["password"] = "Please enter your password.";
      }

      if (!inputs["confirm_password"]) {
         isValid = false;
         errors["confirm_password"] = "Please enter your confirm password.";
      }

      if (typeof inputs["password"] !== "undefined" && typeof inputs["confirm_password"] !== "undefined") {

         if (inputs["password"] != inputs["confirm_password"]) {
            isValid = false;
            errors["password"] = "Passwords don't match.";
         }
      }

      setErrors({
         errors
      });

      return isValid;
   }


   return (
      <div className="signup-main-wrapper">
         <div className="left-column">
            <div className="logo">
               <img src={Image7} alt='image-7' />
            </div>
         </div>

         <div className="right-column">
            <p>Sign up</p>

            <form onSubmit={handleSubmitRegisterNewUser} className="signup-form">
               <div className="form-group">
                  <label htmlFor="name"><b>First Name</b></label>
                  <input type='text'
                     value={input.name}
                     onChange={handleChange}
                     className='new-entry-input'
                     name="name"
                     placeholder='First Name'
                  >
                  </input>
                  <div className="text-danger">{errors.name}</div>
               </div>

               <div className="form-group">
                  <label htmlFor="last_name"><b>last Name</b></label>
                  <input type='text'
                     value={input.last_name}
                     onChange={handleChange}
                     className='new-entry-input'
                     name="last_name"
                     placeholder='Last Name'
                  >
                  </input>
                  <div className="text-danger">{errors.last_name}</div>
               </div>

               <div className="form-group">
                  <label htmlFor="phone"><b>Phone</b></label>
                  <input type='text'
                     value={input.phone}
                     onChange={handleChange}
                     className='new-entry-input'
                     name="phone"
                     placeholder='Phone number (optional)'
                  >
                  </input>
               </div>

               <div className="form-group">
                  <label htmlFor="email"><b>Email</b></label>
                  <input type='email'
                     value={input.email}
                     onChange={handleChange}
                     className='new-entry-input'
                     name="email"
                     placeholder='Email'
                  >
                  </input>
                  <div className="text-danger">{errors.email}</div>
               </div>

               <div className="form-group">
                  <label htmlFor="password"><b>Password</b></label>
                  <input type='password'
                     value={input.password}
                     onChange={handleChange}
                     className='new-entry-input'
                     name="password"
                     placeholder='Password'
                  >
                  </input>
                  <div className="text-danger">{errors.password}</div>
               </div>

               <div className="form-group">
                  <label htmlFor="confirm_password"><b>Confirm Password</b></label>
                  <input type='password'
                     value={input.confirm_password}
                     onChange={handleChange}
                     className='new-entry-input'
                     name="confirm_password"
                     placeholder='Confirm Password'
                  >
                  </input>
                  <div className="text-danger">{errors.confirm_password}</div>
               </div>

               <button type='submit' className='add-button'>Sign up</button>
            </form>
         </div>

      </div>
   )
}