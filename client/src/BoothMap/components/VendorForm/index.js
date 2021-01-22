import React from 'react'
import { FormContainer } from './StyledForm'
import buntylogo from '../../../assets/logos/abrams-sponsor-logo.png'
import {update} from '../../../reusables/firestoreCRUD'

export default function VendorForm(props) {
    function handleReserveClick() {
        update({ data: {...props.selected, reserved: true} })
            .then(() => props.setBooths(prev => prev
                    .map(booth => booth.id === props.selected.id ? { ...booth, reserved: true } : booth)))
    }
    return <FormContainer>
        <h1>Booth Selection</h1>
        <p>Select a booth from the diagram to view details and reserve your booth.</p>
        <div>
            <h2>Booth number:</h2>
            <h3 id='booth-selection-form-number'>{props.selected.id}</h3>
        </div>
        <div>
            <h2>Reserved by:</h2>
            <h3>{props.selected.reserved && 'Bunty Soap Company'}</h3>
            {props.selected.reserved && <img src={buntylogo} alt='bunty logo' width='60px' />}
        </div>
        <div>
            <h2>Powered:</h2>
            <h3>{props.selected && (props.selected.powered ? 'Yes' : 'No')}</h3>
        </div>
        <button disabled={props.selected.reserved || !props.selected}
            onClick={handleReserveClick}>RESERVE BOOTH</button>
    </FormContainer>
}