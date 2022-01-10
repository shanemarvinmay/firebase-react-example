import './App.css';
import BasicTabs from './components/BasicTabs';
import React from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import * as _auth from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, getRedirectResult, signInWithRedirect } from "firebase/auth";
import WaterGraph from './components/WaterGraph';
/**
 * for(const property in _auth) {
 * console.log(property);
 * console.log(_auth[property]);
 * }
 * GoogleAuthProvider
 * createUserWithEmailAndPassword
 * getAuth
 * getAuth
 * signInWithCredential
 * signInWithEmailAndPassword
 * signInWithPopup
 * signOut
 * updateCurrentUser
 * updateEmail
 * updatePassword
 * updateProfile
 */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaA1KhZ7My_GjTKu8Y5w8kXWkJp-JcMx4",
  authDomain: "fir-react-example-2e0bd.firebaseapp.com",
  databaseURL: "https://fir-react-example-2e0bd-default-rtdb.firebaseio.com",
  projectId: "fir-react-example-2e0bd",
  storageBucket: "fir-react-example-2e0bd.appspot.com",
  messagingSenderId: "430654554689",
  appId: "1:430654554689:web:dc4bc38c26132bccc8fcc0",
  measurementId: "G-45SY204FXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log("\n ~~~~~~~~~~~~~~ \n");
for (const attr in auth) {
  console.log(attr);
  console.log(auth[attr]);
}
console.log("\n ~~~~~~~~~~~~~~ \n");
const user = auth['currentUser'];
const provider = new GoogleAuthProvider();
let email = 'shanemarvinmay@icloud.com';
let password = 'password';
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // user unqiue id is under userCredential.user.uid 
//     console.log('user');
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log('errorCode');
//     console.log(errorCode);
//     console.log('errorMessage');
//     console.log(errorMessage);
//   });
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log('user');
//     console.log(user);
//     console.log(user.uid);
//     setDisplayNameAndImage();
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// const setDisplayNameAndImage = () => {
//   updateProfile(auth.currentUser, {
//     displayName: "Shane May", photoURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e33d03b6-10dd-4843-b186-2db5042ba5f3/dekhsoj-bec740c2-7ea7-4053-abff-a1af4643e5f9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UzM2QwM2I2LTEwZGQtNDg0My1iMTg2LTJkYjUwNDJiYTVmM1wvZGVraHNvai1iZWM3NDBjMi03ZWE3LTQwNTMtYWJmZi1hMWFmNDY0M2U1ZjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l9WGGn-2Cpoqs8fgWR9ODKuSCClFLZbudmPTYsi3Ujk"
//   }).then(() => {
//     console.log(auth.currentUser);
//   }).catch((error) => {
//     console.log(error);
//   });
// };
// sign in with google
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const _user = result.user;
    console.log('_user');
    console.log(_user);
    console.log("auth['currentUser']");
console.log(auth['currentUser']);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log('errorCode');
    console.log(errorCode);
    console.log('errorMessage');
    console.log(errorMessage);
  });
/**
 * Google sign in without popup
 * Constant redirect issue!
 */
// if (user == null) {
//   signInWithRedirect(auth, provider);
//   getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const _user = result.user;
//     user = _user;
//     console.log('user');
//     console.log(_user);
//     throw new Error('stop please');
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     console.log('errorCode');
//     console.log(errorCode);
//     console.log('errorMessage');
//     console.log(errorMessage);
//   });
// }
console.log('user');
console.log(user);
console.log("auth['currentUser']");
console.log(auth['currentUser']);

function App() {
  console.log('app');
  console.log(app);
  return (
    <div>
      <BasicTabs />
      <WaterGraph />
    </div>
  );
}

export default App;
