import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpEciA-m3ta-3eyds0RkNSzw0qm_7-TvM',
  authDomain: 'house-marketplace-277d2.firebaseapp.com',
  projectId: 'house-marketplace-277d2',
  storageBucket: 'house-marketplace-277d2.appspot.com',
  messagingSenderId: '1072530568616',
  appId: '1:1072530568616:web:aa51289faf5bc16cb6199d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
