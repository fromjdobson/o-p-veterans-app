import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../../../providers/CurrentUser'
import { Header } from '../../Header'
import { AdminSearchBar } from '../../AdminSearchBar'
import { VendorList } from '../../VendorList'
// import { EditModal } from '../../EditModal'
// import closeIcon from '../../../assets/icons/Vector.svg'

const AdminViewContainer = styled.div`
    padding: 0px 24px 0px 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TitleContainer = styled.div`
    box-sizing: border-box;
    margin: 32px 0px 0px 0px;
    width: 100%;
`

const TitleText = styled.h2`
    margin: 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #545454;
`

const SubtitleText = styled.p`
    margin: 8px 0px 0px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #545454;
`

const MapPlaceholder = styled.div`
    margin: 32px 0px 0px 0px;
    width: 100%;
    height: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
    opacity: 0.5;

    & > p {
        margin: 0px;
        font-family: Open Sans;
        font-size: 32px;
        color: #FFFFFF;
    }
`

// const ModalBackdrop = styled.div`
//     min-width: 100vw;
//     min-height: 100vh;
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     right: 0px;
//     bottom: 0px;
//     display: ${props => props.display};
//     justify-content: center;
//     align-items: center;
//     background: rgba(84, 84, 84, 0.8);

//     & > img {
//         width: 24px;
//         height: 24px;
//         position: absolute;
//         top: 24px;
//         right: 24px;
//     }
// `

export default function AdminView() {
    const [currentUser] = useContext(CurrentUserContext)
    const newObj = {...currentUser}
    const { name } = newObj
    
    return (
        <AdminViewContainer>
            <Header />
            <TitleContainer>
                <TitleText>{`Welcome, ${name}.`}</TitleText>
                <SubtitleText>{'Here is a current list, and map, of vendors registered for Veteran Fest.'}</SubtitleText>
            </TitleContainer>
            <MapPlaceholder>
                <p>Diagram Placeholder</p>
            </MapPlaceholder>
            <AdminSearchBar />
            <VendorList />
            {/* <ModalBackdrop display={display}>
                <EditModal />
                <img src={closeIcon} alt={'Click to close.'} onClick={() => setIsModalOpen(false)} />
            </ModalBackdrop> */}
        </AdminViewContainer>
    )
}