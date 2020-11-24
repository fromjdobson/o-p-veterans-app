import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 32px;
  height: 32px;
  background: #799c8a;

  & > p {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;
  }
`;

export default function BoothSquare(props) {
  const { boothNumber } = props;
  return (
    <Container>
      <p>{boothNumber}</p>
    </Container>
  );
}
