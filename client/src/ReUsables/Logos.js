import React from 'react'
import styled from 'styled-components'
import png from '../assets/images/vetfest-logo.png'

const props = {
    src: png,
    alt: 'Vetfest logo'
}

const LogoPlainStyle = styled.img`
`

const LogoTopStyle = styled.img`
    width: 160px;
    height: 40px;
    position: relative;
    top: 32px;
    left: calc(50% - 160px/2);
`

export const Logo =()=> <LogoPlainStyle {...props}/>
export const LogoTop =()=> <LogoTopStyle {...props}/>