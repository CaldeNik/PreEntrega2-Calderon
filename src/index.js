import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9GowKgyTfRJkWA1Fle9TRxjVHrWRGU5M",
  authDomain: "store-caldenik-coder.firebaseapp.com",
  projectId: "store-caldenik-coder",
  storageBucket: "store-caldenik-coder.appspot.com",
  messagingSenderId: "656144197075",
  appId: "1:656144197075:web:a7642c9c71a2401ceb3b26"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


