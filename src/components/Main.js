import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <div className="row">
        <Header />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
