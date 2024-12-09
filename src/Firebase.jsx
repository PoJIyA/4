import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDB72U7zLfKCFCjc0N9hTsSsftDM0EIPk",
    authDomain: "x-clone-e360c.firebaseapp.com",
    projectId: "x-clone-e360c",
    storageBucket: "x-clone-e360c.firebasestorage.app",
    messagingSenderId: "562842887190",
    appId: "1:562842887190:web:4ebaa912493acdcbb1c137",
    measurementId: "G-XXKXTX3WQ7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;