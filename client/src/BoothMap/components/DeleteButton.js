import React, { memo } from 'react'
import deleteBooth from '../functions/databaseOperations/deleteBooth'
import trashIcon from '../../assets/Icons/trash.png'
import { StyledDeleteButton } from '../styledComponents'

export default memo(function DeleteButton(props) {
    const { setBooths, selected } = props
    const handleClick = () => {
        deleteBooth(selected.id, setBooths)
    }
    return <StyledDeleteButton>
        {selected.id && <>
            <img id='delete' src={trashIcon} alt='delete booth' width='42' onMouseUp={handleClick} />
            {selected.id}
        </>}
    </StyledDeleteButton>
})
