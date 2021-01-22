import React, { memo } from 'react'
import {create} from '../../../reusables/firestoreCRUD'

export default memo(function AddBoothForm({ setBooths }) {
    const handleSubmit = e => {
        let id = prompt((e.invalid ? e.invalid : '') + "Enter a booth label")
        console.log(id)
        if (id===null) return
        if (id==='') return handleSubmit({...e,invalid:"Invalid entry. "})

        const data = {
            id,
            left: 210,
            top: 12,
        }
        create({data}).then(() => {
            setBooths(p=>[...p,data]) 
        })
    }
    return <button onClick={handleSubmit}>New Booth +</button>
})