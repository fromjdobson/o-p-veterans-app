import React from 'react'
import styled from 'styled-components'

const DiagramContainer = styled.div`
    width: 200px;
    height: 200px;
    background: lightblue;

     & > p {
         margin: 0px;
     }
`

export default function TempDiagam() {
    return (
        <DiagramContainer>
            <p>Diagram</p>
        </DiagramContainer>
    )
}
