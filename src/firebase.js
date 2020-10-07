import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBudh20-MO_8d6knva-TnUFpY82WcpRl-Y",
    authDomain: "instagram-clone-react-a11f4.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-a11f4.firebaseio.com",
    projectId: "instagram-clone-react-a11f4",
    storageBucket: "instagram-clone-react-a11f4.appspot.com",
    messagingSenderId: "1012438850428",
    appId: "1:1012438850428:web:5377b5eb84524f6cf262f9",
    measurementId: "G-G07NE5806X"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };