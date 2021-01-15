import React from "react";
import styled from "styled-components";

const InputWarning = styled.caption`
  height: 16px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* Caption */

  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  margin-top: 5px;

  /* Geranium Lake/Tints & Shades/Light 3 */

  color: #ea7c7c;
`;

export default function HelperText() {
  return <InputWarning>{"Danger, Will Robinson"}</InputWarning>;
}
