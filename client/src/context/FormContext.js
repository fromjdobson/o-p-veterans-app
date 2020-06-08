import React, { useState, useEffect} from 'react'
import firebase from 'firebase'
import { useHistory } from "react-router-dom"




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
const whiteBooths = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A17", "A18", "A19", "A20", "A21","A22", "A23", "A24", "A25", "A26", "A27", "A28", "A29", "A30", 
"B1", "B2", "B3", "B4", "B5", "B6", "B7", "B9", "B10", "B11", "B12", "B13", "B14", "B15", "B17", "B18", "B19", "B20", "B21", "B22", "B23",
"C6", "C7", "C9", "C10", "C11", "C12", "C13", "C14", "C15", "C17", "C18", "C19", "C20", "C21", "C22", "C23", 
"D6", "D7", "D9", "D10", "D11", "D12", "D13", "D14", "D15", "D17", "D18", "D19", "D20", "D21", "D22", "D23"
,"G1", "G2", "G9", "G10", "G11", "G12", "G13", "G14", "G15", "G22", "G23", 
"H1", "H2", "H3", "H4", "H5", "H6", "H7", "H9", "H10", "H11", "H12", "H13", "H14", "H16", "H17", "H18", "H19", "H20", "H21", "H22", 
"I1", "I2", "I3", "I4","I5", "I6", "I7", "I9", "I10", "I11", "I12", "I13", "I14", "I15", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8"
,"J9", "J10", "J11", "J12", "J13", "J14", "J15", "J16", "J17", "J18", "J19", 'J20', "J21",]
const yellowBooths =  ["A9", "A10", "A11", "A12", "A13", "A14", "A15", "C1", "C2", "C3", "C4", "C5", "D1", "D2","D3", "D4", "D5",
"G3", "G4", "G5", "G6", "G7", "G17", "G18", "G19", "G20", "G21",]
const pinkWhite = ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14", "F1", "F2", "F9", "F10", "F11", "F12", "F13", "F14", "F15",]
const pinkYellow = ["F3", "F4", "F5", "F6", "F7",]
const blueWhite = ["E15", "E16", "E17", "E18", "E19", "E20", "E21", "F22", "F23",]
const blueYellow = ["F17", "F18", "F19", "F20", "F21",]

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
const initBoothState = { 
    whiteBooths: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A17", "A18", "A19", "A20", "A21","A22", "A23", "A24", "A25", "A26", "A27", "A28", "A29", "A30", 
"B1", "B2", "B3", "B4", "B5", "B6", "B7", "B9", "B10", "B11", "B12", "B13", "B14", "B15", "B17", "B18", "B19", "B20", "B21", "B22", "B23",
"C6", "C7", "C9", "C10", "C11", "C12", "C13", "C14", "C15", "C17", "C18", "C19", "C20", "C21", "C22", "C23", 
"D6", "D7", "D9", "D10", "D11", "D12", "D13", "D14", "D15", "D17", "D18", "D19", "D20", "D21", "D22", "D23"
,"G1", "G2", "G9", "G10", "G11", "G12", "G13", "G14", "G15", "G22", "G23", 
"H1", "H2", "H3", "H4", "H5", "H6", "H7", "H9", "H10", "H11", "H12", "H13", "H14", "H16", "H17", "H18", "H19", "H20", "H21", "H22", 
"I1", "I2", "I3", "I4","I5", "I6", "I7", "I9", "I10", "I11", "I12", "I13", "I14", "I15", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8"
,"J9", "J10", "J11", "J12", "J13", "J14", "J15", "J16", "J17", "J18", "J19", 'J20', "J21",],
yellowBooths:  ["A9", "A10", "A11", "A12", "A13", "A14", "A15", "C1", "C2", "C3", "C4", "C5", "D1", "D2","D3", "D4", "D5",
"G3", "G4", "G5", "G6", "G7", "G17", "G18", "G19", "G20", "G21",],
pinkWhite: ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14", "F1", "F2", "F9", "F10", "F11", "F12", "F13", "F14", "F15",],
pinkYellow: ["F3", "F4", "F5", "F6", "F7",],
blueWhite: ["E15", "E16", "E17", "E18", "E19", "E20", "E21", "F22", "F23",],
blueYellow: ["F17", "F18", "F19", "F20", "F21"]
}

