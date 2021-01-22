import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { TempDiagram } from '../components/TempDiagam/'
import { AdminList } from '../components/AdminList'
import { dummyInfoArr } from '../components/AdminList/utils'

const PageContainer = styled.div`
    height: 100%;
    background: #FFFFFF;

    & > .heading {
        box-sizing: border-box;
        margin: 0px;
        width: 328px;
        height: 64px;
        position: relative;
        top: 32px;
        left: calc(50% - 328px/2);
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        /* letter-spacing: 0.02em; */
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .sub-heading {
        box-sizing: border-box;
        margin: 0px;
        width: 328px;
        height: 48px;
        position: relative;
        top: 40px;
        left: calc(50% - 328px/2);
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #545454;
        /* border: 1px dotted blue; */
    }

    & > .diagram {
        position: relative;
        top: 72px;
        left: calc(50% - 328px/2);
    }

    & > .vendor-list {
        position: relative;
        top: 88px;
        left: calc(50% - 328px/2);
    }
`

export default function Admin({currentUser}) {

    return (
        <PageContainer>
            <Header {...{currentUser}}/>
            <h2 className={'heading'}>{(currentUser !== null) ? `Welcome, ${currentUser.name}.` : `Welcome, Admin.`}</h2>
            <h4 className={'sub-heading'}>{'Here is a current list and diagram of vendors registered for Vet Fest.'}</h4>
            <TempDiagram className={'diagram'} />
            <AdminList className={'vendor-list'} vendorInfo={dummyInfoArr} />
        </PageContainer>
    )
}
