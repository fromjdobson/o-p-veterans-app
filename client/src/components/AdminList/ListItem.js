import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    border: 1px dotted black;

    & > img {
        height: 40px;
        border: 1px dotted blue;
    }

    & > .vendor-name {
        margin: 0px;

        border: 1px dotted blue;
    }

    & > .booth-number {
        margin: 0px;

        border: 1px dotted blue;
    }
`

export default function ListItem(props) {
    const { vendorName, logo, boothNumber } = props
    return (
        <ItemContainer>
            <img src={logo} alt={'logo'} />
            <p className={'vendor-name'}>{vendorName}</p>
            <p className={'booth-number'}>{boothNumber}</p>
        </ItemContainer>
    )
}
