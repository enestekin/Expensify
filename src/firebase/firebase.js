import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD8ezwz8V3lMMAet6cDYUd0dAGq9rnSl9w",
  authDomain: "expesify-1c889.firebaseapp.com",
  databaseURL: "https://expesify-1c889-default-rtdb.firebaseio.com",
  projectId: "expesify-1c889",
  storageBucket: "expesify-1c889.appspot.com",
  messagingSenderId: "1004437711805",
  appId: "1:1004437711805:web:797e97a13b3ac0543940d4"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };