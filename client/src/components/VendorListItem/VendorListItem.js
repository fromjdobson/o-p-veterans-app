import React, { useState } from 'react'
import styled from 'styled-components'
import InfoToggle from './InfoToggle'
import OpenCloseIcon from './OpenCloseIcon'
import Details from './Details'
import gruntStyleLogo from '../../assets/images/atp-logo.png'

const VendorListItemContainer = styled.div`
    margin-top: 24px;
    position: relative;
    width: 328px;
    /* height: 296px; */
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
    /* border: 1px solid lightcoral; */
`

const TopRowWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 56px;
    display: flex;
    /* border: 1px solid lightcoral; */

    & > img {
        width: 56px;
        height: 56px;   
        position: absolute;
        top: calc(50% - 56px/2);
        left: 0px;
        display: none;     
    }

    & > p {
        margin: 0px;
        /* width: 224px; */
        height: 24px;
        position: absolute;
        top: calc(50% - 24px/2);
        left: 16px;
        right: 88px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #545454;
        /* border: 1px dotted orange; */
    }

    & > h6 {
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
        /* text-align: center; */
        color: #545454;
        /* border: 1px dotted orange; */
    }
`

const BottomeRowWrapper = styled.div`
    width: 100%;
    display: none;
    /* border: 1px solid dodgerblue; */
`

export default function VendorListItem() {
   const [isDetailsOpen, setIsDetailsOpen] = useState(false)

   function handleClick() {
       let rando

       if (isDetailsOpen === false) {
            rando = false
       } else if (isDetailsOpen === true) {
            rando = true
       }

       setIsDetailsOpen(rando)
   }
   console.log(isDetailsOpen)

    return (
        <VendorListItemContainer>
            <TopRowWrapper>
                <img src={gruntStyleLogo} alt={'Grunt Style logo.'} />
                <p>{'Bunty Soap Componay'}</p>
                <h6>{'A01'}</h6>
                <OpenCloseIcon isOpen={false} onClick={handleClick} />
            </TopRowWrapper>
            <BottomeRowWrapper>
                <InfoToggle />
                <Details />
            </BottomeRowWrapper>
        </VendorListItemContainer>
    )
}