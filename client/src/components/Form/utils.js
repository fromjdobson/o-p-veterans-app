export function updateUser(ref, refId, propertyName, response) {
    ref.doc(refId).update({
        [propertyName]: response
    }).then(() => console.log('Document successfully updated.'))
} 

export function handleClick(e, dbFunc, questionSetter, responseSetter) {
    e.preventDefault()

    dbFunc()

    questionSetter((prevState) => {
        return prevState + 1
    })

    responseSetter(null)
}

export function handleChange(e, setterFunc) {
    const { value } = e.target
    setterFunc(value)
}

export function getQuestion(num) {
    switch (num) {
        case 0:
            return {
                question: `Let's get started with getting your last name.`,
                inputName: `name`,
                isFormComplete: false
            }
        case 1:
            return {
                question: `Vendor's street/mailing address?`,
                inputName: `streetaddress`,
                isFormComplete: false
            }
        case 2:
            return {
                question: `Apartment/suite number?`,
                inputName: `suitenumber`,
                isFormComplete: false
            }
        case 3:
            return {
                question: `City?`,
                inputName: `city`,
                isFormComplete: false
            }
        case 4:
            return {
                question: `State?`,
                inputName: `state`,
                isFormComplete: false
            }
        case 5:
            return {
                question: `And finally, what is the zipcode?`,
                inputName: `zipcode`,
                isFormComplete: false
            }
        case 6:
            return {
                question: `What is the name of your organization?`,
                inputName: `vendorname`,
                isFormComplete: false
            }
        case 7:
            return {
                question: `Tell us a short description of your organization.`,
                inputName: `vendordescription`,
                isFormComplete: false
            }
        case 8:
            return {
                question: `What is a good phone number to reach you?`,
                inputName: `phone`,
                isFormComplete: false
            }
        case 9:
            return {
                question: `Is your organization veteran owned?`,
                inputName: `veteranowned`,
                isFormComplete: false
            }
        case 10:
            return {
                question: `Does your organization have a non-profit status?`,
                inputName: `nonprofit`,
                isFormComplete: true
            }
        default:
            return {
                question: ``,
                inputName: `default`,
                isFormComplete: true
            }
    }
}
