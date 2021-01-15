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

function setPage(admin, historyFunc) {
    if (admin === false) {
        historyFunc.push('/vendor')
    } else if (admin === true) {
        historyFunc.push('/admin')
    }
}

export function findUserAndUpdateState(collectionFunc, signInEmail, name, photo, setUserState, history) {
    collectionFunc.get().then((snapshot) => {
        let tempArr = setTempUsersArr(snapshot)
        let found = findUserEmail(tempArr, signInEmail)

        if (found === undefined) {
            let newUserObj = createNewUserObj(name, signInEmail, photo)

            addUserToFireStore(collectionFunc, newUserObj)

            getUsersCollection(collectionFunc, signInEmail, setUserState, history)

        } else {
            getUsersCollection(collectionFunc, signInEmail, setUserState, history)

        }
    })
}