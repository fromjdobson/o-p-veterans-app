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
        phone: '',
        userImg: photo,
        isAdmin: false,
        isRegistrationComplete: false,
        streetAddress: '',
        aptSuite: '',
        city: '',
        state: '',
        zipcode: '',
        vendorName: '',
        logoURL: '',
        sponsorshipLevel: '',
        veteranOwned: false,
        nonProfit: false,
        boothNumber: '',
        powered: false
    }

    // const newUserObj = {
    //     name: name,
    //     email: email,
    //     photo: photo,
    //     sponsorshipLevel: '',
    //     isAdmin: false,
    //     isRegistrationComplete: false,
    //     boothSelected: ''
    // }

    return newUserObj
}

function getUsersCollection(func, signInEmail, setUserState, page, historyFunc) {
    func.get().then((snapshot) => {
        let tempArr = setTempUsersArr(snapshot)

        let found = findUserEmail(tempArr, signInEmail)
        const { isAdmin } = found

        setUserState(() => {
            return {...found}
        })

        page(isAdmin, historyFunc)
    })
}

function addUserToFireStore(func, newUser) {
    func.add({...newUser}).then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`)
    }).catch((error) => {
        console.log(`Error writing document: ${error}`)
    })
}

export function setPage(admin, historyFunc) {
    if (admin === false) {
        historyFunc.push('/vendor')
    } else if (admin === true) {
        historyFunc.push('/admin')
    }
}

export function findUserAndUpdateState(collectionFunc, signInEmail, name, photo, setUserState, page, history) {
    collectionFunc.get().then((snapshot) => {
        let tempArr = setTempUsersArr(snapshot)
        let found = findUserEmail(tempArr, signInEmail)

        if (found === undefined) {
            let newUserObj = createNewUserObj(name, signInEmail, photo)

            addUserToFireStore(collectionFunc, newUserObj)

            getUsersCollection(collectionFunc, signInEmail, setUserState, page, history)

        } else {
            getUsersCollection(collectionFunc, signInEmail, setUserState, page, history)

        }
    })
}