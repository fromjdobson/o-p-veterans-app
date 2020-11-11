import React from "react";
import styled from "styled-components";

import { AdminSearchBar } from "../AdminSearchBar";
import { VendorListItem } from "../VendorListItem";
import { SponsorshipCard } from "../SponsorshipCard";
import { Payment } from "../Payment";

const PlaygroundContainer = styled.div`
  /* border: 2px solid green; */
`;

export default function Playground() {
  return (
    <PlaygroundContainer>
      <AdminSearchBar />
      <VendorListItem />
      <SponsorshipCard />
      <Payment />
    </PlaygroundContainer>
  );
}
