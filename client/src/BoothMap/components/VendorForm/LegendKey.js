import React from 'react'
import styled from 'styled-components'

const StyledLegend = styled.div`
    background-color: #FAFAFA;
    height: 68px;
    width: 124px;
    padding: 8px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1.5px 7px rgba(0, 0, 0, 0.12), 0px 2px 2.5px rgba(0, 0, 0, 0.2);
    font-size: 7px;
    font-style: normal;
    line-height: 12px;
    letter-spacing: 0.02em;
    text-align: left;
    & h1 {
        font-weight: 700;
        font-size: 8px;
    }
    & p {
        margin: 3px 8px;
    }
    & p::before {
        content: "";
        position: relative;
        display: inline-block;
        right: 8px;
        top: 3px;
        height: 10px;
        width: 10px;
        color: #FAFAFA;
        font-weight: bold;
        border: 1px solid #799C8A;
        font-size: 4px;
    }
    & p#available::before {
        background: #799C8A;
    }
    & p#reserved::before {
        background: #E4EBE8;
    }
    
`

export default function LegendKey() {

    return <StyledLegend>
        <h1>Key</h1>
        <div><p id='available'>Available</p></div>
        <div><p id='reserved'>Reserved</p></div>
    </StyledLegend>
}