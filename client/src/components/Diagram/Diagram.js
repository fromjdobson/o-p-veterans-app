import React from "react";
import styled from "styled-components";
import Booths from "./Booths";



const DiagramContainer = styled.div`
  position: absolute;
  width: 1000px;
  height: 1776px;
  left: 702px;
  top: 706px;
  overflow-y: scroll;

  /* Feldgrau/Tints & Shades/Light 7 */

  background: #e4ebe8;
`;

export default function Diagram() {
  return (
    <DiagramContainer>
      <Booths />
      <Booths />
    </DiagramContainer>
  );
}
