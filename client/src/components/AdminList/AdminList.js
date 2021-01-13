import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../../firebase'
// import { dummyInfoArr } from './utils'
import ListItem from './ListItem'

const ListContainer = styled.div`
    width: 328px;
    position: relative;
    top: 0px;
    left: calc(50% - 328px/2);
    min-height: 312px;
    border: 2px dashed orange;
`

export default function AdminList(props) {
    const [list, setList] = useState('Loading...')

    let db = firebase.firestore()
    let usersCollection = db.collection('users')

    useEffect(() => {
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
    }, [])

    // List from useState is not rendering loading status on screen
    return (
        <ListContainer>
            {(list === 'Loading...') ? list : list.map(vendor => {
                const { name } = vendor
                return <ListItem key={name} vendorInfo={vendor} />
            })}
            {/* {'list'} */}

        </ListContainer>
    )
}
