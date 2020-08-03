import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Login extends Component {
   constructor(props) {
      super(props);

      this.state = {
         user: {},
         email: "",
         password: "",
         errorMessage: ""
      };

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({
         [event.target.name]: event.target.value,
         errorMessage: ""
      });
   }


   render() {
      return (
         <div className="login-main-wrapper">
            <div className="login-container">
               <div className="title">
                  <p>Log in to your account</p>
               </div>

               <div className="error-message">
                  {this.state.errorMessage}
               </div>

               <form onSubmit={this.handleSubmit} className="login-form">
                  <div className="form-group">
                     <label htmlFor="email"><b>Email address</b></label>

                     <div className="inputs">
                        <input
                           type="email"
                           name="email"
                           placeholder="Email address"
                           value={this.state.email}
                           onChange={this.handleChange}
                        />
                     </div>
                  </div>

                  <div className="form-group">
                     <label htmlFor="password"><b>Password</b></label>

                     <div className="inputs">
                        <input
                           type="password"
                           name="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={this.handleChange}
                        />
                     </div>
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