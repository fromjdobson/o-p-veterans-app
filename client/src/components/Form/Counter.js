import React from 'react'
import styled from 'styled-components'

const CoutnerContainer = styled.div`
    margin: 0px 0px 0px 8px;
    /* border: 1px dotted orange; */

    & > p {
        margin: 0px;
        /* min-width: 32px; */
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 24px;
        text-align: right;
        color: #545454;
    }
`

export default function Counter(props) {
    const { totalQuestions, currentQuestion } = props
    
    return (
        <CoutnerContainer>
            <p>{`${currentQuestion} / ${totalQuestions}`}</p>
        </CoutnerContainer>
    )
}