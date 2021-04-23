import firebase from 'firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAbOsPvD2smwdh0KBGSBF_YROaNNASrqZw",
    authDomain: "ecommerce-coder-a5f26.firebaseapp.com",
    projectId: "ecommerce-coder-a5f26",
    storageBucket: "ecommerce-coder-a5f26.appspot.com",
    messagingSenderId: "236762495441",
    appId: "1:236762495441:web:da77e0c91edd725b9d08f0"
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app)
}