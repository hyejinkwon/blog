import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDikNfwZ4lb7VaB6wETRBvQPFu-FLF2SFs',
  authDomain: 'blog-394a1.firebaseapp.com',
  databaseURL: 'https://blog-394a1.firebaseio.com',
  storageBucket: 'blog-394a1.appspot.com',
  messagingSenderId: '651115054325'
};

class FirebaseApp {
  constructor() {
    this.firebaseApp = null;
    this.auth = null;
    this.provider = null;
  }

  initialize() {
    this.firebaseApp = firebase.initializeApp(config);
    this.auth = this.firebaseApp.auth();
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  isAuthenticated() {
    const auth = this.auth;
    return new Promise((resolve, reject) => (
        auth.onAuthStateChanged((user) => {
          if (user) {
            resolve(user);
          }
        }, (error) => {
          reject(error);
        })
    ));
  }

  getUser() {
    return this.auth.currentUser;
  }

  signout() {
    return new Promise((resolve, reject) => (
      this.auth.signOut()
        .then(() => resolve(), error => reject(error))
    ));
  }

  googleAuth() {
    const auth = this.auth;
    this.auth.signInWithRedirect(this.provider);

    return new Promise((resolve, reject) => (
      auth.getRedirectResult()
        .then((result) => {
          if (result.credential) {
            const token = result.credential.accessToken;
            resolve(token);
          }
        })
        .catch((err) => {
          reject(err);
        })
    ));
  }
}

const firebaseApp = new FirebaseApp();
export default firebaseApp;
