import React, { useState, useEffect } from 'react'
import { Container } from './components/styledComponents'
import Booth from './components/Booth'
import getBooths from './functions/getBooths'
import AddBoothForm from './components/AddBoothForm'

export default function ({onChange}) {
    const boothStateHook = useState([])
    const [state, setState] = boothStateHook 
    useEffect(() => getBooths(setState), [])
    onChange(boothStateHook)
    const Booths = state.map(doc => <Booth key={doc.id} doc={doc} />)

    return <Container>
        {Booths}
        <AddBoothForm callback={setState}/>
    </Container>
}

