import React from "react";
import styled from "styled-components";
import closeIcon from '../../assets/Icons/Vector.svg'

const CloseContainer = styled.div`
  width: 24px;
  height: 24px;
  display: ${props => props.display};

  & > img {
    width: 100%;
    height: 100%;
  }
`

export default function Close(props) {

  return (
    <CloseContainer>
        <img src={closeIcon} alt={'Click to close.'} />
    </CloseContainer>
  )
}