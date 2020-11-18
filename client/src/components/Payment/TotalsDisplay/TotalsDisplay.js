import React from 'react'
import styled from 'styled-components'

const TotalsContainer = styled.div`
    padding: 40px 80px 40px 80px;
    display: flex;
    justify-content: center;
    border: 1px solid #EAEAEA;

    @media (min-width: 768px) {
        padding: 92px 80px 92px 80px;
    }
`


const LabelText = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #545454;
    /* border: 1px dotted orange; */

`

const ValueText = styled.p`
    margin: 0px 0px 24px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #545454;
    /* border: 1px dotted orange; */
`

const MainText = styled.p`
    margin: 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #545454;
    /* border: 1px dotted orange; */
`

const LabelsContainer = styled.div`
    margin: 0px 8px 0px 0px;
    width: 128px;
    /* border: 1px solid black; */

    & > p {
        display: flex;
        justify-content: flex-end;
    }
`

const ValuesContainer = styled.div`
    margin: 0px 0px 0px 8px;
    width: 128px;
    /* border: 1px solid black; */

    & > p {
        display: flex;
        justify-content: flex-start;
    }
`

export default function TotalsDisplay() {
    return (
        <TotalsContainer>
            <LabelsContainer>
                <LabelText>{'Subtotal'}</LabelText>
                <LabelText>{'Tax'}</LabelText>
                <MainText>{'Total'}</MainText>
            </LabelsContainer>

            <ValuesContainer>
                <ValueText>{'$2,700.00'}</ValueText>
                <ValueText>{'$0'}</ValueText>
                <MainText>{'$2,700.00'}</MainText>
            </ValuesContainer>
        </TotalsContainer>
    )
}