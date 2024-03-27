// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore}  from 'firebase/firestore'
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7s5momjjB_BYY25nk9N4Mf9Nz92iuKsE",
  authDomain: "ward-2b925.firebaseapp.com",
  projectId: "ward-2b925",
  storageBucket: "ward-2b925.appspot.com",
  messagingSenderId: "786342357032",
  appId: "1:786342357032:web:7c3c6890fa52283c71ad1d",
  measurementId: "G-0837BB86KM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
// const analytics = getAnalytics(app);

//Initialize Firestore
const db=getFirestore(app);
export {auth,app,db};