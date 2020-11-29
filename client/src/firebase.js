import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAsubucpcUHO4m-8hdrDsSaYlC_UFccT18",
    authDomain: "opveteran-development.firebaseapp.com",
    databaseURL: "https://opveteran-development.firebaseio.com",
    projectId: "opveteran-development",
    storageBucket: "opveteran-development.appspot.com",
    messagingSenderId: "1061917164987",
    appId: "1:1061917164987:web:244a16d940c00ca9daf09e"
}

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()

export default firebase