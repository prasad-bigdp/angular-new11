// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDsmU0P65DmTr5tJD4KDUcRzY2sFv-a5GU',
  authDomain: 'ang-ecommerce-9fcbc.firebaseapp.com',
  projectId: 'ang-ecommerce-9fcbc',
  storageBucket: 'ang-ecommerce-9fcbc.appspot.com',
  messagingSenderId: '826316916693',
  appId: '1:826316916693:web:f917c157c4cd9b569a9f5c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { GoogleAuthProvider } from 'firebase/auth';

export const provider = new GoogleAuthProvider();

export const API_URL = 'https://dummyjson.com/products';