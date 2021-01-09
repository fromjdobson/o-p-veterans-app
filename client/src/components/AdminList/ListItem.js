import React from 'react'
import styled from 'styled-components'
import cardClosedIcon from '../../assets/Icons/card-closed-icon.svg'

const ItemContainer = styled.div`
    width: 100%;
    height: 56px;
    position: relative;
    border: 1px solid black;

    & > .logo-image {
        box-sizing: border-box;
        /* height: 100%; */
        width: 56px;
        position: absolute;
        top: calc(50% - 56px/2);
        left: 8px;
        display: none;
        border: 1px dotted blue;
    }

    & > .vendor-name {
        margin: 0px;
        width: 224px;
        height: 24px;
        position: absolute;
        top: calc(50% - 24px/2);
        left: 8px;
        /* right: 88px; */
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #545454;
        border: 1px dotted blue;
    }

    & > .booth-number {
        margin: 0px;
        width: 40px;
        height: 24px;
        position: absolute;
        top: calc(50% - 24px/2);
        right: 40px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #545454;
        border: 1px dotted blue;
    }

    & > .more-icon {
        width: 24px;
        height: 24px;
        position: absolute;
        top: calc(50% - 24px/2);
        right: 8px;
        border: 1px dotted blue;
    }

`

export default function ListItem(props) {
    const { logoImage, vendorName, boothNumber } = props
    console.log(props)
    return (
        <ItemContainer>
            <img className={'logo-image'} src={logoImage} alt={'logo'} />
            <p className={'vendor-name'}>{vendorName}</p>
            <p className={'booth-number'}>{boothNumber}</p>
            <img className={'more-icon'} src={cardClosedIcon} alt={'Click to see less.'} />
        </ItemContainer>
    )
}
