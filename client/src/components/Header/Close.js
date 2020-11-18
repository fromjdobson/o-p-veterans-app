import React, { useContext } from "react";
import styled from "styled-components";
// import { AppStateContext } from '../../providers/Store'
import closeIcon from '../../assets/Icons/Vector.svg'

const CloseContainer = styled.div`
  width: 40px;
  height: 40px;
  display: ${props => props.display};
  /* border: 1px dotted dodgerblue; */

  & > img {
    width: 100%;
    height: 100%;
  }
`

export default function Close(props) {
  const { display } = props
  // const [, setAppState] = useContext(AppStateContext)

  // function logOut() {
  //   setAppState({
  //     userLoggedIn: false,
  //     isLoading: false,
  //     currentUser: {
  //         userDetails: {
  //         firstName: '',
  //         lastName: '',
  //         userPhone: '',
  //         userEmail: '',
  //         isAdmin: false
  //         },
  //         vendorDetails: {
  //             vendorName: '',
  //             vendorDescription: '',
  //             vendorAddress: '',
  //             vendorAptSuite: '',
  //             vendorCity: '',
  //             vendorState: '',
  //             vendorZipcode: '',
  //             veteranOwned: false,
  //             nonProfitVendor: false,
  //             sponsorshipLevel: ''
  //         },
  //         eventDetails: {
  //             registrationComplete: false,
  //             paymentComplete: false,
  //             booth: {
  //                 boothNumber: '',
  //                 powered: ''
  //             }
  //         }
  //     }
  //   })
  // }

  return (
    <CloseContainer display={display}>
        <img src={closeIcon} alt={'Click to close.'} />
    </CloseContainer>
  )
}