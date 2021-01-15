import React from 'react'
import styled from 'styled-components'

const DiagramContainer = styled.div`
    width: 328px;
    height: 328px;
    background: lightblue;

     & > p {
         margin: 0px;
         width: 280px;
         height: 40px;
         position: relative;
         top: calc(50% - 24px/2);
         left: calc(50% - 280px/2);
         font-family: Open Sans;
         font-size: 40px;
         line-height: 40px;
         text-align: center;
         text-transform: uppercase;
         color: #303030;
     }
`

export default function TempDiagam(props) {
    const { className } = props

    return (
        <DiagramContainer className={className}>
            <p>Diagram</p>
        </DiagramContainer>
    )
}
