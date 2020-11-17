import React from "react";
import styled from "styled-components";
import LevelLogo from './LevelLogo'
import { OtherSponsors } from './OtherSponsors'
import { Button } from '../Button'
import { Perks } from './Perks'
// import { Button } from "../Button";

const SponsorshipCardContainer = styled.div`
  max-width: 344px;
  border: 1px solid lightcoral;

  & > h2 {
    margin: 0px;
    /* margin: 0px 24px; */
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #545454;
    /* border: 1px solid lightgreen; */
  }
`

const DividerDiv = styled.div`
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
