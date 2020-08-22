import React from 'react'
import styled from 'styled-components'
import BackButton from './BackButton'
import UserAvatar from './UserAvatar'

import opVetLogo40px from '../../images/opvet-logo-40px.svg'

const HeaderContainer = styled.div`
    padding: 16px 16px 16px 16px;
    min-height: 64px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #DAD3C1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
`

const HeaderLogoContainer = styled.div`
    width: 48px;
    height: 48px;

    @media (min-width: 768px) {
        width: 72px;
        height: 72px;
    }

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <BackButton />
            <HeaderLogoContainer>
                <img src={opVetLogo40px} alt={'O.P. Veteran logo'} />
            </HeaderLogoContainer>
            <UserAvatar isLoggedIn={true} />
        </HeaderContainer>
    )
}