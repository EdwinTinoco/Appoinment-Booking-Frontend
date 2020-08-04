import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Login extends Component {
   constructor(props) {
      super(props);

      this.state = {
         user: {},
         email: "",
         password: "",
         errorsMessage: {},
         errorBackendMessage: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({
         [event.target.name]: event.target.value
      });
   }

   handleSubmit() {
      event.preventDefault();

      if (this.validate()) {
         axios.post('http://localhost:5000/api/user/login',
            {
               users_email: this.state.email,
               users_password: this.state.password
            }
         ).then(response => {
            console.log('response', response.data)
            console.log('response', response.data["result"]["error"])

            if (response.data["result"]["error"] === "yes") {
               this.setState({
                  errorBackendMessage: response.data["result"]["message"]
               })
            } else {
               this.setState({
                  email: "",
                  password: "",
                  errorsMessage: {},
                  errorBackendMessage: ""
               })

               this.props.handleSuccessfulAuth();
            }
         }).catch(error => {
            console.log('handleSubmit error', error)
         })
      }
   }

   validate() {
      let errors = {};
      let isValid = true;

      if (!this.state.email) {
         isValid = false;
         errors["email"] = "Please enter your email.";
      }

      if (!this.state.password) {
         isValid = false;
         errors["password"] = "Please enter your password.";
      }

      this.setState({
         errorsMessage: errors
      })

      return isValid;
   }


   render() {
      return (
         <div className="login-main-wrapper">
            <div className="login-container">
               <div className="title">
                  <p>Log in to your account</p>
               </div>

               <div className="error-validation-message">
                  {this.state.errorValidationMessage}
               </div>

               <form onSubmit={this.handleSubmit} className="login-form">
                  <div className="form-group">
                     <label htmlFor="email"><b>Email address</b></label>
                     <input type='text'
                        value={this.state.email}
                        onChange={this.handleChange}
                        className='new-entry-input'
                        name="email"
                        placeholder='Email'
                     >
                     </input>
                     <div className="error-message">{this.state.errorsMessage.email}</div>
                  </div>

                  <div className="form-group">
                     <label htmlFor="password"><b>Password</b></label>
                     <input type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        className='new-entry-input'
                        name="password"
                        placeholder='Password'
                     >
                     </input>
                     <div className="error-message">{this.state.errorsMessage.password}</div>
                  </div>

                  <button className="btn" type="submit">Log In</button>
               </form>

               <div className="sign-up">
                  <Link to="/signup">Don't have an account? Sign up</Link>
               </div>
            </div>
         </div>
      );
   }
}