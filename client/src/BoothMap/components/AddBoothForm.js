import React, {memo} from 'react'
import addBoothToDB from '../functions/databaseOperations/addBooth'

export default memo(function AddBoothForm({setBooths}){
    const handleSubmit = e => {
        e.preventDefault()
        const id = e.target.label.value
        if(id.length===0) {
            alert('HANG ON! Type a NAME for your booth first.')
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
})