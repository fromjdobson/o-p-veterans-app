import React, {useState} from 'react'
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCYOX6Hlc8xNiCbhBbmcIrxmVsIJphSXfI",
    authDomain: "op-vet.firebaseapp.com",
    databaseURL: "https://op-vet.firebaseio.com",
    projectId: "op-vet",
    storageBucket: "op-vet.appspot.com",
    messagingSenderId: "105398634220",
    appId: "1:105398634220:web:d67b056df7efed322a87c9",
    measurementId: "G-KMQZ5R6T66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth()

const FBprovider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider()
// const LinkedInProvider = new firebase.auth.LinkedInProvider()
function Loginpage(){ 

    


    const initState = { 
        email: "", 
        password:"",
    }
    const initUserInfo = { 
        name: "",
        email: "" ,
        profilePicture: "" ,
        id:"",
        token: "" || localStorage.getItem("token")
    }
    const [toggle, setToggle] = useState(false)
    const [login, setLogin] = useState(initState)
    const [userInfo, setUserInfo] = useState(initUserInfo)

    function handleChange(e){ 
        const {name, value} = e.target
        setLogin((prev) => ({
            ...prev, 
            [name]: value
        }))
    }
        function handleSignup(email, password){ 
            auth.createUserWithEmailAndPassword(email, password)
                .catch(e => console.log(e.message))
            const user = firebase.auth().currentUser;
            user.sendEmailVerification()
            .then(() => {
            // Email sent.
            }).catch(function(error) {
            console.log(error)
            });

              firebase.auth().onAuthStateChanged(firebaseUser => { 
                if(firebaseUser){ 
                    console.log(firebaseUser)
                } else { 
                  console.log("failed to signup")
                }
              })
          }
    
          function signInWithFacebook(){ 
              firebase.auth().signInWithPopup(FBprovider)
                .then(res => { 
                    const {accessToken} = res.credential
                    localStorage.setItem("token", accessToken)
                    setUserInfo(prev => ({ 
                        ...prev,
                        name: res.user.displayName, 
                        email: res.user.email,
                        token: res.credential.accessToken

                    }))
                })
                .catch((error) => { 
                    let errorCode = error.code
                    let errorMessage = error.message
                    
                    console.log(errorCode, errorMessage)
                })
                
                console.log(userInfo)
                
          }

          function signInWithGoogle(){ 
              firebase.auth().signInWithPopup(googleProvider)
              .then(res => { 
                const {accessToken} = res.credential
                localStorage.setItem("token", accessToken)
                setUserInfo(prev => ({ 
                    ...prev,
                    name: res.user.displayName, 
                    email: res.user.email,
                    token: res.credential.accessToken

                }))
            })
                .catch(e => { 
                    let error = e.message
                    let errorCode = e.code
                    console.log(error, errorCode)
                })
          }
        function logout(){ 
            localStorage.removeItem("token")
            auth.signOut()
            setUserInfo(() => ({ 
                token: ""
            }))
        }

    return(
    <div>
        <h1>Create Account</h1>
        <p>to reserve your booth at VetFest</p>
        <p>Email</p>
            <input
                type = "text"
                value = {login.email}
                name = "email" 
                onChange = {handleChange}></input>

                <p>Password</p>
                <input
                type = "password"
                value = {login.password}
                name = "password" 
                onChange = {handleChange}></input>
                
                <p></p>
                <input 
                    type = "radio"
                    onClick = {() => setToggle((prev) => !prev)}>
                </input>
                <span>I have read and accept the Terms of Service and Privacy Policy</span>
                <p></p>
                {toggle ? <button onClick = {() => handleSignup(login.email, login.password)} disabled = {false}>Create an Account</button> : <button disabled = {true} >Create an Account</button>}
                <p>or use</p>
                {toggle ? <button onClick = {() => signInWithGoogle()}>Google</button> :  <button disabled = {true} onClick = {() => signInWithGoogle()}>Google</button>}
                {toggle ? <button onClick = {() => signInWithFacebook()}>FaceBook</button> : <button disabled = {true} onClick = {() => signInWithFacebook()}>FaceBook</button>}
               {userInfo.token ? <button onClick = {() => logout()}>Logout</button> : ""} 
                {/* <button onClick = {() => signInWithLinkedIn()}>LinkedIn</button> */}
    </div> 


    )
}


export default Loginpage