import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ClosedIcon } from '../../assets/Icons/card-closed-icon.svg'
import { ReactComponent as OpenIcon } from '../../assets/Icons/card-open-icon.svg'

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    border: 1px dotted blue;
`

export default function OpenCloseIcon(props) {
    const { isOpen } = props

    function setIcon(status, icon1, icon2) {
        if (status === false) {
            return icon1
        } else if (status === true) {
            return icon2
        }
    }

    let icon = setIcon(isOpen, <ClosedIcon />, <OpenIcon />)
    return (
        <IconContainer>
            {icon}
        </IconContainer>
    )
}