import React, { useState, useEffect} from 'react'
import firebase from 'firebase'
import { useHistory } from "react-router-dom"
import { ChargeRequest } from 'square-connect';

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
    index: '' || localStorage.getItem('index')
}

export const FormContext = React.createContext()


function FormProvider(props){ 
    const history = useHistory()
    
    const [userState, setUserState] = useState(initState)
    const [userBoothState, setUserBoothState] = useState([])
    const [boothState, setBoothState] = useState()
    const [errorMessage, setErrorMessage] = useState({errorMessage: ""})
    const [image, setImage ] = useState()
    // const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true })

    var boothArr = []

    useEffect(() => { 
        getUsersBoothSelection()
        getImages()
    },[])

    function uploadImage(e){ 
          const file = e.target.files[0]
          const uploader = document.getElementById('uploader')
            
          const storageRef = firebase.storage().ref(`images/${file.name}`)
          const task = storageRef.put(file)
          task.on('state_changed', 
            function progress(snapshot){ 
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log(percentage)
                uploader.value = percentage

            }, 
            function error(err){ 
                console.log(err)
            }, 
            function complete(){ 
                // alert("file Uploaded successfully")
            }
          )
        }
    

    function getImages(){ 
       const imageRef = firebase.storage().ref('images')
       const tempArray = []
        imageRef.listAll().then(res => { 
            res.items.forEach((item, index) => { 
                imageRef.child(`${res.items[index].name}`).getDownloadURL().then((url) => { 
                    tempArray.push(url)
                    setImage(() => [
                        ...tempArray
                    ])
                })
            })
            // imageRef.child(`${res.items[0].fullPath}`).getDownloadURL().then((url) => { 
            //     console.log(url, 'this is the url')
            // })
        })
        // imageRef.child('images/53A36475-CC83-48EA-A922-0B7105FBEE0F.jpeg').getDownloadURL().then((url) => { 
        //     // console.log(url)
        //     setImage(url)
        // })
        .catch(err => console.log(err))
        // `url` is the download URL for 'images/stars.jpg'

        // var img = document.getElementById('myimg');
        // img.src = 'gs://op-vet.appspot.com/images/53A36475-CC83-48EA-A922-0B7105FBEE0F.jpeg'
        
 

    }



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
    function writeUserData() {
        let userId = firebase.auth().currentUser.uid
        
        const itemsRef = firebase.database().ref('users/' + userId);

        const item = { 
            ...userState, 
        }
        itemsRef.set(item);
    }

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


    function getUser(){ 
        let userId = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + userId).once('value').then(function(snapshot) { 
            let user = snapshot.val()
            localStorage.setItem("address",user && user.address)
            localStorage.setItem("booth",user && user.booth)
            localStorage.setItem("businessPhone", user && user.businessPhone)
            localStorage.setItem("city", user && user.city)
            localStorage.setItem("companyName", user && user.companyName)
            localStorage.setItem("displayName", user && user.displayName)
            localStorage.setItem("email", user && user.email)
            localStorage.setItem("needPower", user && user.needPower)
            localStorage.setItem("state", user && user.state)
            localStorage.setItem("value", user && user.value)
            localStorage.setItem("zipCode", user && user.zipCode)
            localStorage.setItem('nonProfit', user && user.nonProfit)
            localStorage.setItem('uid', userId)
            localStorage.setItem('index', user.index)
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
            image,
            uploadImage,
            ...userState,
            ...errorMessage,
    

        }}>
            {props.children}
        </FormContext.Provider>
    
    )
}

export default FormProvider