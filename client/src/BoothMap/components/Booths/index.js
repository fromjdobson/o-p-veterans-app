import React, { useState, memo, useEffect } from 'react';
import StyledBooth from './StyledBooth'
import { stateMerger } from '../../../reusables/stateMerger'
import draggable from './functions/draggable'

const Booth = memo(function Booth(props) {
    const { ADMIN, selected, id, top, left, reserved } = props
    const [state, stateSetter] = useState({
        left, top, ADMIN, id,
        isDragging: selected
    })
    const setState = stateMerger(stateSetter)

    useEffect(() => {
        ADMIN && draggable({
            state, setState,
            el: document.getElementById(id),
        })
    })

    return <StyledBooth {...state} {...{ selected, id, reserved }}>{id}</StyledBooth>
})

export default function Booths(props) {
    return props.booths.map(doc => <Booth
        key={doc.id}
        {...doc}
        ADMIN={props.ADMIN}
        selected={props.selected === doc.id} />)
}

