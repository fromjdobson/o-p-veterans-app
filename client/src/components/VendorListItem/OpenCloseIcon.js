import React from 'react'
import styled from 'styled-components'
import { setIcon } from './utils'
import { ReactComponent as ClosedIcon } from '../../assets/Icons/card-closed-icon.svg'
import { ReactComponent as OpenIcon } from '../../assets/Icons/card-open-icon.svg'

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
`

export default function OpenCloseIcon(props) {
    const { isOpen } = props
    let icon = setIcon(isOpen, <ClosedIcon />, <OpenIcon />)

    return (
        <IconContainer>
            {icon}
        </IconContainer>
    )
}