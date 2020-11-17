import React from 'react'
import styled from 'styled-components'
import abramsLevelImg from '../../assets/logos/abrams-sponsor-logo.png'

const LevelLogoContainer = styled.div`
    width: 150px;
    height: 150px;
    /* border: 1px dotted black; */
`

export default function LevelLogo() {
    return (
        <LevelLogoContainer>
            <img src={abramsLevelImg} alt={'Abrams level'} />
        </LevelLogoContainer>
    )
}