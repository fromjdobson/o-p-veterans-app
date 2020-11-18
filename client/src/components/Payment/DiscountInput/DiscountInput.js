import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'

const DiscountContainer = styled.div`
    padding: 48px 60px 48px 60px;
    display: flex;
    justify-content: center;
    border: 1px solid #EAEAEA;

    @media (min-width: 768px) {
        padding: 118px 60px 118px 60px;
    }
`

const RowContainer = styled.div`
    min-width: 256px;
    position: relative;
    display: flex;
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