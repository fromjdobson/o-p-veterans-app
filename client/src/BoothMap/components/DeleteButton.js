import React from 'react'
import deleteBooth from '../functions/deleteBooth'
import trashIcon from '../../assets/Icons/trash.png'
import { StyledDeleteButton } from '../components/styledComponents'

export default function DeleteButton({ selectorHook, setState }) {

    const handleClick = () => {
        deleteBooth(selectorHook[0], setState)
    }
    return <StyledDeleteButton onClick={handleClick}>
        <img src={trashIcon} alt='delete booth' width='22' />
        {selectorHook[0]}
    </StyledDeleteButton>
}