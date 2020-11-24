import React from "react";
import styled from "styled-components";

const BoothsWrapper = styled.div`
  position: absolute;
  width: 849.66px;
  height: 1341.27px;
  left: 70px;
  top: 16.78px;
`;

const BoothSquare = styled.div`
  position: relative;
  width: 19.56px;
  height: 19.56px;
  left: 0px;
  top: 86.33px;

  /* Feldgrau/Tints & Shades/Light 3 */

  background: #799c8a;
`;

export default function Booths() {
  return (
    <BoothsWrapper>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
      <BoothSquare></BoothSquare>
    </BoothsWrapper>
  );
}
