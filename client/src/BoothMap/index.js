import React, { useState, useEffect } from 'react'
import { Container } from './components/styledComponents'
import Booth from './components/Booth'
import getBooths from './functions/getBooths'
import AddBoothForm from './components/AddBoothForm'
import DeleteButton from './components/DeleteButton'
import reserveBooth from './functions/reserveBooth'

export default function ({ onChange, ADMIN }) {
    const boothStateHook = useState([])
    const [state, setState] = boothStateHook
    const selectorHook = useState("")

    useEffect(() => getBooths(setState), [])
    onChange(boothStateHook)

    const Booths = state.map(doc => <Booth key={doc.id}
        doc={doc} ADMIN={ADMIN} selectorHook={selectorHook} />)

    const boothIsSelected = state.some(booth=>booth.id==selectorHook[0])

    return <Container ADMIN={ADMIN} onClick={e => { selectorHook[1](e.target.textContent) }}>
        {Booths}
        {ADMIN && <AddBoothForm callback={setState} />}
        {ADMIN && boothIsSelected && <DeleteButton selectorHook={selectorHook} setState={setState} />}
        {!ADMIN && boothIsSelected && <div>{selectorHook[0]} <button onClick={()=>reserveBooth(selectorHook[0])}>Reserve Now</button></div>}
    </Container>
}

