import React from 'react'
import addBooth from '../functions/addBooth'

export default function AddBoothForm({callback}){
    const handleSubmit = e => {
        e.preventDefault()
        const label = e.target.label.value
        if(label.length===0) {
            alert('Wait! Please give your booth a label first.')
            return
        }
        addBooth({ 
            label, 
            left: 210, 
            top: 1 
        },callback)
    }
    return <form onSubmit={handleSubmit}>
    <input type='text' name='label' placeholder='add a new booth' />
    <button>+</button>
</form>
}