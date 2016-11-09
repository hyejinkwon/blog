import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="teal">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">blog</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/"><Icon>search</Icon></Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
