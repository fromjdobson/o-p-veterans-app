import React from 'react'
import styled from 'styled-components'

import backArrow from '../../images/back-arrow-24px.svg'
import opVetLogo40px from '../../images/opvet-logo-40px.svg'
import userDefault40px from '../../images/user-default-40px.svg'

const HeaderContainer = styled.div`
    padding: 16px 16px 16px 16px;
    /* width: 375px; */
    min-height: 64px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #DAD3C1;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
`

const BackContainer = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    /* border: 1px solid lightcoral; */

    & > img {
        margin-right: 8px;
        width: 100%;
        height: 100%;
    }

    & > p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: none;
        align-items: center;
        letter-spacing: 0.01em;
        color: #403926;
    }
`

const HeaderLogoContainer = styled.div`
    width: 48px;
    height: 48px;
    /* border: 1px dotted gray; */

    & > img {
        width: 100%;
        height: 100%;
    }
`

const UserAvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    /* border: 1px dotted dodgerblue; */

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function Header(props) {
    console.log(props)
    return (
        <HeaderContainer>
            <BackContainer>
                <img src={backArrow} alt={'Go back to O.P. Veteran'} />
                <p>{'Exit'}</p>
            </BackContainer>
            <HeaderLogoContainer>
                <img src={opVetLogo40px} alt={'O.P. Veteran logo'} />
            </HeaderLogoContainer>
            <UserAvatarContainer>
                <img src={userDefault40px} alt={'User not logged in'} />
            </UserAvatarContainer>
        </HeaderContainer>
    )
}