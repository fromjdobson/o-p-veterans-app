import React, { useState, useEffect} from 'react'
import firebase from 'firebase'
import { useHistory } from "react-router-dom"

// config object for firebase
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

// coupon codes to skip payment
const couponCodes = ["opvet123", "test123", "coupon111"]
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

// this is the userstate object default 
const initState = {
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
    qty: 1, 
    value: "" || localStorage.getItem("value"), 
    needPower: false || localStorage.getItem("needPower"), 
    vendorSpace: "" || localStorage.getItem("vendorSpace"),
    firstName: "" || localStorage.getItem("firstName"), 
    lastName: "" || localStorage.getItem("lastName"), 
    loaded: false,
    coupon: "", 
    hasPayed: false || localStorage.getItem("hasPayed"),
    booth: "" || localStorage.getItem("booth"),
    uid: "" || localStorage.getItem('uid'),
    // isAdmin: false || localStorage.getItem('admin'),
    index: '' || localStorage.getItem('index')
}

export const FormContext = React.createContext()


function FormProvider(props){ 
    const history = useHistory()
    
    const [userState, setUserState] = useState(initState)
    const [userBoothState, setUserBoothState] = useState([])
    const [boothState, setBoothState] = useState()
    const [errorMessage, setErrorMessage] = useState({errorMessage: ""})
    // const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true })

    var boothArr = []

    useEffect(() => { 
        getUsersBoothSelection()
    },[])

    function getArrayBooths(){ 
        getUsersBoothSelection()
        let boothRef = firebase.database().ref('/arrayBooths')
        boothRef.once('value', function(snapshot){ 
            snapshot.forEach(function(childSnapshot){ 
                boothArr.push(childSnapshot.val())
                // console.log(typeof booths)
                // setBoothState((prev) => ({ 
                    //     ...prev,
                    //     booths: boothsArray
                    // }))
                })
                setBoothState(() => ({
                    booths: boothArr
                }))
            })
        }
            

    function updateBooths(index){ 
        let boothRef = firebase.database().ref('/arrayBooths/' + index)
        boothRef.once('value', function(snapshot) { 
            let choosenBooth = snapshot.val()
            choosenBooth.choosen = true
            boothRef.set(choosenBooth)
           
        })    
    }

    function handleChange(e){ 
        let {name, value} = e.target
        if(value === 'false') value = false
        setUserState(prev => ({ 
            ...prev, 
            [name]: value
        }))
        // updates local storage as they are completing registration
        localStorage.setItem([name], value)
    }

    // Update user in DB
    function writeUserData(i) {
        // let boothRef = firebase.database().ref('booths/')
        let userId = firebase.auth().currentUser.uid
        
        const itemsRef = firebase.database().ref('users/' + userId);

        const item = { 
            ...userState, 
        }
        let boothRef = firebase.database().ref('booths/')
      const booths = { 
        booths: whiteBooths.concat( yellowBooths, pinkWhite, pinkYellow, blueWhite, blueYellow)
    }
        boothRef.set(booths)
        itemsRef.set(item);
    }

    // function getBooths(){
    //     // gets a ref to the booths section of the DB 
    //     let boothRef = firebase.database().ref('booths/')
    //     // loop through the data
    //     boothRef.on('value', function(snapshot){ 
    //         snapshot.forEach(function(childSnapshot){ 
    //             // all of the booths
    //             let booths1 = childSnapshot.val()
    //             // the booths available to the lowest level sponsor 
    //             let lowestSponsor = pinkWhite.concat(pinkYellow, blueYellow, blueWhite)
    //             let middleLevelSponsor = blueYellow.concat(blueWhite)
                
    //             let {value} = userState
    //             // filters booths based on sponsorship level
    //             let displayArray = value < 2500 ? booths1?.filter(function(item){  
    //                 // returns everything not included in lowest sponsor etc.. 
    //                 return !lowestSponsor.includes(item) }
    //                 // reuturns everything not in the middlelevelsponsor otherwise returns all booths
    //             ) : value >= 2500 && value < 5000 ? booths1?.filter(function(item){ 
    //                 return !middleLevelSponsor.includes(item)}
    //             ) : booths1
            
    //             // sorts the booths alphanumerically 
    //             displayArray.sort(sortAlphaNum)
    //             setAvailableBooths((prev) => ({  
    //                 ...prev,
    //                booths:displayArray
    //             }))
    //         })
    //     })
    //     getUsersBoothSelection()
    // }

    function getUsersBoothSelection(){ 
        // get ref to users in db 
        let userRef = firebase.database().ref('users/')
        // loop through data 
            userRef.once('value', function(snapshot){ 
                snapshot.forEach(function(childSnapshot){ 
                    let userData = childSnapshot.val()
                    //update userboothstate with all users from DB
                    setUserBoothState((prev) => ([
                        ...prev,
                       userData
                    ]))  
                })
            })
        }

    function editUsers(id){ 
        // grab ref to users in db with the uid passed in
        const itemsRef = firebase.database().ref('users/' + id);
        const item = { 
            ...userState,
            uid: id 
        }
        // updated user at ref position
        itemsRef.set(item)
        getUsersBoothSelection()
    }
    
    //Updates booth array
    function updateDB(){ 
        let boothRef = firebase.database().ref('booths/')
        boothRef.on('value', function(snapshot){ 
            snapshot.forEach(function(childSnapshot){ 
                let boothsAvailable = childSnapshot.val()
                // key = what booth user selected
                let key = userState.boothSelected
                // finds index of key in boothsavailable array and splices it out
                let index = boothsAvailable.length ? boothsAvailable.indexOf(key) : null
                boothsAvailable.length && boothsAvailable.includes(key) && boothsAvailable.splice(index, 1) 
                const booths = { 
                    booths: boothsAvailable
                }
                // updates the db with the new set of booths 
                boothRef.set(booths)
                
            })
        })
       
    }

    function editBooth(index){ 
        // grab ref to booths in db using arg
        let boothRef = firebase.database().ref('arrayBooths/' + index)
            boothRef.once('value', function(snapshot) { 
                let choosenBooth = snapshot.val()
                choosenBooth.choosen = false
                boothRef.set(choosenBooth)
            }) 
            history.push('/form6')
    }

    function checkCoupon(coupon){ 
        //checks if coupon arg matches predetermined coupon value 
        if(couponCodes.includes(coupon)){ 
            setUserState((prev) => ({ 
                ...prev, 
                hasPayed: true
            }))
            localStorage.setItem("hasPayed", userState.hasPayed)
            alert("coupon code accepted")
            // write the current users data to the realtime database 
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
        // write the users data to the data base
        writeUserData()
        // send to the booth selection 
        history.push("/form6")
    }

    function selectBooth(i){ 
        // updates booth selected in userState
        setUserState((prev) => ({ 
            ...prev, 
            boothSelected: i
        }))
        localStorage.setItem("boothSelected", i)
        alert(`you have selected booth ${i}`)
    }

    function getUser(){ 
        let userId = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + userId).once('value').then(function(snapshot) { 
            let user = snapshot.val()
            // localStorage.setItem("address",user && user.address)
            // localStorage.setItem("booth",user && user.booth)
            // localStorage.setItem("businessPhone", user && user.businessPhone)
            // localStorage.setItem("city", user && user.city)
            // localStorage.setItem("companyName", user && user.companyName)
            // localStorage.setItem("displayName", user && user.displayName)
            // localStorage.setItem("email", user && user.email)
            // localStorage.setItem("needPower", user && user.needPower)
            // localStorage.setItem("state", user && user.state)
            // localStorage.setItem("value", user && user.value)
            // localStorage.setItem("zipCode", user && user.zipCode)
            // localStorage.setItem('nonProfit', user && user.nonProfit)
            // localStorage.setItem('uid', userId)
            // localStorage.setItem('index', user.index)
            // re-render the page with the updated user info
            setUserState((prev) => ({ 
                ...prev, 
                ...user,

                // uid: user.uid, 
                // index: user.index
            }))
        });
        
    }
    

    function handleSubmit(value){ 
        setUserState((prev => ({ 
            ...prev, 
            value: value
        })))
        localStorage.setItem("value", value)
    }
   
    function handleSignup(email, password){ 
        // run firebase method to create account
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => { 
                // grabs current user data such as UID and isAdmin 
                const user = firebase.auth().currentUser;
                setUserState(prev => ({ 
                    ...prev,
                    email: user.email,
                    uid: user.uid,
                }))
                localStorage.setItem('uid', user.uid )
                user.sendEmailVerification()
                    .then(() => {
                        // Email sent.
                        }).catch(function(error) {
                            setErrorMessage((prev) => ({
                                ...prev, 
                                errorMessage: ""
                            }))
                        });
            }).catch(e => setErrorMessage((prev) => ({
                ...prev, 
                errorMessage: e.message
            })))
            // on auth state change checks to see if the user is an Admin
            firebase.auth().onAuthStateChanged(function(user){
                if(user){
                    getArrayBooths()
                    firebase.auth().currentUser.getIdTokenResult()
                        .then((idTokenResult) => {
                        // Confirm the user is an Admin.
                        if(idTokenResult.claims.admin) {
                            setUserState((prev) => ({
                                ...prev,
                                isAdmin: true
                            }))
                        }
                    })
                        .catch((error) => {
                            console.log(error);
                        });
                    }
                })
            }  
            
    function handleLogin(email, password){ 
        auth.signInWithEmailAndPassword(email, password)
        .then(res => { 
            // console.log the res to get the user info 

            const {uid} = res.user
            // localStorage.setItem("uid", uid)
            localStorage.setItem("email", res.user.email)
            localStorage.setItem('uid', uid)
            setUserState(prev => ({ 
                ...prev,
                email: res.user.email,
                uid: uid,

            }))
        }).catch(e => setErrorMessage((prev) => ({
            ...prev, errorMessage: e.message
        })))
        // checks if user is Admin and updates in state
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                getUser()
                getArrayBooths()
                firebase.auth().currentUser.getIdTokenResult()
                    .then((idTokenResult) => {
                    // Confirm the user is an Admin.
                    if(idTokenResult.claims.admin) {
                        // Show admin UI.
                        setUserState((prev) => ({
                            ...prev,
                            isAdmin: true
                        }))
                    }
                })
            .catch((error) => {
                console.log(error);
            });
                }
            })
        }  

    function signInWithFacebook(){ 
        firebase.auth().signInWithPopup(FBprovider)
        .then(res => { 
            // console.log the res to get the user info 
            // localStorage.setItem('uid', res.user.uid)
            localStorage.setItem("displayName", res.user.displayName)
            setUserState(prev => ({ 
                ...prev,
                displayName: res.user.displayName, 
                email: res.user.email,
                uid: res.user.uid
            }))
            localStorage.setItem('uid', res.user.uid)
            // checks if user is Admin
            firebase.auth().onAuthStateChanged(function(user){
                if(user){
                    getArrayBooths()
                    getUser()
                    firebase.auth().currentUser.getIdTokenResult()
                        .then((idTokenResult) => {
                            console.log(idTokenResult.claims.admin)
                        // Confirm the user is an Admin.
                        if(idTokenResult.claims.admin) {
                            // Show admin UI.
                            setUserState((prev) => ({
                                ...prev,
                                isAdmin: true
                            }))
                        }
                    })
                        .catch((error) => {
                            console.log(error);
                        });
                    }
                })
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
            // console.log the res to get the user info 
            // localStorage.setItem('uid', res.user.uid)
            setUserState(prev => ({ 
                ...prev,
                displayName: res.user.displayName, 
                email: res.user.email,
                uid: res.user.uid
            }))
            localStorage.setItem('uid', res.user.uid)
            // checks if user is admin
            firebase.auth().onAuthStateChanged(function(user){
                getUser()
                getArrayBooths()
                if(user){
                    firebase.auth().currentUser.getIdTokenResult()
                        .then((idTokenResult) => {
                        // Confirm the user is an Admin.
                        if(idTokenResult.claims.admin) {
                            // Show admin UI.
                            setUserState((prev) => ({
                                ...prev,
                                isAdmin: true
                            }))
                        }
                    })
                        .catch((error) => {
                            console.log(error);
                        });
                    }
                })
            })
            .catch(e => { 
                let error = e.message
                let errorCode = e.code
                console.log(error, errorCode)
        })
    }

    function logout(){ 
        localStorage.clear()
        // google firebase method to logout user
        auth.signOut()
        setUserState(() => ({ 
            uid: ""
        }))
        // sends back to login page
        history.push("/")
    }

    return( 
        <FormContext.Provider value = {{
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
            // getBooths,
            updateDB,
            userBoothState, 
            setUserState, 
            editBooth, 
            getUsersBoothSelection, 
            editUsers,
            getArrayBooths,
            boothState,
            updateBooths,
            ...userState,
            ...errorMessage,
    

        }}>
            {props.children}
        </FormContext.Provider>
    
    )
}

export default FormProvider