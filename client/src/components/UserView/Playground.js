import React from "react";
import styled from "styled-components";

import { AdminSearchBar } from "../AdminSearchBar";
import { VendorListItem } from "../VendorListItem";
import { SponsorshipCard } from "../SponsorshipCard";
// import { Payment } from "../Payment";

const PlaygroundContainer = styled.div`
  padding: 24px 24px 24px 24px;
  /* border: 2px solid green; */

  h1 {
    margin: 0px;
  }

  h3 {
    margin: 40px 0px 20px 0px;
  }
`

export default function Playground() {
  return (
    <PlaygroundContainer>
      <h1>Playground</h1>

      <h3>Sponsorship Card</h3>
      <SponsorshipCard />

      <h3>Admin Search Bar</h3>
      <AdminSearchBar />

      <h3>Vendor List Item</h3>
      <VendorListItem />

      <h3>Payment</h3>
      {/* <Payment /> */}
    </PlaygroundContainer>
  );
}
