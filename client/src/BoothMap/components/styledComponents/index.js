import styled from 'styled-components'

export const Container = styled.div`
    background-color: #E4EBE8;
    border: ${p => p.ADMIN ? '1px solid red' : 'none'};
    height: 700px;
    width: 600px;
    /* transform: scale(0.5) */
`

export const StyledDeleteButton = styled.button`
    background-color: transparent;
    border: none;
`