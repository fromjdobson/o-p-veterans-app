import React, { useState, memo } from 'react';
import { StyledBooth } from './styledComponents'
import updateBooth from '../functions/moveBooth'
const snapToGrid = 2

export default memo(function Booth(props) {
    const { doc: { id, data: { label, left, top } }, ADMIN, selected } = props
    console.log('render booth', id)

    const [state, stateSetter] = useState({ left, top, isDragging: false })
    const setState = newVals => stateSetter(p => ({ ...p, ...newVals }))

    const handleDrag = e => {
        setState({ isDragging: true })
        let offsetX = state.left - e.clientX;
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
        updateBooth({
            id: id,
            boothinfo: {
                left: state.left,
                top: state.top
            }
        })
        setState({ isDragging: false })
    }

    return <StyledBooth {...state} ADMIN={ADMIN} selected={selected} dragging={state.isDragging}
        onMouseDown={ADMIN && handleDrag}
        onMouseUp={ADMIN && handleMouseUp}
    >{label}</StyledBooth>
})