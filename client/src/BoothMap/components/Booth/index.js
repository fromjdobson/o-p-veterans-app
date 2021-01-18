import React, { useState, memo, useEffect } from 'react';
import StyledBooth from '../styledComponents/Booth'
import { stateMerger } from '../../functions/helpers'
import draggable from './functions/draggable'

const Booth = memo((props) => {
    const { ADMIN, selected, id, top, left, isDragging } = props
    const [state, stateSetter] = useState({
        left, top, ADMIN, isDragging
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
    >{id}</StyledBooth>
})

export default Booth
