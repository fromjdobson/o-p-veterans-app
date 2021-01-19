import React, { useState, useEffect } from 'react'
import { MapContainer, Container } from './styledComponents'
import Booths from './components/Booths'
import AddBoothForm from './components/AddBoothForm'
import DeleteButton from './components/DeleteButton'
import getBooths from './functions/databaseOperations/getBooths'
import { stateMerger } from './functions/helpers'
import LegendKey from './components/LegendKey'
import Form from './components/Form/'

export default function BoothMap({ onChange, ADMIN, blockPullFromDB }) {
    const [state, stateSetter] = useState({
        ADMIN,
        selected: ""
    })
    const [booths, setBooths] = useState([])
    const setState = stateMerger(stateSetter)
    onChange({ state, setState })
    useEffect(() => {
        blockPullFromDB
            ? setBooths(JSON.parse(localStorage.getItem('booths')))
            : getBooths(setBooths)
    }, [blockPullFromDB])

    const boothIsSelected = booths.find(booth => booth.id === state.selected)
    const changeSelectedBooth = e => {
        const selected = e.target.textContent
        selected !== state.selected &&
        selected !== 'Reserve Now' &&
        e.target.id !== 'delete' &&
        setState({ selected: e.target.textContent })
    }

    const scale = window.screen.availWidth / 700
    return <Container>
        <MapContainer ADMIN={ADMIN} onMouseDown={changeSelectedBooth}>
            <LegendKey />
            <Booths {...state} booths={booths} />

            {ADMIN && <>
                <AddBoothForm {...{ setBooths }} />
                {boothIsSelected && <DeleteButton selected={state.selected} {...{ setBooths }} />}
            </>}
        </MapContainer>
            {!ADMIN && <Form selected={boothIsSelected ? boothIsSelected : false} setBooths={setBooths}/>}
    </Container>
}

