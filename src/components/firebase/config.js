import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrOPbOEerY1R9K4XdOaApffwxLBIMhs1g",
  authDomain: "react-d2186.firebaseapp.com",
  databaseURL: "https://react-d2186-default-rtdb.firebaseio.com",
  projectId: "react-d2186",
  storageBucket: "react-d2186.appspot.com",
  messagingSenderId: "387905155266",
  appId: "1:387905155266:web:7763be8e93958915894b5b"
};

firebase.initializeApp(firebaseConfig)
//init services
const projFirestore = firebase.firestore()
export {projFirestore}