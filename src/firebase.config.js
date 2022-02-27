import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwdSxnICdNhaqHceYW3RsIDW97ny1uZUo',
  authDomain: 'house-marketplace-app-64db5.firebaseapp.com',
  projectId: 'house-marketplace-app-64db5',
  storageBucket: 'house-marketplace-app-64db5.appspot.com',
  messagingSenderId: '887302108295',
  appId: '1:887302108295:web:cfa13b8a65fe8a44bf7422',
};
// eslint-disable-next-line react-hooks/exhaustive-deps

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
