import React from 'react'
import styled from 'styled-components'
import TextButton from './TextButton'
import successCheckmark from '../../assets/Icons/success-checkmark.svg'

const SuccessContainer = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    /* border: 1px solid pink; */
`

const ImageContainer = styled.div`
    width: 80px;
    height: 80px;
    /* border: 1px dotted black; */

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function Success() {
    return (
        <SuccessContainer>
            <ImageContainer>
                <img src={successCheckmark} alt={'Success.'} />
            </ImageContainer>
            <TextButton buttonText={'Close'} />
        </SuccessContainer>
    )
}