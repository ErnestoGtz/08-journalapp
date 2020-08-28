import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey:process.env.REACT_APP_APIKEY,
    authDomain:process.env.REACT_APP_AUTHDOMAIN,
    databaseURL:process.env.REACT_APP_DATABASEURL,
    projectId:process.env.REACT_APP_PROJECTID, 
    storageBucket:process.env.REACT_APP_STORAGEBUCKET, 
    messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID, 
    appId:process.env.REACT_APP_APPID, 
    measurementId:process.env.REACT_APP_MEASUREMENTID 
  };

  // const firebaseConfigTesting = {
  //   apiKey: "AIzaSyCOm2AclkPR3X1N2C0mcEpF9Z_SDU7CLOk",
  //   authDomain: "primerproyecto-ce09b.firebaseapp.com",
  //   databaseURL: "https://primerproyecto-ce09b.firebaseio.com",
  //   projectId: "primerproyecto-ce09b",
  //   storageBucket: "primerproyecto-ce09b.appspot.com",
  //   messagingSenderId: "699301265179",
  //   appId: "1:699301265179:web:b49f3ebc67a7d7180d5dbe",
  //   measurementId: "G-SSPN0593LB"
  // };
  
  // if(process.env.NODE_ENV === 'test' ){
  //   firebase.initializeApp(firebaseConfigTesting);
  // } else {
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  // }
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }