import React from 'react'
import styled from 'styled-components'
import { Input } from './Input'

const MakePaymentContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default function MakePayment() {
    return (
        <MakePaymentContainer>
            <Input label={'Label'} />
        </MakePaymentContainer>
    )
}