import React from 'react'
import styled from 'styled-components'
import { SelectionCard } from './SelectionCard'

const SelectionContainer = styled.div`
    /* border: 1px dashed lightcoral; */
`

export default function Selection() {
    return (
        <SelectionContainer>
            <br />
            <SelectionCard />
        </SelectionContainer>
    )
}
