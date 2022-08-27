

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjupfZIGSWqZxkHI9FoB3xGdLemvx-yd8",
  authDomain: "toggl-auth.firebaseapp.com",
  projectId: "toggl-auth",
  storageBucket: "toggl-auth.appspot.com",
  messagingSenderId: "24338489866",
  appId: "1:24338489866:web:943d8d0b2459d38fbcb5f3",
  measurementId: "G-J7Z98TX69K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export  {app, auth} ;