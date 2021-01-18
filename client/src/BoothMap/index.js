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

    const boothIsSelected = booths.some(booth=>booth.id==state.selected)

    const Booths = booths.map(doc => <Booth
            key={doc.id}
            {...doc}
            ADMIN={ADMIN}
            selected={state.selected===doc.id} />)

    const handleClick = e => {
        e.target.textContent !== state.selected && setState({selected: e.target.textContent})
    }

    return <Container ADMIN={ADMIN} onClick={handleClick}>
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

