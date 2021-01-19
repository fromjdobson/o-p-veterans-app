import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const MapContainer = styled.div`
    
    background-color: #E4EBE8;
    border: ${p => p.ADMIN ? '1px solid red' : 'none'};
    height: 800px;
    min-width: 800px;
    margin: 0px;
    padding: 5px;
`
export const StyledDeleteButton = styled.div`
    background-color: transparent;
    border: none;
    & img {
        cursor: pointer;
    }
`

