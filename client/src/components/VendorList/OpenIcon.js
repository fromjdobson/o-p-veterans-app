import React from 'react'
import styled from 'styled-components'
import closedIcon from '../../assets/icons/card-closed-icon.svg'

const OpenIconContainer = styled.div`
    min-width: 24px;
    min-height: 24px;

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function OpenIcon(props) {
    const { expandObj } = props
    const { state, setter } = expandObj
    // const { display } = expandContainer(state)

    function setExpandStatus(status) {
        if (status === false) {
            setter(() => true)
        } else if (status === true) {
            setter(() => false)
        }
    }

    return (
        <OpenIconContainer onClick={() => setExpandStatus(state)}>
            <img src={closedIcon} alt={'Click to epxand.'} />
        </OpenIconContainer>
    )
}