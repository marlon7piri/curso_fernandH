// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {collection, getFirestore} from 'firebase/firestore';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5lpO8TFLmyCAAYWzvlysxePCPaWwZ5Sc',
  authDomain: 'coffestore-c8b6b.firebaseapp.com',
  projectId: 'coffestore-c8b6b',
  storageBucket: 'coffestore-c8b6b.appspot.com',
  messagingSenderId: '579027249626',
  appId: '1:579027249626:web:7c2be842dd8fa86e8c78e3',
  measurementId: 'G-P58QTL86JC',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase
const auth = getAuth(app);
const storage = getStorage(app);

export {db, app, collection, auth, storage};
