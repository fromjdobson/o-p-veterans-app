import React from 'react'
import styled from 'styled-components'

const AdminViewContainer = styled.div`
    margin-top: 60px;
    box-sizing: border-box;
    width: 328px;
    /* height: 600px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 24px 48px 24px;
    background: #DAD3C1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 624px;
        height: 720px;
        padding: 48px 80px 48px 80px;
    }
`  

export default function AdminView() {
    return(
        <AdminViewContainer>
            <h1>Admin Views</h1>
        </AdminViewContainer>
    )
}