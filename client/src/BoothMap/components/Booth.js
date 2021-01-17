import React, { useState, memo } from 'react';
import { StyledBooth } from './styledComponents'
import moveBooth from '../functions/databaseOperations/moveBooth'
import { stateMerger } from '../functions/helpers'
const snapToGrid = 2

export default memo(function Booth(props) {
    const { ADMIN, selected, id, top, left } = props
    const [state, stateSetter] = useState({
        left, top, ADMIN,
        isDragging: false,
    })

    console.log('rendered booth',id)

    const setState = stateMerger(stateSetter)

    const handleDrag = e => {
        let offsetX = state.left - e.clientX
        let offsetY = state.top - e.clientY
        const move = e => {
            let s = snapToGrid
            setState({
                top: Math.round((e.y + offsetY) / s) * s,
                left: Math.round((e.x + offsetX) / s) * s,
                isDragging: true
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
        const hasMoved = left!==state.left || top!==state.top
        if(hasMoved) moveBooth({ 
            id, 
            left: state.left, 
            top: state.top 
        })
        if(state.isDragging) setState({ isDragging: false })
    }

    return <StyledBooth {...state} selected={selected}
        onMouseDown={ADMIN && handleDrag}
        onMouseUp={ADMIN && handleMouseUp}
    >{id}</StyledBooth>
})
