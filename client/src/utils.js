export function setTempUsersArr(snapshotArr) {
    const arr = []
    snapshotArr.forEach((doc) => {
        arr.push(doc.data())
    })
    return arr
}

export function findUserEmail(arr, userEmail) {
    const found = arr.find((element) => {
        return element.email === userEmail
    })

    return found
}

export function createNewUserObj(name, email, photo) {
    const newUserObj = {
        name: name,
        email: email,
        photo: photo,
        sponsorshipLevel: '',
        isAdmin: false,
        isRegistrationComplete: false,
        boothSelected: ''
    }

    return newUserObj
}

export function setPage(admin, historyFunc) {
    if (admin === false) {
        historyFunc.push('/vendor')
    } else if (admin === true) {
        historyFunc.push('/admin')
    }
}

export function getUsersCollection(func, signInEmail, setUserState, page, historyFunc) {
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

export function addUserToFireStore(func, newUser) {
    func.add({...newUser}).then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`)
    }).catch((error) => {
        console.log(`Error writing document: ${error}`)
    })
}