export const FormContext = React.createContext()


function FormProvider(props){ 
    const history = useHistory()
    
    const [userState, setUserState] = useState(initState)
    const [boothState, setBoothState] = useState({})
    const [errorMessage, setErrorMessage] = useState({errorMessage: ""})
    
    useEffect(() => { 
        getBooths()
    }, [])
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
        // const boothRef = firebase.database().ref('booths/')
        
        const item = { 
            ...userState
      }
    //   const booths = { 
    //     booths: whiteBooths.concat(yellowBooths, pinkWhite, pinkYellow, blueWhite, blueYellow)
    // }
        // boothRef.set(booths)
        itemsRef.push(item);
    }

    function getBooths(){ 
        let boothRef = firebase.database().ref('booths/')
        boothRef.on('value', function(snapshot){ 
            snapshot.forEach(function(childSnapshot){ 
                let booths1 = childSnapshot.val()
                let lowestSponsor = pinkWhite.concat(pinkYellow, blueYellow, blueWhite)
                let middleLevelSponsor = blueYellow.concat(blueWhite)
                let {value} = userState
                let displayArray = value < 2500 ? booths1?.filter(function(item){  
                    return !lowestSponsor.includes(item) }
                ) : value >= 2500 && value < 5000 ? booths1?.filter(function(item){ 
                    return !middleLevelSponsor.includes(item)}
                ) : console.log("failed")
                let key = userState.boothSelected
                let index = displayArray.indexOf(key)
                displayArray.includes(key) > -1 ? displayArray.splice(index, 1) : console.log(displayArray, key, 1111)
                console.log(displayArray)
                setBoothState((prev) => ({  
                    ...prev,
                    booths: displayArray
                }))
                console.log(boothState)
            })
        })
    }

    function updateDB(){ 
        let boothRef = firebase.database().ref('booths/')
        // let booths1 = boothState
        // let lowestSponsor = pinkWhite.concat(pinkYellow, blueYellow, blueWhite)
        // let middleLevelSponsor = blueYellow.concat(blueWhite)
        // let {value} = userState
        // let displayArray = value < 2500 ? booths1.booths.filter(function(item){  
        //     return !lowestSponsor.includes(item) }
        // ) : value >= 2500 && value < 5000 ? booths1.booths.filter(function(item){ 
        //     return !middleLevelSponsor.includes(item)}
        // ) : console.log("failed")
        // let key = userState.boothSelected
        // let index = displayArray.indexOf(key)
        // displayArray.includes(key) > -1 ? displayArray.splice(index, 1) : console.log(displayArray, key, 1111)
        // console.log(displayArray)
        const booths = { 
            booths: boothState,
        }
        boothRef.set(booths)
    }

    // function filterBooths(){ 
    //     let booths = boothState
    //     let combinedBooths = Object.values(booths)
    //     const finalArray = combinedBooths.toString().split(",")
    //     let lowestSponsor = pinkWhite + pinkYellow + blueYellow + blueWhite
    //     let middleLevelSponsor = blueYellow + blueWhite
    //     let {value} = userState
    //     let displayArray = value < 2500 ? finalArray.filter((item) =>  
    //         !lowestSponsor.include(item) 
    //     ) : value > 2500 && value < 5000 ? finalArray.filter((item) => 
    //         !middleLevelSponsor.inludes(item)
    //     ) : "" 
    // }
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
        console.log("fired")
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
                .catch(e => setErrorMessage((prev) => ({
                    ...prev, 
                    errorMessage: e.message
                })))
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
            ...boothState, 
            selectBooth, 
            ...errorMessage,
            getBooths,
            updateDB,

        }}>
            {props.children}
        </FormContext.Provider>
    
    )
}

export default FormProvider