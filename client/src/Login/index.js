import React from 'react'
import {Container, OPVeteran, VetFest, RegisterWith, Or } from './StyledComponents'
import WithGoogle from './WithGoogle'
import WithEmail from './WithEmail/index.js'
import {LogoTop} from '../ReUsables/Logos'

export default function Login() {
    return <Container>

        <LogoTop/>
        <OPVeteran/>
        <VetFest/>

        <RegisterWith/>
        <WithGoogle/>
        <Or/>
        <WithEmail/>

    </Container>
}