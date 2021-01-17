import React from 'react'
import deleteBooth from '../functions/databaseOperations/deleteBooth'
import trashIcon from '../../assets/Icons/trash.png'
import { StyledDeleteButton } from '../components/styledComponents'

export default function DeleteButton({ selected, setBooths }) {
    
    const handleClick = () => {
        deleteBooth(selected, setBooths)
    }
    return <StyledDeleteButton onClick={handleClick}>
        <img src={trashIcon} alt='delete booth' width='22' />
        {selected}
    </StyledDeleteButton>
}
