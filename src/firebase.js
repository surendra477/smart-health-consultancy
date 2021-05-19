import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCBR-3A_qo3e-M0wsomUlthZw6OysBzZ10",
    authDomain: "smart-health-consultancy-6d140.firebaseapp.com",
    projectId: "smart-health-consultancy-6d140",
    storageBucket: "smart-health-consultancy-6d140.appspot.com",
    messagingSenderId: "588230149072",
    appId: "1:588230149072:web:400dbff805980663d9afd5",
    measurementId: "G-NTX7SVEE57"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export {auth,provider } ;
