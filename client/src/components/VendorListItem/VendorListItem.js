import React from 'react'
import styled from 'styled-components'
import OpenCloseIcon from './OpenCloseIcon'
import gruntStyleLogo from '../../assets/images/grunt-style-logo.jpg'

const VendorListItemContainer = styled.div`
    position: relative;
    width: 392px;
    /* height: 296px; */
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
    /* border: 1px solid lightcoral; */
`

const TopRowWrapper = styled.div`
    width: 100%;
    height: 56px;
    border: 1px solid lightcoral;
`

const BottomeRowWrapper = styled.div`
    width: 100%;
    border: 1px solid dodgerblue;

    & > p {
        margin:0px;
    }
`

export default function VendorListItem() {
    return (
        <VendorListItemContainer>
            <TopRowWrapper>
                <img src={gruntStyleLogo} alt={'Grunt Style logo.'} />
                <OpenCloseIcon isOpen={false} />
            </TopRowWrapper>
            <BottomeRowWrapper>
                <p>Bottom</p>
            </BottomeRowWrapper>
        </VendorListItemContainer>
    )
}