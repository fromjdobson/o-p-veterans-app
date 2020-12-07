import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../../../providers/CurrentUser'
import { Header } from '../../Header'

const DashboardContainer = styled.div`
    border: 1px solid lightcoral;

    & > p {
        margin: 0px;
    }

    & > img {
        width: 32px;
        height: 32px;
    }
`

export default function TempDashboard() {
    const [currentUser] = useContext(CurrentUserContext)
    // REMOVE THE FOLLOWING

    const {
        city,
        email,
        formcomplete,
        isAdmin,
        name,
        nonprofit,
        paymentcomplete,
        phone,
        sponsorship,
        state,
        streetaddress,
        suitenumber,
        userPhotoUrl,
        vendordescription,
        vendorname,
        veteranowned,
        zipcode
    } = currentUser
    console.log(currentUser)

    return (
        <DashboardContainer>
            <Header />
            <p>{name}</p>
            <p>{vendorname}</p>
            <p>{vendordescription}</p>
            <p>{email}</p>
            <img src={userPhotoUrl} alt={'hello'} />
            <p>{isAdmin}</p>
            <p>{formcomplete}</p>
            <p>{paymentcomplete}</p>
            <p>{sponsorship}</p>
            <p>{streetaddress}</p>
            <p>{suitenumber}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zipcode}</p>
            <p>{phone}</p>
            <p>{veteranowned}</p>
            <p>{nonprofit}</p>
        </DashboardContainer>
    )
}
