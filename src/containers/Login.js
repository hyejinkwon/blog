import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div>
        Login Page <Link to="/post">Login</Link>
      </div>
    );
  }
}
export default Login;
