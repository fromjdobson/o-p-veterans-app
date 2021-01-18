import React, { useState, memo, useEffect } from 'react';
import StyledBooth from '../styledComponents/Booth'
import { stateMerger } from '../../functions/helpers'
import draggable from './functions/draggable'

export default memo(function Booth(props) {
    const { ADMIN, selected, id, top, left } = props
    const [state, stateSetter] = useState({
        left, top, ADMIN,
        isDragging: false,
    })
    const setState = stateMerger(stateSetter)

    console.log('rendered', id, state)

    useEffect(() => {
        draggable({
            state, setState, 
            el: document.getElementById(id),
        })
    })

    return <StyledBooth
        {...state}
        selected={selected}
        id={id}
        onMouseDown={() => setState({ isDragging: true })}
        onMouseUp={() => state.isDragging && setState({ isDragging: false })}
    >{id}</StyledBooth>
})
