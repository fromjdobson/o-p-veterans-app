import styled from 'styled-components'

const StaticStyledBooth = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    color: #FAFAFA;
    width: 18px;
    height: 18px;
    text-align: center;
    user-select: none;
    border: 2px solid #799C8A;

    &::before{
        content: "";
        border-left: 1px dotted red;
        border-right: 1px dotted red;
        position: absolute;
        left: -2px;
        top: -1000px;
        width: 16px;
        height: 2000px;
    }
    &::after{
        content: "";
        border-bottom: 1px dotted red;
        border-top: 1px dotted red;
        position: absolute;
        top: -2px;
        left: -1000px;
        width: 2000px;
        height: 16px;
    }
`

const StyledBoothWithCrossHair = styled(StaticStyledBooth)`
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

const StyledBooth = styled(StyledBoothWithCrossHair)`
    top: ${p => p.top + 'px'};
    left: ${p => p.left + 'px'};
    background: ${p=>p.reserved ? '#E4EBE8' : '#799C8A' };

`

export default StyledBooth