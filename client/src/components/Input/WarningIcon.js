import React from 'react'
import styled from 'styled-components'
import warningTriangle from '../../assets/icons/warning-triangle.svg'

const WarningIconContainer = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        height: 24px;
    }
`

export default function WarningIcon(props) {
    const { warning } = props
    
    function setWarning(status) {
        if (status === false) {
            return <div></div>
        } else if (status === true) {
            return <img src={warningTriangle} alt={'Text did not pass validation.'} />
        }
    }

    let inputWarningIcon = setWarning(warning)    

    return (
        <WarningIconContainer>
            {inputWarningIcon}
            {/* <img src={warningTriangle} alt={'Text did not pass validation.'} /> */}
        </WarningIconContainer>
    )
}