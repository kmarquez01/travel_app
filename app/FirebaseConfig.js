// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBTUHB5TBnZgIG753ob-E3Jlq-vEwyWSR0",
  authDomain: "ottera-3c093.firebaseapp.com",
  projectId: "ottera-3c093",
  storageBucket: "ottera-3c093.appspot.com",
  messagingSenderId: "361327212421",
  appId: "1:361327212421:web:0690b431c12aa587b776ec",
  measurementId: "G-STPMCGQLEM"
});

export const auth = initializeAuth(firebaseConfig, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firebase
// export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(auth)
// const analytics = getAnalytics(firebaseConfig);