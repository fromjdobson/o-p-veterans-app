import styled from 'styled-components'

export const Container = styled.div`
    background-color: #E4EBE8;
    height: 60vh;
    
`

export const StyledBooth = styled.div`
    display: inline-block;
    position: absolute;
    top: ${props=>props.top+'px'};
    left: ${props=>props.left+'px'};
    background: #799C8A;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    color: #FAFAFA;
    padding: 2px;
    user-select: none;
    &:hover { 
        cursor: move;
    }
`
