import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCc912ZTvsUEPzcZkKF0Up1EWRdDCcbl9w",
    authDomain: "users-dynamics.firebaseapp.com",
    projectId: "users-dynamics",
    storageBucket: "users-dynamics.appspot.com",
    messagingSenderId: "1048194787397",
    appId: "1:1048194787397:web:b679f784793bda15359b2c"
  });

const db = getFirestore();
console.log('Firebase Configurated');

export default db;
