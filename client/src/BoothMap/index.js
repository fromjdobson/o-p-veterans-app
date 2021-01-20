import React, { useState, useEffect } from 'react'
import { MapContainer, Container } from './styledComponents'
import Booths from './components/Booths'
import getBooths from './functions/databaseOperations/getBooths'
import { stateMerger } from './functions/helpers'
import LegendKey from './components/LegendKey'
import VendorForm from './components/VendorForm'
import AdminForm from './components/AdminForm'

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

    const selected = booths.find(booth => booth.id === state.selected) || false
    const changeSelectedBooth = e => {
        const selected = e.target.textContent
        selected !== state.selected &&
        selected !== 'Reserve Now' &&
        e.target.id !== 'delete' &&
        setState({ selected: e.target.textContent })
    }

    return <Container>
        <MapContainer ADMIN={ADMIN} onMouseDown={changeSelectedBooth}>
            <LegendKey />
            <Booths {...state} booths={booths} />
        </MapContainer>
        {ADMIN 
            ? <AdminForm {...{setBooths,selected}}/> 
            : <VendorForm {...{setBooths,selected}}/>}
    </Container>
}

