import React, { useState, memo } from 'react';
import { StyledBooth } from './styledComponents'
import updateBooth from '../functions/databaseOperations/moveBooth'
import { stateMerger } from '../functions/helpers'
const snapToGrid = 2

export default memo(function Booth(props) {
    const { 
        ADMIN, selected,
        doc: { id, top, left }
    } = props
    const [state, stateSetter] = useState({
        left, top, ADMIN,
        isDragging: false,
    })

    console.log('rendered booth',id)

    const setState = stateMerger(stateSetter)

    const handleDrag = e => {
        setState({ isDragging: true })
        let offsetX = state.left - e.clientX
        let offsetY = state.top - e.clientY
        const move = e => {
            let s = snapToGrid
            setState({
                top: Math.round((e.y + offsetY) / s) * s,
                left: Math.round((e.x + offsetX) / s) * s
            })
        }
        const stopmove = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', stopmove)
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', stopmove)
    }

    const handleMouseUp = () => {
        const { left, top } = state
        updateBooth({ id, left, top })
        setState({ isDragging: false })
    }

    return <StyledBooth {...state} selected={selected}
        onMouseDown={ADMIN && handleDrag}
        onMouseUp={ADMIN && handleMouseUp}
    >{id}</StyledBooth>
})
