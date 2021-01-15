import React from 'react'
import styled from 'styled-components'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom'
import { Header } from '../components/Header'
import {
    Route1,
    Route2,
    Route3
} from './demoRoutes/index'
import { Form } from '../components/Form'

const PageContainer = styled.div`
    height: 100%;
    position: relative;
    /* background: lightseagreen; */

    & > h2 {
        margin: 0px;
        width: 400px;
        height: 48px;
        position: relative;
        top: 80px;
        left: calc(50% - 400px/2);
        font-size: 48px;
        font-family: Open Sans;
        line-height: 48px;
        text-align: center;
        color: #303030;
        text-transform: uppercase;
        border: 1px dotted blue;
    }

    & > .nav-container {
        width: 528px;
        height: 32px;
        position: absolute;
        top: 104px;
        left: calc(50% - 528px/2);
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* border: 2px dashed blue; */

        & > a {
            margin: 0px;
            width: 104px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            line-height: 24px;
            color: #303030;
            text-decoration: none;
            text-transform: uppercase;
            /* border: 1px dotted blue; */
        }
    }

    & > .example-div {
        width: 528px;
        height: 600px;
        position: absolute;
        top: 160px;
        left: calc(50% - 528px/2);
        /* border: 2px dashed orange; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default function Vendor() {
    let { path, url } = useRouteMatch()

    return (
        <PageContainer>
            <Header />
            <div className={'nav-container'}>
                <Link to={`${url}/routeone`}>Route 1</Link>
                <Link to={`${url}/routetwo`}>Route 2</Link>
                <Link to={`${url}/routethree`}>Route 3</Link>
            </div>
            <div className={'example-div'}>
                <Switch>
                    <Route exact path={path}><p>Please select a route from above...</p></Route>
                    <Route path={`${path}/routeone`}>
                        <Route1 />
                    </Route>
                    <Route path={`${path}/routetwo`}>
                        <Route2 />
                    </Route>
                    <Route path={`${path}/routethree`}>
                        <Route3 />
                    </Route>
                </Switch>
            </div>
            {/* <Form /> */}
        </PageContainer>
    )
}
