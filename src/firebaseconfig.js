import firebase from 'firebase'
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB71NxRLiT52aFclj61e--_IFTo60oScLY",
    authDomain: "asdasd-b9eba.firebaseapp.com",
    databaseURL: "https://asdasd-b9eba.firebaseio.com",
    projectId: "asdasd-b9eba",
    storageBucket: "asdasd-b9eba.appspot.com",
    messagingSenderId: "522653469871",
    appId: "1:522653469871:web:e57417a60c2ae122cfd85a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  export { db }