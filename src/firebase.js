import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVcjeVjGeaM-o_5zBN52g7VVmZ1xus-tA",
  authDomain: "todo2-app-cp.firebaseapp.com",
  projectId: "todo2-app-cp",
  storageBucket: "todo2-app-cp.appspot.com",
  messagingSenderId: "397216616339",
  appId: "1:397216616339:web:fe24b06e1bc511326b6266",
  measurementId: "G-SZX4P85K9W",
});

const db = firebaseApp.firestore();

export default db;
