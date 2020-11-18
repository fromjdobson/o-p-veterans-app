import React from "react";
import styled from "styled-components";
import { Summary } from './Summary'
import HelperText from "./HelperText";
import WarningIcon from "./WarningIcon";

const PaymentContainer = styled.div`
  border: 1px solid black;
`

export default function Payment() {
  return (
    <PaymentContainer>
      <Summary />
    </PaymentContainer>
  )
}
