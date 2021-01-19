import React, { useState, useEffect } from 'react'
import { Container, StyledLegend } from './styledComponents'
import Booths from './components/Booths'
import AddBoothForm from './components/AddBoothForm'
import DeleteButton from './components/DeleteButton'
import reserveBooth from './functions/databaseOperations/reserveBooth'
import getBooths from './functions/databaseOperations/getBooths'
import { stateMerger } from './functions/helpers'
import LegendKey from './components/LegendKey'

export default function BoothMap({ onChange, ADMIN }) {
    const [state, stateSetter] = useState({
        ADMIN,
        selected: ""
    })
    const [booths, setBooths] = useState([])

    const setState = stateMerger(stateSetter)
    onChange({ state, setState })
    useEffect(() => getBooths(setBooths), [])

    const boothIsSelected = booths.some(booth => booth.id === state.selected)

    const changeSelectedBooth = e => {
        const selected = e.target.textContent
        selected !== state.selected && selected !== 'Reserve Now' &&
            setState({ selected: e.target.textContent })
    }

    console.log(booths)

    return <Container ADMIN={ADMIN} onMouseDown={changeSelectedBooth}>
        <LegendKey />
        <Booths {...state} booths={booths} />

        {ADMIN && <>
            <AddBoothForm {...{ setBooths }} />
            {boothIsSelected && <DeleteButton selected={state.selected} {...{ setBooths }} />}
        </>}
        {!ADMIN && <>
            {boothIsSelected &&
                <div>{state.selected}
                    <button onClick={() => reserveBooth(state.selected, setBooths)}>Reserve Now</button>
                </div>}
        </>}
    </Container>
}

