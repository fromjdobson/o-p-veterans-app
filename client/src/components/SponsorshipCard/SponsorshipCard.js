import React from "react";
import styled from "styled-components";
import LevelLogo from './LevelLogo'
import { OtherSponsors } from './OtherSponsors'
import { Button } from '../Button'
import { Perks } from './Perks'

const SponsorshipCardContainer = styled.div`
  box-sizing: border-box;
  max-width: 344px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 16px 16px;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  & > h2 {
    margin: 24px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #545454;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
    border: 2px solid rgba(244, 184, 96, 0.5);
  }
`

const DividerDiv = styled.div`
  margin: 24px 0px 24px 0px;
  width: 100%;
  height: 1px;
  background: #EAEAEA;
`

export default function SponsorshipCard() {

  return (
    <SponsorshipCardContainer>
      <LevelLogo />
      <h2>{'$99,999'}</h2>
      <OtherSponsors />
      <Button buttonStyle={'primary'} buttonText={'SELECT THIS LEVEL'} />
      <DividerDiv />
      <Perks />
    </SponsorshipCardContainer>
  )
}
