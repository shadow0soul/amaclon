// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDYaP0A7ahgRWtWyvCtZIk0kFALuTC9Vik",
    authDomain: "amaclon-4217a.firebaseapp.com",
    projectId: "amaclon-4217a",
    storageBucket: "amaclon-4217a.appspot.com",
    messagingSenderId: "94814481591",
    appId: "1:94814481591:web:7e7a2c2579c796a0ed7132",
    measurementId: "G-KL2LLG8CD9"
  };

  const firbaseApp = firebase.initializeApp(firebaseConfig);

  const db = firbaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};