import React, { useState, memo, useEffect } from 'react';
import { StyledBooth } from './styledComponents'
import moveBooth from '../functions/databaseOperations/moveBooth'
import { stateMerger } from '../functions/helpers'
const snapToGrid = 4

export default memo(function Booth(props) {
    const { ADMIN, selected, id, top, left } = props
    const [state, stateSetter] = useState({
        left, top, ADMIN,
        isDragging: false,
    })
    useEffect(() => {
        dragElement(document.getElementById(id))
    }, [])
    console.log('rendered', id, state)
    const setState = stateMerger(stateSetter)
    var tempPosition = { left, top }

    const dragElement = (elmnt) => {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
        elmnt.onmousedown = handleMouseDown

        function handleMouseDown(e) {
            e = e || window.event;
            e.preventDefault()
            pos3 = e.clientX
            pos4 = e.clientY
            window.addEventListener('mouseup', handleMouseUp)
            window.addEventListener('mousemove', handleMouseMove)
        }

        function handleMouseMove (e) {
            e = e || window.event
            e.preventDefault()
            let s = snapToGrid
            let x = Math.round(e.clientX / s) * s
            let y = Math.round(e.clientY / s) * s
            pos1 = pos3 - x
            pos2 = pos4 - y
            pos3 = x
            pos4 = y
            tempPosition = {
                left: elmnt.offsetLeft - pos1,
                top: elmnt.offsetTop - pos2
            }
            elmnt.style.left = (tempPosition.left) + "px"
            elmnt.style.top = (tempPosition.top) + "px"
        }

        function handleMouseUp () {
            const hasMoved = tempPosition.left !== state.left || tempPosition.top !== state.top
            if (hasMoved) {
                setState({ ...tempPosition, isDragging: false })
                moveBooth({
                    id,
                    left: tempPosition.left,
                    top: tempPosition.top
                })
            } 
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }
    return <StyledBooth 
        {...state} 
        selected={selected} 
        id={id} 
        onMouseDown={()=>setState({isDragging:true})}
        onMouseUp={()=>setState({isDragging:false})}
    >{id}</StyledBooth>
})
