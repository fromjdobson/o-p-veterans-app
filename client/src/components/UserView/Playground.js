import React from "react";
import styled from "styled-components";

import { Header } from "../Header";
import { Button } from "../Button";
import { TextButton } from "../TextButton";
import { Input } from "../Input";
import { ProgressBar } from "../ProgressBar";
import { StatusMessage } from "../StatusMessage";
import { ImageGallery } from "../ImageGallery";
import { AdminSearchBar } from '../AdminSearchBar'
import { VendorListItem } from '../VendorListItem'


const PlaygroundContainer = styled.div`
    /* border: 2px solid green; */
`

const ComponentWrapper = styled.div`
  box-sizing: border-box;
  width: 312px;
  border: 1px dotted green;
  & > h2 {
    margin: 64px 0px 16px 0px;
    font-size: 32px;
    font-family: Open Sans;
    font-weight: 700;
    /* border: 1px solid lightcoral; */
  }
  & > h3 {
    margin: 16px 0px 8px 0px;
    font-size: 16px;
    font-family: Open Sans;
    font-weight: 400;
    /* border: 1px solid dodgerblue; */
  }
  & > h4 {
    margin: 16px 0px 8px 0px;
    font-size: 20px;
    font-family: Open Sans;
    font-weight: 600;
    text-decoration: underline;
    /* border: 1px solid dodgerblue; */
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export default function Playground() {
    return (
        <PlaygroundContainer>
            <AdminSearchBar />
            <VendorListItem />
        </PlaygroundContainer>
    )
}
