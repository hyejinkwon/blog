import React, { Component } from 'react';
import Login from '../containers/Login';
import Header from './Header';
import Footer from './Footer';
// import '../../assets/css/main.css';
import firebaseApp from '../helpers/firebaseApp';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.handleLoginCompleted = this.handleLoginCompleted.bind(this);
    firebaseApp.initialize();
  }

  handleLoginCompleted(obj) {
    this.setState({ user: obj.user });
    if (obj.user) {
      this.props.history.push('/post');
    }
  }

  render() {
    return (
      <div className="row">
        <Header user={this.state.user} />
        <main className="container">
          {
            React.Children.map(this.props.children, (child) => {
              if (child.type === Login) {
                return React.cloneElement(child, {
                  handleLoginCompleted: this.handleLoginCompleted
                });
              }
              return child;
            })
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
