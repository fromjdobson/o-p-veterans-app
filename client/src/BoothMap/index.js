import React, { useState, useEffect } from 'react'
import { Container } from './components/styledComponents'
import Booth from './components/Booth'
import AddBoothForm from './components/AddBoothForm'
import DeleteButton from './components/DeleteButton'
import reserveBooth from './functions/databaseOperations/reserveBooth'
import getBooths from './functions/databaseOperations/getBooths'
import { stateMerger } from './functions/helpers'

export default function BoothMap({ onChange, ADMIN }) {
    const [state, stateSetter] = useState({
        ADMIN,
        selected: ""
    })
    const setState = stateMerger(stateSetter)
    const [booths, setBooths] = useState([])
    onChange({state,setState})
    useEffect(() => getBooths(setBooths), [])

    const Booths = booths.map(doc => {
        return <Booth 
            key={doc.id}
            doc={doc} 
            ADMIN={ADMIN} 
            selected={state.selected===doc.id} />
        })

    const boothIsSelected = booths.some(booth=>booth.id==state.selected)

    return <Container ADMIN={ADMIN} onClick={e => { setState({selected: e.target.textContent}) }}>
        {Booths}
        {ADMIN && <>
            <AddBoothForm {...{setBooths}}/>
            {boothIsSelected && <DeleteButton selected={state.selected} {...{setBooths}} />}
        </>}
        {!ADMIN && 
            boothIsSelected && 
            <div>{state.selected} 
                <button onClick={()=>reserveBooth(state.selected)}>Reserve Now</button>
            </div>}
    </Container>
}

