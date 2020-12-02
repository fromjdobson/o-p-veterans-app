import React from "react";
import styled from "styled-components";

const DiagramKeyContainer = styled.div`
  width: 250px;
  /* height: 128px; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 16px 16px 16px 16px;
  background: #fafafa;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.2);
  & > h4 {
    margin: 0px 0px 16px 0px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #545454;
  }
`;

const ExampleContainer = styled.div`
  margin: 0px 0px 8px 0px;
  display: flex;
  align-items: center;
  /* border: 1px solid green; */
  & > p {
    margin: 0px 0px 0px 16px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #545454;
  }
`;

const ActiveBoothExample = styled.div`
  background: #799c8a;
  width: 20px;
  height: 20px;
`;

const InactiveBoothExample = styled.div`
  background: #e4ebe8;
  width: 20px;
  height: 20px;
`;

export default function DiagramKey() {
  return (
    <DiagramKeyContainer>
      <h4>Key</h4>
      <ExampleContainer>
        <ActiveBoothExample />
        <p>{"Available"}</p>
      </ExampleContainer>

      <ExampleContainer>
        <InactiveBoothExample />
        <p>{"Reserved"}</p>
      </ExampleContainer>
    </DiagramKeyContainer>
  );
}
