import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class Login extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: "",
         password: "",
         errorMessageBackend: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({
         [event.target.name]: event.target.value,
         errorsMessage: {},
         errorMessageBackend: ""
      });
   }

   handleSubmit() {
      event.preventDefault();

      axios.post('http://localhost:5000/api/user/login',
         {
            users_email: this.state.email,
            users_password: this.state.password
         }
      ).then(response => {
         console.log('response login', response.data);

         if (response.data["error"] === "no") {
            this.setState({
               email: "",
               password: "",
               errorsMessage: {},
               errorMessageBackend: "Login succesfully!"
            })

            this.props.handleSuccessfulAuth();
         } else {
            this.setState({
               errorMessageBackend: response.data["errorMessage"]
            })
         }
      }).catch(error => {
         console.log('handleSubmit error', error)
      })
   }


   render() {
      return (
         <div className="login-main-wrapper">
            <div className="login-container">
               <div className="title">
                  <p>Log in to your account</p>
               </div>

               <div className="error-message_backend">
                  {this.state.errorMessageBackend}
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