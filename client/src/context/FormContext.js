import React, { useState, useEffect} from 'react'
import firebase from 'firebase'
import { useHistory } from "react-router-dom"




const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
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
const whiteBooths = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "B1", "B2", "B3", 
"B4", "B5", 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20', 'B21', 'C1', 'C2', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13'
,'C14', 'C20', 'C21', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'G6', 'G7', 'G8', 'G9','G10','G11','G12','G13','G14','G15','G16'
,'G17','G18', 'G19', 'G20','G21', 'H1','H2','H3','H4','H5', 'H6','H7','H8','H9','H10','H11','H12','H13','H14','H15','H16','H17','H18','H19','H20','H21','I1','I2','I3','I4','I5','I6','I7','I15','I16','I17','I18','I19','I20','I21','I22','I23'
,'I24', 'I25', 'I26', 'I27','I28', 'J1','J2','J3','J4','J5','J6','J7','J8','K1','K2','K3','K4','K5','K6','K7','L1','L2','L3','L4','L5','L6','L7','M1','M2','M3','M4','M5','M6','M7','M8']
const yellowBooths =  ['C3','C4','C5','C6','C7', 'C15', 'C16', 'C17', 'C18','C19',
'F1','F2', 'F3','F4','F5','G1','G2','G3','G4','G5','I8','I9','I10','I11','I12','I13','I14']
const pinkWhite = ['D1','D2','D8', 'D9','D10','D11','D12','D13','D14', 'E1','E2','E3','E4','E5','E6','E7','E8','E9','E10'
,'E11','E12','E13','E14']
const pinkYellow = ['D3', 'D4', 'D5', 'D6','D7']
const blueWhite = ['D20','D21',"E15", "E16", "E17", "E18", "E19", "E20", "E21", "E22", "E23", 'E24', 'E25','E26','E27','E28']
const blueYellow = ['D15','D16','D17','D18','D19']

const FBprovider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider()


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
    veteranOwned: false , 
    nonProfit: false || localStorage.getItem("nonProfit"), 
    qty: "" || localStorage.getItem("qty"), 
    value: "" || localStorage.getItem("value"), 
    needPower: false, 
    vendorSpace: "" || localStorage.getItem("vendorSpace"),
    firstName: "" || localStorage.getItem("firstName"), 
    lastName: "" || localStorage.getItem("lastName"), 
    loaded: false,
    coupon: "", 
    hasPayed: false || localStorage.getItem("hasPayed"),
    boothSelected: "" || localStorage.getItem("boothSelected")
   
    
}

export const FormContext = React.createContext()


function FormProvider(props){ 
    const history = useHistory()
    
    const [userState, setUserState] = useState(initState)
    const [boothState, setBoothState] = useState({})
    const [availableBooths, setAvailableBooths] = useState({})
    const [userBoothState, setUserBoothState] = useState({})
    const [errorMessage, setErrorMessage] = useState({errorMessage: ""})
    
    // useEffect(() => { 
    //     getBooths()
    // }, [])
    function handleChange(e){ 
        const {name, value} = e.target
        setUserState(prev => ({ 
            ...prev, 
            [name]: value
        }))
        localStorage.setItem([name], value)
    }

    function writeUserData() {
        // let boothRef = firebase.database().ref('booths/')
        let userEmail = firebase.auth().currentUser.email
        let checkedNew = userEmail.split('.').join("");
        const itemsRef = firebase.database().ref('users/' + checkedNew);
        
        const item = { 
            ...userState
        }
    //     const boothRef = firebase.database().ref('booths/')
    //   const booths = { 
    //     booths: whiteBooths.concat( yellowBooths, pinkWhite, pinkYellow, blueWhite, blueYellow)
    // }
    //     boothRef.set(booths)
        itemsRef.set(item);
    }

    function getBooths(){ 
        let boothRef = firebase.database().ref('booths/')
        boothRef.once('value', function(snapshot){ 
            snapshot.forEach(function(childSnapshot){ 
                let booths1 = childSnapshot.val()
                console.log(booths1)
                let lowestSponsor = pinkWhite.concat(pinkYellow, blueYellow, blueWhite)
                let middleLevelSponsor = blueYellow.concat(blueWhite)
                let {value} = userState
                let displayArray = value < 2500 ? booths1?.filter(function(item){  
                    return !lowestSponsor.includes(item) }
                ) : value >= 2500 && value < 5000 ? booths1?.filter(function(item){ 
                    return !middleLevelSponsor.includes(item)}
                ) : booths1
                // const booths = { 
                //    displayArray
                // }
                // boothRef.set(booths)
                setAvailableBooths((prev) => ({  
                    ...prev,
                    booths: displayArray
                }))
                
            })
        })
        
        getUsersBoothSelection()
    }

    function getUsersBoothSelection(){ 
        let userRef = firebase.database().ref('users/')
            userRef.on('value', function(snapshot){ 
                snapshot.forEach(function(childSnapshot){ 
                    console.log(childSnapshot.val())
                    let userData = childSnapshot.val()
                    setUserBoothState((prev) => ({ 
                        ...prev, 
                        userData
                    }))
                })  
            })
    }

    function updateDB(){ 
        let boothRef = firebase.database().ref('booths/')
        boothRef.on('value', function(snapshot){ 
            snapshot.forEach(function(childSnapshot){ 
                let boothsAvailable = childSnapshot.val()
                console.log(boothsAvailable)
                let key = userState.boothSelected
                let index = boothsAvailable?.indexOf(key)
                console.log(key, index)
                boothsAvailable?.includes(key) ? boothsAvailable.splice(index, 1) : console.log(boothsAvailable, key, 1111)
                const booths = { 
                    booths: boothsAvailable
                }
                boothRef.set(booths)
                
            })
        })
       
    }

    function checkCoupon(coupon){ 
        if(couponCodes.includes(coupon)){ 
            setUserState((prev) => ({ 
                ...prev, 
                qty: 0, 
                hasPayed: true
            }))
            localStorage.setItem("hasPayed", userState.hasPayed)
            alert("coupon code accepted")
            writeUserData()
            history.push("/form6")
        } else { 
        alert("coupon code is invalid")
        }
    }

    function pushToNextPage(){ 
        setUserState((prev) => ({ 
            ...prev, 
            hasPayed: true
        }))
        writeUserData()
        history.push("/form6")
    }

    function selectBooth(i){ 
        setUserState((prev) => ({ 
            ...prev, 
            boothSelected: i
        }))
        localStorage.setItem("boothSelected", i)
        alert(`you have selected booth ${i}`)
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
                .then(() => { 
                    const user = firebase.auth().currentUser;
                    user.sendEmailVerification()
                        .then(() => {
                            // Email sent.
                            }).catch(function(error) {
                                setErrorMessage((prev) => ({
                                    ...prev, 
                                    errorMessage: ""
                                }))
                            });
                })
                .catch(e => setErrorMessage((prev) => ({
                    ...prev, 
                    errorMessage: e.message
                })))
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
                .catch(e => setErrorMessage((prev) => ({
                    ...prev, 
                    errorMessage: e.message
                })))
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
            pushToNextPage,
            writeUserData,
            checkCoupon, 
            selectBooth, 
            ...errorMessage,
            getBooths,
            updateDB,
            ...availableBooths,
            ...userBoothState

        }}>
            {props.children}
        </FormContext.Provider>
    
    )
}

export default FormProvider