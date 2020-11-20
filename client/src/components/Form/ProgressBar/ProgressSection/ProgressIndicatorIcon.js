import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ActiveIcon } from '../../../../assets/Icons/dot-icon.svg'

const IndicatorContainer = styled.div`
    opacity: ${props => props.opacity};
    border: 1px solid dotted black;
`

export default function ProgressIndicatorIcon(props) {
    const { status } = props

    function setOpacity(iconStatus) {
        if (iconStatus === 'active') {
            return 1.0
        } else if (iconStatus === 'inactive') {
            return 0.4
        }
    }

    let opacity = setOpacity(status)

    return (
        <IndicatorContainer>
            <ActiveIcon opacity={opacity} />
        </IndicatorContainer>
    )
}