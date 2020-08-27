import React, { Component } from "react"
import axios from "axios"

import Image7 from '../../../static/assets/images/images/image-7.jpg'

export default class Register extends Component {
   constructor(props) {
      super(props);

      this.state = {
         firstName: "",
         lastName: "",
         phone: "",
         email: "",
         password: "",
         confirmPassword: "",
         // errorsMessage: {},
         backendErrorMessages: ""
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmitRegisterNewUser = this.handleSubmitRegisterNewUser.bind(this)
   }

   handleChange(event) {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   handleSubmitRegisterNewUser() {
      event.preventDefault();

      // if (this.validate()) {
      // console.log(this.state.errorsMessage);

      axios.post('http://localhost:5000/api/user/register',
         {
            users_first_name: this.state.firstName,
            users_last_name: this.state.lastName,
            users_phone: parseInt(this.state.phone),
            users_email: this.state.email,
            users_password: this.state.password,
            users_confirm_password: this.state.confirmPassword
         })
         .then(response => {
            console.log('response register user', response.data);

            if (response.data["error"] === "no") {
               console.log('error no', response.data.error);

               this.setState({
                  firstName: "",
                  lastName: "",
                  phone: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  backendErrorMessages: 'Your account was created succesfully!'
               })
            } else {
               this.setState({
                  backendErrorMessages: response.data['errorMessage']
               })
            }
         })
         .catch(error => {
            console.log('handleSubmitRegisterNewUser error', error);

         })
      // }
   }

   // validate() {
   //    let errors = {};
   //    let isValid = true;

   //    if (!this.state.firstName) {
   //       isValid = false;
   //       errors["firstName"] = "Please enter your first name.";
   //    }

   //    if (!this.state.lastName) {
   //       isValid = false;
   //       errors["lastName"] = "Please enter your last name.";
   //    }

   //    if (!this.state.phone) {
   //       isValid = false;
   //       errors["phone"] = "Please enter your phone.";
   //    }

   //    if (!this.state.email) {
   //       isValid = false;
   //       errors["email"] = "Please enter your email.";
   //    }

   //    if (typeof this.state.email !== "undefined") {
   //       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

   //       if (!pattern.test(this.state.email)) {
   //          isValid = false;
   //          errors["email"] = "Please enter valid email address.";
   //       }
   //    }

   //    if (!this.state.password) {
   //       isValid = false;
   //       errors["password"] = "Please enter your password.";
   //    }

   //    if (!this.state.confirmPassword) {
   //       isValid = false;
   //       errors["confirmPassword"] = "Please enter your confirm password.";
   //    }

   //    if (typeof this.state.password !== "undefined" && typeof this.state.confirmPassword !== "undefined") {

   //       if (this.state.password != this.state.confirmPassword) {
   //          isValid = false;
   //          errors["password"] = "Passwords don't match.";
   //       }
   //    }

   //    this.setState({
   //       errorsMessage: errors
   //    })

   //    return isValid;
   // }



   render() {
      return (
         <div className="signup-main-wrapper">
            <div className="left-column">
               <div className="logo">
                  <img src={Image7} alt='image-7' />
               </div>
            </div>

            <div className="right-column">
               <p>Sign up</p>

               <p>{this.state.backendErrorMessages}</p>

               <form onSubmit={this.handleSubmitRegisterNewUser} className="signup-form">
                  <div className="form-group">
                     <label htmlFor="firstName"><b>*First Name</b></label>
                     <input type='text'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        className='new-entry-input'
                        name="firstName"
                        placeholder='First Name'
                     >
                     </input>
                     {/* <div className="error-message">{this.state.errorsMessage.firstName}</div> */}
                  </div>

                  <div className="form-group">
                     <label htmlFor="lastName"><b>*Last Name</b></label>
                     <input type='text'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        className='new-entry-input'
                        name="lastName"
                        placeholder='Last Name'
                     >
                     </input>
                     {/* <div className="error-message">{this.state.errorsMessage.lastName}</div> */}
                  </div>

                  <div className="form-group">
                     <label htmlFor="phone"><b>*Phone</b></label>
                     <input type='text'
                        value={this.state.phone}
                        onChange={this.handleChange}
                        className='new-entry-input'
                        name="phone"
                        placeholder='Phone number'
                     >
                     </input>
                     {/* <div className="error-message">{this.state.errorsMessage.phone}</div> */}
                  </div>

                  <div className="form-group">
                     <label htmlFor="email"><b>*Email</b></label>
                     <input type='text'
                        value={this.state.email}
                        onChange={this.handleChange}
                        className='new-entry-input'
                        name="email"
                        placeholder='Email'
                     >
                     </input>
                     {/* <div className="error-message">{this.state.errorsMessage.email}</div> */}
                  </div>

                  <div className="form-group">
                     <label htmlFor="password"><b>*Password</b></label>
                     <input type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        className='new-entry-input'
                        name="password"
                        placeholder='Password'
                     >
                     </input>
                     {/* <div className="error-message">{this.state.errorsMessage.password}</div> */}
                  </div>

                  <div className="form-group">
                     <label htmlFor="confirmPassword"><b>*Confirm Password</b></label>
                     <input type='password'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        className='new-entry-input'
                        name="confirmPassword"
                        placeholder='Confirm Password'
                     >
                     </input>
                     {/* <div className="error-message">{this.state.errorsMessage.confirmPassword}</div> */}
                  </div>

                  <button type='submit' className='add-button'>Sign up</button>

                  <p className="required">*Required</p>
               </form>
            </div>

         </div>
      )
   }
}