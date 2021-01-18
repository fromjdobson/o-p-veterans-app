import React, {memo} from 'react'
import deleteBooth from '../functions/databaseOperations/deleteBooth'
import trashIcon from '../../assets/Icons/trash.png'
import { StyledDeleteButton } from '../components/styledComponents'

export default memo(function DeleteButton({ selected, setBooths }) {
    console.log('render delete button')
    
    const handleClick = () => {
        deleteBooth(selected, setBooths)
    }
    return <StyledDeleteButton onClick={handleClick}>
        <img src={trashIcon} alt='delete booth' width='22' />
        {selected}
    </StyledDeleteButton>
})