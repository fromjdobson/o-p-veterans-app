import React from 'react'
import styled from 'styled-components'

// import { Input } from '../Input'
// import { Button } from '../Button'

const MainContainer = styled.div`
  box-sizing: border-box;
  margin: 60px 0px 0px 0px;
  padding: 0px 24px 0px 24px;
  width: 328px;
  height: 600px;
  background: #DAD3C1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`

export default function Main() {
  return (
    <MainContainer>
      
      {/* <Input label={'Email'} warningStatus={true} warningMessage={'Helper text'} />
      <Input label={'Password'} warningStatus={true} warningMessage={'Helper text'} /> */}
      {/* <Button buttonText={'Sign In'} buttonStyle={'primary'} />
      <Button buttonText={'Join'} buttonStyle={'secondary'} /> */}
    </MainContainer>
  )
}