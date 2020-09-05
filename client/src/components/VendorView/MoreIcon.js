import React from 'react'
import styled from 'styled-components'
import moreIconDefault from '../../assets/icons/more-icon-default.svg'
import moreIconOpen from '../../assets/icons/more-icon-open.svg'

const MoreIconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function MoreIcon(props) {
    const { isOpen } = props

    function setIcon() {
        if (isOpen === false) {
            return <img src={moreIconDefault} alt={'Click for more options.'} />
        } else if (isOpen === true) {
            return <img src={moreIconOpen} alt={'Click for less options.'} />
        }
    }

    let icon = setIcon()

return (
        <MoreIconContainer>
            {icon}
        </MoreIconContainer>
    )
}