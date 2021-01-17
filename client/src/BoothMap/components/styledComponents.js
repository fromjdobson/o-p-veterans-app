import styled from 'styled-components'

export const Container = styled.div`
    background-color: #E4EBE8;
    border: ${p=>p.ADMIN ? '1px solid red' : 'none'};
    height: 80vh;
    
`

export const StyledBooth = styled.div`
    display: inline-block;
    position: absolute;
    top: ${props => props.top + 'px'};
    left: ${props => props.left + 'px'};
    background: #799C8A;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    color: #FAFAFA;
    padding: 2px;
    user-select: none;
    box-shadow: ${p=>p.selected ? '0px 0px 0px 1px red' : 'none'};
    &:hover {
        cursor: ${p => p.ADMIN ? 'move' : 'pointer'} 
    }
`

export const StyledDeleteButton = styled.button`
    background-color: transparent;
    border: none;
`