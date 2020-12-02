import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../../firebase'
import ListItem from './ListItem'

const VendorListContainer = styled.div`
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
`

export default function VendorList() {
    const [itemsList, setItemsList] = useState([])

    const db = firebase.firestore()
    const usersRef = db.collection('users')

    useEffect(() => {
        usersRef.get().then((snapshot) => {
            let tempArr = [

            ]
            snapshot.forEach((doc) => {
                const   { 
                    name,
                    email,
                    city,
                    nonprofit,
                    phone,
                    sponsorship,
                    state,
                    streetaddress,
                    suitenumber,
                    vendorname,
                    veteranowned,
                    zipcode
                } = doc.data()

                let newObj = {
                    name: name,
                    email: email,
                    city: city,
                    nonprofit: nonprofit,
                    phone: phone,
                    sponsorship: sponsorship,
                    state: state,
                    streetAddress: streetaddress,
                    suiteNumber: suitenumber,
                    vendorName: vendorname,
                    veteranOwned: veteranowned,
                    zipcode: zipcode
                }

                tempArr.push(newObj)
            })

            setItemsList(() => {
                return tempArr
            })

        })
    },[])

    // itemsList.forEach((user) => {
    //     const { vendorName } = user
    //     console.log(vendorName)
    // })




    let listy = itemsList.map((entry, idx) => {
        const { 
            name,
            email,
            city,
            nonprofit,
            phone,
            sponsorship,
            state,
            streetAddress,
            suiteNumber,
            vendorName,
            veteranOwned,
            zipcode
        } = entry

        return  <ListItem
                    key={idx}
                    name={name}
                    email={email}
                    city={city}
                    nonprofit={nonprofit}
                    phone={phone}
                    sponsorship={sponsorship}
                    state={state}
                    streetAddress={streetAddress}
                    suiteNumber={suiteNumber}
                    vendorName={vendorName}
                    veteranOwned={veteranOwned}
                    zipcode={zipcode}
                />
    })


    return (
        <VendorListContainer> 
           {listy}
            {/* <ListItem />
            <ListItem /> */}
        </VendorListContainer>
    )
}