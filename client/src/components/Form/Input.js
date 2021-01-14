import React from 'react'
import styled from 'styled-components'
import warningIcon from '../../assets/Icons/input-warning-icon.svg'

const InputContainer = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    /* border: 1px dotted black; */
    border-bottom: 1px solid #303030;
    border-bottom: ${props => props.borderBottom};


    & > input {
        box-sizing: border-box;
        width: 288px;
        height: 40px;
        position: absolute;
        left: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 28px;
        line-height: 32px;
        display: flex;
        align-items: center;
        color: #303030;
        border: none;
        /* background: lightgreen; */
        /* border-top: none;
        border-right: 1px dotted red;
        border-bottom: none;
        border-left: none; */
        outline: none;
    }

    & > img {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 0px;
        top: calc(50% - 24px/2);
        display: ${props => props.display};
        /* border: 1px dotted blue; */
    }
`

export default function Input(props) {
    const { className, borderBottom, helperIconDisplay } = props
    console.log(helperIconDisplay)

    return (
        <InputContainer className={className} borderBottom={borderBottom}>
            <input />
            <img src={warningIcon} alt={'Validation warning icon.'} display={helperIconDisplay} />
        </InputContainer>
    )
}
