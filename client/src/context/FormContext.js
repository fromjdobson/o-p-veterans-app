import React, { useState } from 'react'
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

// Get a database reference to our posts






const couponCodes = ["opvet123", "test123", "cupon111"]

const auth = firebase.auth()

const FBprovider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const twitterProiver = new firebase.auth.TwitterAuthProvider()

const initState = { 
    token: null || localStorage.getItem("token"), 
    email: "" || localStorage.getItem("email"),
    displayName: "" || localStorage.getItem("displayName"), 
    phoneNumber: "" || localStorage.getItem("phoneNumber"), 
    id:"" || localStorage.getItem("id"), 
    companyName: "" || localStorage.getItem("companyName"),
    address:"" || localStorage.getItem("address"), 
    city: "" || localStorage.getItem("city"), 
    businessPhone: "" || localStorage.getItem("businessPhone"), 
    aptNumber: ""  || localStorage.getItem("aptNumber"), 
    state: "" || localStorage.getItem("state"), 
    zipCode: "" || localStorage.getItem("zipCode"), 
    businessWebsite:"" || localStorage.getItem("businessWebsite"), 
    veteranOwned: false || localStorage.getItem("veteranOwned"), 
    nonProfit: false || localStorage.getItem("nonProfit"), 
    qty: "" || localStorage.getItem("qty"), 
    value: "" || localStorage.getItem("value"), 
    needPower: false || localStorage.getItem("needPower"), 
    vendorSpace: "" || localStorage.getItem("vendorSpace"),
    firstName: "" || localStorage.getItem("firstName"), 
    lastName: "" || localStorage.getItem("lastName"), 
    loaded: false,
    coupon: ""
}

export const FormContext = React.createContext()


function FormProvider(props){ 
    
    const [userState, setUserState] = useState(initState)
    

    function handleChange(e){ 
        const {name, value} = e.target
        setUserState(prev => ({ 
            ...prev, 
            [name]: value
        }))
        localStorage.setItem([name], value)
    }

    function writeUserData(companyName, qty, value) {
        let userEmail = firebase.auth().currentUser.email
        let checkedNew = userEmail.split('.').join("");
        const itemsRef = firebase.database().ref('users/' + checkedNew);
        const item = { 
            username: companyName,
            qty: qty, 
            value: value,
      }
      itemsRef.push(item);
    }

    function checkCoupon(coupon){ 
        if(couponCodes.includes(coupon)){ 
            setUserState((prev) => ({ 
                ...prev, 
                qty: 0, 
            }))
            alert("coupon code accepted")
        } else { 
        alert("coupon code is invalid")
        }
    }

      

    function handleSubmit(value){ 
        setUserState((prev => ({ 
            ...prev, 
            value: value
        })))
        localStorage.setItem("value", value)
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
          
          function handleLogin(email, password){ 
            auth.signInWithEmailAndPassword(email, password)
                .catch(e => { 
                    console.log(e.message)
                })
          }
          function signInWithFacebook(){ 
              firebase.auth().signInWithPopup(FBprovider)
                .then(res => { 
                    const {accessToken} = res.credential
                    localStorage.setItem("token", accessToken)
                    localStorage.setItem("displayName", res.user.displayName)
                    setUserState(prev => ({ 
                        ...prev,
                        displayName: res.user.displayName, 
                        email: res.user.email,
                        token: res.credential.accessToken

                    }))
                })
                .catch((error) => { 
                    let errorCode = error.code
                    let errorMessage = error.message
                    
                    console.log(errorCode, errorMessage)
                })
                
                
                
          }

          function signInWithGoogle(){ 
              firebase.auth().signInWithPopup(googleProvider)
              .then(res => { 
                const {accessToken} = res.credential
                localStorage.setItem("token", accessToken)
                setUserState(prev => ({ 
                    ...prev,
                    displayName: res.user.displayName, 
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
            localStorage.clear()
            auth.signOut()
            setUserState(() => ({ 
                token: "",
            }))
        }


    return( 
        <FormContext.Provider value = {{
            ...userState,
            handleChange, 
            handleSignup, 
            signInWithFacebook, 
            signInWithGoogle, 
            handleLogin,
            logout,
            handleSubmit,
            writeUserData,
            checkCoupon,

        }}>
            {props.children}
        </FormContext.Provider>
    
    )
}

export default FormProvider