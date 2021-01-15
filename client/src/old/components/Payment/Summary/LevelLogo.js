import React from 'react'
import styled from 'styled-components'
import bradleyLevelLogo from '../../../assets/images/bradley-sponsor-logo.png'

const LogoContainer = styled.div`
    box-sizing: border-box;
    margin: 0px 16px 0px 0px;
    min-width: 64px;
    min-height: 64px;

    & > img {
        width: 64px;
        height: 64px;
    }
`

export default function LevelLogo() {
    return (
        <LogoContainer>
            <img src={bradleyLevelLogo} alt={'Bradley level sponsorship.'} />
        </LogoContainer>
    )
}