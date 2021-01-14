import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../providers/CurrentUser'
import Input from './Input'
import NextButton from './NextButton'

const FormContainer = styled.div`
    width: 328px;
    height: 144px;
    position: relative;
    top: 224px;
    left: calc(50% - 328px/2);
    /* border: 2px dotted orange; */

    & > h3 {
        margin: 0px;
        width: 100%;
        height: 24px;
        position: absolute;
        top: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #303030;
        /* border: 1px dotted blue; */
    }

    & > .form-input {
        position: absolute;
        top: 32px;
    }

    & > p {
        margin: 0px;
        width: 100%;
        height: 16px;
        position: absolute;
        top: 88px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #EA7C7C;
        /* border: 1px dotted blue; */
    }

    & > .next-button {
        position: absolute;
        top: 120px;
        right: 0px;
    }
`

export default function Form() {
    const [currentUser] = useContext(UserContext)

    if (currentUser === null) {
        
        console.log('null')
    } else if (currentUser !== null) {
        console.log(currentUser.name)
    }
    
    
    return (
        <FormContainer>
            <h3>{'Label'}</h3>
            <Input className={'form-input'} />
            <p>{'Placeholder helper text.'}</p>
            <NextButton className={'next-button'} />
        </FormContainer>
    )
}