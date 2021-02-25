import firebase from 'firebase/app';
import 'firebase/firestore'

const APIKEY = process.env.REACT_APP_FIREBASE_APIKEY
const APIID = process.env.REACT_APP_FIREBASE_APIID
const MESSAGESENDERID = process.env.REACT_APP_FIREBASE_MESSAGINSENDERID

const app = firebase.initializeApp({
    apiKey: APIKEY,
    authDomain: "myvintageecommerce.firebaseapp.com",
    projectId: "myvintageecommerce",
    storageBucket: "myvintageecommerce.appspot.com",
    messagingSenderId: MESSAGESENDERID,
    appId: APIID
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}