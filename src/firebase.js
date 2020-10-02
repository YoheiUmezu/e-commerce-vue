import firebase from 'firebase/app'
import 'firebase/firestore'
import  'firebase/auth'

const config = {
    apiKey: "AIzaSyBYlIdrRWWIe-2c4JKuJunN5rG494w4hIM",
    authDomain: "e-commerce-327de.firebaseapp.com",
    databaseURL: "https://e-commerce-327de.firebaseio.com",
    projectId: "e-commerce-327de",
    storageBucket: "e-commerce-327de.appspot.com",
    messagingSenderId: "761736609739",
    appId: "1:761736609739:web:b706c1e1a1acb80549804e"
}

firebase.initializeApp(config)
const db = firebase.firestore()

export const firebaseAuth = firebase.auth()

export const dbMenuRef = db.collection('menu')