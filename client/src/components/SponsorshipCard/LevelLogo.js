import React from 'react'
import styled from 'styled-components'
import abramsLevelImg from '../../assets/images/logos/abrams-sponsor-logo.png'

const LevelLogoContainer = styled.div`
    box-sizing: border-box;
    width: 150px;
    height: 150px;
`

export default function LevelLogo() {
    return (
        <LevelLogoContainer>
            <img src={abramsLevelImg} alt={'Abrams level'} />
        </LevelLogoContainer>
    )
}