import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from '../../providers/CurrentUser'
import closeIcon from '../../assets/Icons/Vector.svg'
import { auth } from '../../firebase'

const CloseContainer = styled.div`
  width: 24px;
  height: 24px;
  display: ${props => props.display};

  & > img {
    width: 100%;
    height: 100%;
  }
`

export default function Close(props) {
  const [, setCurrentUser] = useContext(CurrentUserContext)

  function logout() {
    console.log(`logout(): fired`)
    auth.signOut().then(() => console.log(`User has been signed out.`))
    setCurrentUser({
        id: ``,
        name: ``,
        email: ``,
        phone: ``,
        userPhotoUrl: ``,
        vendorname: ``,
        vendordescription: '',
        streetaddress: '',
        suitenumber: '',
        city: '',
        state: '',
        zipcode: '',
        veteranowned: false,
        nonprofit: false,
        sponsorship: '',
        boothreserved: '',
        formcomplete: false,
        paymentcomplete: false,
        isAdmin: ''
    })
  }

  return (
    <CloseContainer onClick={() => logout()}>
        <img src={closeIcon} alt={'Click to close.'} />
    </CloseContainer>
  )
}