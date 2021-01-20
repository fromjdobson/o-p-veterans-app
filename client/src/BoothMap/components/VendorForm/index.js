import React from 'react'
import reserveBooth from '../../functions/databaseOperations/reserveBooth'
import { FormContainer } from './StyledForm'
import buntylogo from '../../../assets/logos/abrams-sponsor-logo.png'

export default function VendorForm(props) {
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
                {props.selected.reserved && <img src={buntylogo} alt='bunty logo' width='60px'/>}
            </div>
            <div>
                <h2>Powered:</h2>
                <h3>{props.selected && (props.selected.powered ? 'Yes' : 'No')}</h3>
            </div>
            <button disabled={props.selected.reserved || !props.selected}
                onClick={() => reserveBooth(props.selected.id, props.setBooths)}>RESERVE BOOTH</button>
        </FormContainer>
}