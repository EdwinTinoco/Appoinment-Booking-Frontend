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
   const [messageUser, setMessageUser] = useState("")

   const handleSubmitRegisterNewUser = () => {
      event.preventDefault();

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
               <label htmlFor="first-name"><b>First Name</b></label>
               <input type='text'
                  value={userFirstName}
                  onChange={({ target }) => { setUserFirstName(target.value) }}
                  className='new-entry-input'
                  name="first-name"
                  placeholder='First Name'
                  required
               >
               </input>

               <label htmlFor="last-name"><b>last Name</b></label>
               <input type='text'
                  value={userLastName}
                  onChange={({ target }) => { setUserLastName(target.value) }}
                  className='new-entry-input'
                  name="last-name"
                  placeholder='Last Name'
                  required
               >
               </input>

               <label htmlFor="phone"><b>Phone</b></label>
               <input type='text'
                  value={userPhoneNumber}
                  onChange={({ target }) => { setUserPhoneNumber(target.value) }}
                  className='new-entry-input'
                  name="phone"
                  placeholder='Phone number (optional)'
               >
               </input>

               <label htmlFor="email"><b>Email</b></label>
               <input type='email'
                  value={userEmail}
                  onChange={({ target }) => { setUserEmail(target.value) }}
                  className='new-entry-input'
                  name="email"
                  placeholder='Email'
                  required
               >
               </input>

               <label htmlFor="password"><b>Password</b></label>
               <input type='password'
                  value={userPassword}
                  onChange={({ target }) => { setUserPassword(target.value) }}
                  className='new-entry-input'
                  name="password"
                  placeholder='Password'
                  required
               >
               </input>

               <label htmlFor="confirm-password"><b>Confirm Password</b></label>
               <input type='password'
                  value={userConfirmPassword}
                  onChange={({ target }) => { setUserConfirmPassword(target.value) }}
                  className='new-entry-input'
                  name="confirm-password"
                  placeholder='Confirm Password'
                  required
               >
               </input>

               <div className="message">
                  <p>{messageUser}</p>
               </div>

               <button type='submit' className='add-button'>Sign up</button>
            </form>
         </div>

      </div>
   )
}