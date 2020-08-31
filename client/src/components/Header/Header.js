import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 0 50px 0;

  /* Other Colors/Pastel Gray */

  background: #dad3c1;

  /* Drop Shadow/4 dp */

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 1px 10px rgba(0, 0, 0, 0.2);
`;

const Greeting = styled.p`
  font-size: 25px;
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Greeting>Welcome.</Greeting>
      </HeaderContainer>
    </>
  );
}
