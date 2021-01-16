import React, { useState, useEffect } from 'react'
import { Container } from './components/styledComponents'
import Booth from './components/Booth'
import getBooths from './functions/getBooths'
import boothsRef from './functions/firestore'

export default function () {
    const [boothsData, setBoothsData] = useState([])

    useEffect(() => {
        getBooths(setBoothsData)
    }, [])

    const Booths = []
    boothsData.map(doc => {
        Booths.push(<Booth key={doc.id} doc={doc} />)
    })

    const handleSubmit = e => {
        e.preventDefault()
        let value = e.target.label.value
        let newData = { label: value, left: 210, top: 1 }
        boothsRef.doc(value).set(newData).then(() => {
            boothsRef.doc(value).get().then(d => console.log(d.data)).catch(error => {
                console.log("Error getting documents: ", error);
            })

            setBoothsData(prev => ([...prev, {
                id: value,
                data: newData
            }]))

        }).catch(error => {
            console.log("Error getting documents: ", error);
        })
    }

    return <Container>
        {Booths}
        <form onSubmit={handleSubmit}>
            <input type='text' name='label' placeholder='add a new booth' />
            <button>+</button>
        </form>
    </Container>
}

