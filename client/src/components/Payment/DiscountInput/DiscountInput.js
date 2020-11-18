import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'

const DiscountContainer = styled.div`
    /* max-width: 375px; */
    padding: 48px 60px 48px 60px;

    display: flex;
    justify-content: center;
    /* border: 1px dotted dodgerblue; */
    border: 1px solid #EAEAEA;

`

const RowContainer = styled.div`
    /* width: 100%; */
    min-width: 256px;
    position: relative;
    display: flex;
    /* border: 1px solid orange; */
`

export default function DiscountInput() {
    return (
        <DiscountContainer>
            <RowContainer>
                <Input label={'Discount code'} />
                <Button buttonText={'Apply'} />
            </RowContainer>
        </DiscountContainer>
    )
}