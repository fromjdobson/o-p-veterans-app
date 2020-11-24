import React from "react";
import styled from "styled-components";
import BoothSquare from "./BoothSquare";

const BoothsWrapper = styled.div`
  border: 1px solid red;
  position: absolute;
  width: 840px;
  height: 1340px;
  left: 70px;
  top: 16px;
`;

const BoothGroup7 = styled.div`
  position: relative;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 998px;
  left: 70px;
  top: 340px;
`;

export default function Booths() {
  return (
    <BoothsWrapper>
      <BoothGroup7>
        <BoothSquare boothNumber={"A"} />
        <BoothSquare boothNumber={"A"} />
        <BoothSquare boothNumber={"A"} />
        <BoothSquare boothNumber={"A"} />
        <BoothSquare boothNumber={"A"} />
        <BoothSquare boothNumber={"A"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
        <BoothSquare boothNumber={"B"} />
      </BoothGroup7>
    </BoothsWrapper>
  );
}
