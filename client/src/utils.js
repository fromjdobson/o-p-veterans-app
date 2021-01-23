function setTempUsersArr(snapshotArr) {
    const arr = []
    snapshotArr.forEach((doc) => {
        arr.push(doc.data())
    })
    return arr
}

function findUserEmail(arr, userEmail) {
    const found = arr.find((element) => {
        return element.email === userEmail
    })

    return found
}

function createNewUserObj(name, email, photo) {
    const newUserObj = {
        name: name,
        email: email,
        phone: 'ukn',
        userImg: photo,
        isAdmin: false,
        isRegistrationComplete: false,
        streetAddress: 'ukn',
        aptSuite: 'ukn',
        city: 'ukn',
        state: 'ukn',
        zipcode: 'ukn',
        vendorName: 'ukn',
        logoURL: '',
        sponsorshipLevel: 'ukn',
        veteranOwned: 'no',
        nonProfit: 'no',
        boothNumber: 'n/a',
        powered: 'no'
    }

    return newUserObj
}

function getUsersCollection(func, signInEmail, setUserState, historyFunc) {
    func.get().then((snapshot) => {
        let tempArr = setTempUsersArr(snapshot)
        let found = findUserEmail(tempArr, signInEmail)
        const { isAdmin } = found
        setUserState(() => {
            return {...found}
        })
        setPage(isAdmin, historyFunc)
    })
}

function addUserToFireStore(func, newUser) {
    func.add({...newUser}).then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`)
    }).catch((error) => {
        console.log(`Error writing document: ${error}`)
    })
}

export function setPage(admin, history) {
    if (admin === false) {
        history.location.pathname !== '/vendor' && history.push('/vendor')
    } else if (admin === true) {
        history.location.pathname !== '/admin' && history.push('/admin')
    }
}

export function findUserAndUpdateState(collectionFunc, user, setUserState, history) {
    const { email, displayName, photoURL } = user
    let signInUserEmail = email

    collectionFunc.get().then((snapshot) => {
        let tempArr = setTempUsersArr(snapshot)
        let found = findUserEmail(tempArr, signInUserEmail)

        if (found === undefined) {
            let newUserObj = createNewUserObj(displayName, signInUserEmail, photoURL)
            addUserToFireStore(collectionFunc, newUserObj)
            getUsersCollection(collectionFunc, signInUserEmail, setUserState, history)
        } else {
            getUsersCollection(collectionFunc, signInUserEmail, setUserState, history)
        }
    })
}