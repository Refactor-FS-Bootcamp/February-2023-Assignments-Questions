import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDrx-UCuSKPA19RZudiEdfnU1VOhMAhtSY",
    authDomain: "drive-clone-856a2.firebaseapp.com",
    projectId: "drive-clone-856a2",
    storageBucket: "drive-clone-856a2.appspot.com",
    messagingSenderId: "254910545636",
    appId: "1:254910545636:web:bd97f6121cc2a5401eb6f1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }