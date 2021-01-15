import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyALLj4Vawgm_IVkaOWnpDBrzVxHP8yUhKI",
    authDomain: "vet-fest-registration.firebaseapp.com",
    databaseURL: "https://vet-fest-registration-default-rtdb.firebaseio.com",
    projectId: "vet-fest-registration",
    storageBucket: "vet-fest-registration.appspot.com",
    messagingSenderId: "795896388113",
    appId: "1:795896388113:web:fabbfde06c69c1ea082fb0"
  };

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()

export default firebase