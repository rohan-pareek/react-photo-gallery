import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import config from '../config.js';

var firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const fireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { storage, fireStore, timestamp };