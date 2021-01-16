import React from 'react'
import addBooth from '../functions/addBooth'

export default function AddBoothForm({callback}){
    const handleSubmit = e => {
        e.preventDefault()
        addBooth({ 
            label: e.target.label.value, 
            left: 210, 
            top: 1 
        },callback)
    }
    return <form onSubmit={handleSubmit}>
    <input type='text' name='label' placeholder='add a new booth' />
    <button>+</button>
</form>
}