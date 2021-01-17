import React, {useState} from 'react';
import {StyledBooth} from './styledComponents'
import updateBooth from '../functions/updateBooth'
const snapToGridThresh = 5

export default function Booth({ doc:{ id, data:{ label, left, top } }, ADMIN, selectorHook }) {
    const [position, setPosition] = useState({ left, top })

    const handleDrag = e => {

        let offsetX = position.left - e.clientX;
        let offsetY = position.top - e.clientY
        const move = e => {
            let s = snapToGridThresh
            setPosition({
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
                left: position.left,
                top: position.top
            }
        })
    }

    return <StyledBooth {...position} ADMIN={ADMIN} selected={selectorHook[0]===id}
        onMouseDown={ADMIN && handleDrag}
        onMouseUp={ADMIN && handleMouseUp}
    >{label}</StyledBooth>
}