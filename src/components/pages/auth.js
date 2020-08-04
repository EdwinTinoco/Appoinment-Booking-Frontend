import React, { Component } from 'react';

import Login from "../auth/login";

export default class Auth extends Component {
   constructor(props) {
      super(props);

      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
   }

   handleSuccessfulAuth() {
      this.props.history.push("/user/schedule");
   }

   render() {
      return (
         <div className="auth-page-wrapper">
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
         </div>
      );
   }
}