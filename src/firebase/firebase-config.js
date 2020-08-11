import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyANaBOFV3_jHCDz0bstggBdqUgW87N2_1E",
    authDomain: "react-app-course-88936.firebaseapp.com",
    databaseURL: "https://react-app-course-88936.firebaseio.com",
    projectId: "react-app-course-88936",
    storageBucket: "react-app-course-88936.appspot.com",
    messagingSenderId: "541859156012",
    appId: "1:541859156012:web:e76773b2fcfabc68354189",
    measurementId: "G-911QJ4GSSE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }