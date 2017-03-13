import React, { Component } from 'react';
import firebaseApp from '../helpers/firebaseApp';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    firebaseApp.isAuthenticated()
      .then((user) => {
        this.props.handleLoginCompleted({ user });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log('Login.componentWillReceiveProps', nextProps);
    firebaseApp.isAuthenticated()
      .then((user) => {
        this.props.handleLoginCompleted({ user });
      })
      .catch((err) => {
        console.error(err);
      });
  }


  handleLogin(event) {
    event.preventDefault();
    firebaseApp.googleAuth()
      .then((token) => {
        global.localStorage.setItem('token', token);
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    console.log('Login.render', { state: this.state, props: this.props });
    return (
      <div className="login">
        <h2>Welcome, Blog!</h2>
        <button onClick={this.handleLogin} className="social">
          <i className="google-plus" />
          <span>Login in with Google</span>
        </button>
      </div>
    );
  }
}
export default Login;
