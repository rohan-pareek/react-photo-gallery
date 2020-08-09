import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import config from '../config.js';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId
  };

  console.log('firebaseConfig', firebaseConfig)

  var firebaseConfig2 = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  console.log('firebaseConfig2', firebaseConfig2)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const fireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { storage, fireStore, timestamp };