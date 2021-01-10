import React from 'react'
import styled from 'styled-components'
import InfoToggle from './InfoToggle'

const InfoContainer = styled.div`
    width: 328px;
    /* padding: 8px 0px 8px 0px; */
    /* height: 240px; */
    display: ${props => props.display};
    background: #FFFFFF;
    /* border: 1px solid #CCCCCC; */

    & > p {
        margin: 8px 0px 8px 0px;
        padding: 0px 16px 0px 16px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #545454;
        /* border: 1px dotted blue; */
    }
`

export default function ListItemInfo(props) {
    const { className, isExpandOpen, vendorInfo, toggleState, setToggleState } = props
    // console.log(toggleState)

    function setExpandDisplay(status) {
        if (status === false) {
            return `none`
        } else if (status === true) {
            return `block`
        }
    }

    return (
        <InfoContainer display={`${setExpandDisplay(isExpandOpen)}`} className={className}>
            <InfoToggle toggleState={toggleState} setToggleState={setToggleState} />
            <p>{'inf pararaph'}</p>
            <p>{'inf pararaph'}</p>
            <p>{'inf pararaph'}</p>

        </InfoContainer>
    )
}
