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

  firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
  db.collection("cities").where("state", "==", "CA")
  .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
          if (change.type === "added") {
              console.log("New city: ", change.doc.data());
          }

          var source = snapshot.metadata.fromCache ? "local cache" : "server";
          console.log("Data came from " + source);
      });
  });