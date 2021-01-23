import React, { useState, useEffect } from 'react'
import { MapContainer, Container } from './styledComponents'
import Booths from './components/Booths'
import {read} from '../reusables/firestoreCRUD'
import { stateMerger } from '../reusables/stateMerger'
import LegendKey from './components/VendorForm/LegendKey'
import VendorForm from './components/VendorForm'
import AdminForm from './components/AdminForm'

export default function BoothMap({ ADMIN, blockPullFromDB }) {
    const [state, stateSetter] = useState({
        ADMIN,
        selected: ""
    })
    const [booths, setBooths] = useState([])
    const setState = stateMerger(stateSetter)
    useEffect(() => {
        blockPullFromDB
            ? setBooths(JSON.parse(localStorage.getItem('booths')))
            : read().then(res=>setBooths(res))
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

