import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../../firebase'
import ListItem from './ListItem'

let db = firebase.firestore()
let usersCollection = db.collection('users')

const ListContainer = styled.div`
    box-sizing: border-box;
    width: 328px;
    /* position: relative;
    top: 0px;
    left: calc(50% - 328px/2); */
    min-height: 56px;
    border: 2px dashed orange;
`

export default function AdminList(props) {
    const [list, setList] = useState('Loading...')
    const { className } = props

    useEffect(() => {
        console.log('AdminList')

        usersCollection.get().then((snapshot) => {
            const tempArr = []
            snapshot.forEach((doc) => {
                const tempObj = {...doc.data()}
                tempArr.push(tempObj)
            })

            setList(() => {
                return [...tempArr]
            })
        })
    },[])

    return (
        <ListContainer className={className}>
            {(list === 'Loading...') ? list : list.map(vendor => {
                const { name } = vendor
                return <ListItem key={name} vendorInfo={vendor} />
            })}
        </ListContainer>
    )
}
