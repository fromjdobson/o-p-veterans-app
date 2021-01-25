export default function createNewUserObj(user) {
    const {displayName, email, photoURL} = user
    return {
        name: displayName,
        email: email,
        phone: 'ukn',
        userImg: photoURL,
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
}