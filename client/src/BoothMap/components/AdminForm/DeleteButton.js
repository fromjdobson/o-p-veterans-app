import React, { memo } from 'react'
import trashIcon from '../../../assets/icons/trash.png'
import { StyledDeleteButton } from '../../styledComponents'
import {destroy} from '../../../reusables/firestoreCRUD'

export default memo(function DeleteButton(props) {
    const { setBooths, selected } = props
    const handleClick = () => {
        destroy({data:selected}).then(()=>setBooths(prev=> prev.filter(booth=>booth.id!==props.selected.id)))
    }
    return <StyledDeleteButton>
        {selected.id && <>
            <img id='delete' src={trashIcon} alt='delete booth' width='42' onMouseUp={handleClick} />
            {selected.id}
        </>}
    </StyledDeleteButton>
})
