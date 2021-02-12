import firebase from 'firebase/app';
import 'firebase/firestore'


const app = firebase.initializeApp({
    apiKey: "AIzaSyCIxT10-HQIGcyjFcsu7nhtx2Bp32Fzudg",
    authDomain: "myvintageecommerce.firebaseapp.com",
    projectId: "myvintageecommerce",
    storageBucket: "myvintageecommerce.appspot.com",
    messagingSenderId: "771744888163",
    appId: "1:771744888163:web:f9b068143acda40bf34f56"
})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}