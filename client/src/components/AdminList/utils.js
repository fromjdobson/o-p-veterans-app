import atpLogo from '../../assets/images/atp-logo.png'

export const dummyInfoArr = [
    {
        name: 'Bunty Soap Company',
        logo: atpLogo,
        boothNumber: 'A01',
        userName: 'Frank Galikanokus',
        phone: '512-555-1212',
        email: 'f.galikanokus@bunty.com',
        streetAddress: '1234 Main St',
        aptSuite: 'Suite #500',
        city: 'Leander',
        state: 'TX',
        zipcode: '78611',
        sponsorshipLevel: 'Paladin',
        veteranOwned: 'veteran owned',
        nonProfit: 'non Profit',
        powered: 'no'
    },
    {
        name: 'American Trigger Pullers',
        logo: atpLogo,
        boothNumber: 'B11',
        userName: 'Shane Smith',
        phone: '512-555-1212',
        email: 's.smith@atp.com',
        streetAddress: '1234 Main St',
        aptSuite: 'Suite #500',
        city: 'Austin',
        state: 'TX',
        zipcode: '78611',
        sponsorshipLevel: 'Bradley',
        veteranOwned: 'veteran owned',
        nonProfit: 'no',
        powered: 'yes'
    },
    {
        name: 'Cover 6 Outdors',
        logo: atpLogo,
        boothNumber: 'B11',
        userName: 'Archie Funnygi',
        phone: '512-555-1212',
        email: 's.smith@atp.com',
        streetAddress: '1234 Main St',
        aptSuite: 'Suite #500',
        city: 'Austin',
        state: 'TX',
        zipcode: '78611',
        sponsorshipLevel: 'Bradley',
        veteranOwned: 'veteran owned',
        nonProfit: 'no',
        powered: 'yes'
    },
    {
        name: 'Fake Co.',
        logo: atpLogo,
        boothNumber: 'B11',
        userName: 'Shane Smith',
        phone: '512-555-1212',
        email: 's.smith@atp.com',
        streetAddress: '1234 Main St',
        aptSuite: 'Suite #500',
        city: 'Austin',
        state: 'TX',
        zipcode: '78611',
        sponsorshipLevel: 'Bradley',
        veteranOwned: 'veteran owned',
        nonProfit: 'no',
        powered: 'yes'
    }
]

// Toggle Button

export function newToggleObj(status) {
    if (status === 'vendor') {
        return { vendorToggle: 'active', eventToggle: 'inactive' }
    } else if (status === 'event') {
        return { vendorToggle: 'inactive', eventToggle: 'active' }
    }
}

export function assignToggleStatus(toggleObj) {
    const { vendorToggle, eventToggle } = toggleObj
    const tempObj = { toggleOne: vendorToggle, toggleTwo: eventToggle }

    return tempObj
}

export function handleVendorButton(func) {
    func('vendor')
}

export function handleEventButton(func) {
    func('event')
}

// ListItemInfo

export function setInfo(toggleStatus, info) {
    if (toggleStatus === 'vendor') {
        const {
            name,
            email,
            phone,
            streetAddress,
            aptSuite,
            city,
            state,
            zipcode
        } = info

        console.log(1111, state, zipcode)


        const infoArr = [
            name,
            email,
            phone,
            streetAddress,
            aptSuite,
            city,
            state,
            zipcode
        ]

        // const {
        //     userName,
        //     email,
        //     phone,
        //     streetAddress,
        //     aptSuite,
        //     city,
        //     state,
        //     zipcode
        // } = info

        // const infoArr = [
        //     userName,
        //     email,
        //     phone,
        //     streetAddress,
        //     aptSuite,
        //     city,
        //     state,
        //     zipcode
        // ]


        return infoArr
    } else if (toggleStatus === 'event') {
        const {
            sponsorshipLevel,
            veteranOwned,
            nonProfit,
            powered
        } = info

        // const {
        //     sponsorshipLevel,
        //     veteranOwned,
        //     nonProfit,
        //     boothNumber,
        //     powered
        // } = info

        const infoArr = [
            sponsorshipLevel,
            veteranOwned,
            nonProfit,
            powered
        ]

        // const infoArr = [
        //     sponsorshipLevel,
        //     veteranOwned,
        //     nonProfit,
        //     boothNumber,
        //     powered
        // ]

        // const {
        //     sponsorshipLevel,
        //     veteranOwned,
        //     nonProfit,
        //     powered
        // } = info

        // const infoArr = [
        //     sponsorshipLevel,
        //     veteranOwned,
        //     nonProfit,
        //     powered
        // ]

        return infoArr
    }
}

export function setExpandDisplay(status) {
    if (status === false) {
        return `none`
    } else if (status === true) {
        return `block`
    }
}

// ItemHeader

export function openCloseExpand(status, setter) {
    if (status === false) {
        setter(true)
    } else if (status === true) {
        setter(false)
    }
}