import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'react-materialize';
import firebaseApp from '../helpers/firebaseApp';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    firebaseApp.signout()
      .then(() => {
        global.location.href = '/';
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderLoggedIn() {
    const user = this.props.user;
    const isLogged = Object.keys(user).length !== 0;
    return isLogged ? (
      <ul className="right">
        <li>
          <div className="profile">
            <img src={user.photoURL} alt="Avatar" className="avatar" />
            <span>{user.email}</span>
          </div>
        </li>
        <li><a href="" onClick={this.handleLogout}><Icon>input</Icon></a></li>
      </ul>
    ) : null;
  }

  render() {
    console.log('Header.render', { props: this.props });


    return (
      <header>
        <nav className="teal">
          <div className="nav-wrapper">
            <Link to="/" style={{ fontSize: '1.4em' }}>Blog</Link>
            {this.renderLoggedIn()}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
