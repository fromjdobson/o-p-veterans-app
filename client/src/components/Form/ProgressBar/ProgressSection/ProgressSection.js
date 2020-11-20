import React from 'react'
import styled from 'styled-components'

const ProgressSectionContainer = styled.div`
    border: 1px solid blue;
`

export default function ProgressSection() {
    return (
        <ProgressSectionContainer>
            <p>Section</p>
        </ProgressSectionContainer>
    )
}