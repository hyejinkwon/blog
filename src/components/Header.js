import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="teal lighten-1">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><img src="../../public/favicon.ico"/></Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/add">Add post</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
