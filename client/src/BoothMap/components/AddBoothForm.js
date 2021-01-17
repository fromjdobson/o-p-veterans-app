import React from 'react'
import addBoothToDB from '../functions/databaseOperations/addBooth'

export default function AddBoothForm({setBooths}){
    const handleSubmit = e => {
        e.preventDefault()
        const id = e.target.label.value
        if(id.length===0) {
            alert('Wait! Please give your booth a label first.')
            return
        }
        
        addBoothToDB({ 
            id, 
            left: 210, 
            top: 12 
        },setBooths)
    }
    return <form onSubmit={handleSubmit}>
    <input type='text' name='label' placeholder='add a new booth' />
    <button>+</button>
</form>
}