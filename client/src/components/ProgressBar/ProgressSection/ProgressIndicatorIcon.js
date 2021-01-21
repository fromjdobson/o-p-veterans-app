import React from 'react'
import styled from 'styled-components'
import { setOpacity } from './utils'
import { ReactComponent as ActiveIcon } from '../../../assets/icons/dot-icon.svg'

const IconContainer = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.opacity};
`

export default function ProgressIndicatorIcon(props) {
    const { status } = props
    let opacity = setOpacity(status)

    return (
        <IconContainer>
            <ActiveIcon opacity={opacity} />
        </IconContainer>
    )
}