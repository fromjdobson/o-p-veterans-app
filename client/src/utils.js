export function setTempUsersArr(snapshotArr, tempArr) {
    snapshotArr.forEach((doc) => {
        tempArr.push(doc.data())
    })
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