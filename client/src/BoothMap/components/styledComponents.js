import styled from 'styled-components'

export const Container = styled.div`
    background-color: #E4EBE8;
    border: ${p => p.ADMIN ? '1px solid red' : 'none'};
    height: 700px;
    width: 600px;
    /* transform: scale(0.5) */
`

const StaticStyledBooth = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #799C8A;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    color: #FAFAFA;
    width: 18px;
    height: 18px;
    text-align: center;
    user-select: none;

    &::before{
        content: "";
        border-left: 1px dotted red;
        border-right: 1px dotted red;
        position: absolute;
        left: 0px;
        top: -1000px;
        width: 16px;
        height: 2000px;
    }
    &::after{
        content: "";
        border-bottom: 1px dotted red;
        border-top: 1px dotted red;
        position: absolute;
        top: 0px;
        left: -1000px;
        width: 2000px;
        height: 16px;
    }
`

export const StyledBooth = styled(StaticStyledBooth)`
    top: ${p => p.top + 'px'};
    left: ${p => p.left + 'px'};
    box-shadow: ${p => p.selected ? '0px 0px 3px 0.6px red' : 'none'};
    &:hover {
        cursor: ${p => p.ADMIN ? 'move' : 'pointer'};
    }
    &::before{
        display: ${p => p.isDragging ? 'inherit' : 'none'};
    }
    &::after{
        display: ${p => p.isDragging ? 'inherit' : 'none'};
    }
`

export const StyledDeleteButton = styled.button`
    background-color: transparent;
    border: none;
`