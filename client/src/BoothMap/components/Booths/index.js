import React, { useState, memo, useEffect } from 'react';
import StyledBooth from '../../styledComponents/Booth'
import { stateMerger } from '../../functions/helpers'
import draggable from './functions/draggable'

const Booth = memo(function Booth(props) {
    const { ADMIN, selected, id, top, left } = props
    const [state, stateSetter] = useState({
        left, top, ADMIN,id,
        isDragging: selected
    })
    const setState = stateMerger(stateSetter)

    useEffect(() => {
        draggable({
            state, setState,
            el: document.getElementById(id),
        })
    })

    return <StyledBooth {...state} {...{ selected, id }}>{id}</StyledBooth>
})

export default function Booths(props) {
    console.log('rebuilding booths list')
    const BoothsList = props.booths.map(doc => <Booth
        key={doc.id}
        {...doc}
        ADMIN={props.ADMIN}
        selected={props.selected === doc.id} />)

    return <>{BoothsList}</>
}

