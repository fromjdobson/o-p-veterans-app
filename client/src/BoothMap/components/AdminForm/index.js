import React from 'react'
import { FormContainer } from './StyledForm'
import AddBoothForm from '../AddBoothForm'
import DeleteButton from '../DeleteButton'

export default function AdminForm(props) {
    const {setBooths,selected} = props

    return <FormContainer>
            <h1>Booth Manager</h1>
            <p>Select a booth from the diagram to view details.</p>

            <AddBoothForm {...{ setBooths }} />
            <DeleteButton {...{ setBooths,selected }} />

            {/* <div>
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
                onClick={() => reserveBooth(props.selected.id, props.setBooths)}>RESERVE BOOTH</button> */}
        </FormContainer>
}