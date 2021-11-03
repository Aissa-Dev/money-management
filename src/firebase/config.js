import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChCVy4L3ws1qi3-8DNpfCp9bkX5uBDDxQ",
  authDomain: "mymoney-8cf1e.firebaseapp.com",
  projectId: "mymoney-8cf1e",
  storageBucket: "mymoney-8cf1e.appspot.com",
  messagingSenderId: "909065785810",
  appId: "1:909065785810:web:5c40a856e83e55a9e6380b"
};

//init app
firebase.initializeApp(firebaseConfig);

//init services
export const projectFireStore = firebase.firestore();

export const projectAuth = firebase.auth();
