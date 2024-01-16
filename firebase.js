
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyAgmTs3Rt26sOxWQYBDRS2ACW6SmygnifA",
  authDomain: "adminmanagementt.firebaseapp.com",
  projectId: "adminmanagementt",
  storageBucket: "adminmanagementt.appspot.com",
  messagingSenderId: "491949801480",
  appId: "1:491949801480:web:2c70fd640b2aae159951bd",
  measurementId: "G-46MKQF1Y3D"
};



export const FIREBASE_APP = initializeApp(firebaseConfig);

export const auth = initializeAuth(FIREBASE_APP, {  
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)       
});

export const FIRESTORE_DB =  getFirestore(FIREBASE_APP);
