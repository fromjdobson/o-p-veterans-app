export function getQuestion(num) {
    switch (num) {
        case 0:
            return {
                question: `Let's get started with getting your last name.`,
                inputName: `name`
            }
        case 1:
            return {
                question: `Vendor's street/mailing address?`,
                inputName: `streetaddress`
            }
        case 2:
            return {
                question: `Apartment/suite number?`,
                inputName: `suitenumber`
            }
        case 3:
            return {
                question: `City?`,
                inputName: `city`
            }
        case 4:
            return {
                question: `State?`,
                inputName: `state`
            }
        case 5:
            return {
                question: `And finally, what is the zipcode?`,
                inputName: `zipcode`
            }
        case 6:
            return {
                question: `What is the name of your organization?`,
                inputName: `vendorname`
            }
        case 7:
            return {
                question: `Tell us a short description of your organization.`,
                inputName: `vendordescription`
            }
        case 8:
            return {
                question: `What is a good phone number to reach you?`,
                inputName: `phone`
            }
        case 9:
            return {
                question: `Is your organization veteran owned?`,
                inputName: `veteranowned`
            }
        case 10:
            return {
                question: `Does your organization have a non-profit status?`,
                inputName: `nonprofit`
            }
    }
}
