import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { initializeApp } from "firebase/app";
import LoginDetails from './LoginDetails';
import { onAuthStateChanged } from 'firebase/auth';

const LoginNumber = () => {
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGZZ9sRdYPeWE2QwJvidzQN1JF4Ycflag",
  authDomain: "repliq-55e05.firebaseapp.com",
  projectId: "repliq-55e05",
  storageBucket: "repliq-55e05.appspot.com",
  messagingSenderId: "242011341338",
  appId: "1:242011341338:web:2bc39fda02f59cb35a87a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const [user, setUser]=useState(null);
useEffect(()=>{
  const unRegister = onAuthStateChanged(firebase.auth(), currentuser=>{
    console.log(currentuser);
    setUser(currentuser)
  })
  return ()=>unRegister();
})

  return (
    <div className='violetColor py-10'>
      <h1 className='text-4xl mb-10 textColor text-center'>Register with Your Phone Number</h1>
 <LoginDetails auth={firebase.auth()}></LoginDetails>
    </div>
  );
};

export default LoginNumber;