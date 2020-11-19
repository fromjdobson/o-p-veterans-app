import React from 'react'
import styled from 'styled-components'
import closedIcon from '../../assets/Icons/card-closed-icon.svg'

const OpenIconContainer = styled.div`
    min-width: 24px;
    min-height: 24px;
    /* border: 1px dotted dodgerblue; */

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

    // function expandContainer(status) {
    //     if (status === false) {
    //         return {
    //             display: `none`
    //         }
    //     } else if (status === true) {
    //         return {
    //             display: `block`
    //         }
    //     }
    // }

    // console.log(display)

    // let handleClick = setExpandStatus(state)
    // console.log(handleClick)
    
    // function handleClick(input) {
    //     if (isExpanded === false) {
    //         setIsExpanded(true)
    //     }  else if (isExpanded === true) {
    //         setIsExpanded(false)
    //     }
    // }

    return (
        <OpenIconContainer onClick={() => setExpandStatus(state)}>
            <img src={closedIcon} alt={'Click to epxand.'} />
        </OpenIconContainer>
    )
}