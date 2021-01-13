import React from 'react'
import styled from 'styled-components'
import InfoToggle from './InfoToggle'
import {
    setInfo,
    setExpandDisplay
} from './utils'

const InfoContainer = styled.div`
    width: 328px;
    /* padding: 8px 0px 8px 0px; */
    height: 256px;
    display: ${props => props.display};
    background: rgb(255, 255, 255);
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
        color: #4E6A5B;
        /* border: 1px dotted blue; */
    }
`

export default function ListItemInfo(props) {
    const {
        className, 
        vendorInfo,
        toggleState,
        setToggleState,
        isExpanded
    } = props


    let info = setInfo(toggleState, vendorInfo)
    // console.log(info)


    return (
        <InfoContainer display={`${setExpandDisplay(isExpanded)}`} className={className}>
            <InfoToggle toggleState={toggleState} setToggleState={setToggleState} />
            {info.map((paragraph, idx) => {
                return <p key={idx}>{paragraph}</p>
            })}
        </InfoContainer>
    )
}
