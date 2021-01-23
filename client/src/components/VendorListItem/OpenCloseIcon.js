import React from 'react'
import styled from 'styled-components'
import { setIcon } from './utils'
import { ReactComponent as ClosedIcon } from '../../assets/Icons/card-closed-icon.svg'
import { ReactComponent as OpenIcon } from '../../assets/Icons/card-open-icon.svg'

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    top: calc(50% - 24px/2);
    right: 8px;
    /* border: 1px dotted blue; */
`

export default function OpenCloseIcon(props) {
    const { isOpen, onClick } = props
    let icon = setIcon(isOpen, <ClosedIcon />, <OpenIcon />)

    return (
        <IconContainer onClick={onClick}>
            {icon}
        </IconContainer>
    )
}