import React from 'react'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom'
import styled from 'styled-components'

import {
    Subroute1,
    Subroute2,
    Subroute3
} from '../demoSubroutes'

const RouteContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: #9c1de7;

    & > h1 {
        margin: 0px;
        width: 328px;
        height: 40px;
        position: absolute;
        top: 40px;
        left: calc(50% - 328px/2);
        font-size: 40px;
        line-height: 40px;
        color: #FFFFFF;
        text-align: center;
        /* text-transform: uppercase; */
        /* border: 1px dotted #FFFFFF; */
    }

    & > .focus-nav {
        width: 344px;
        height: 32px;
        position: absolute;
        top: 88px;
        left: calc(50% - 344px/2);
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* border: 2px solid yellow; */

        & > a {
            margin: 0px;
            width: 112px;
            height: 24px;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            text-transform: uppercase;
            text-decoration: none;
            color: #faee1c;
            /* border: 1px dotted lightblue; */

        }
    }

    & > .focus-div {
        width: 344px;
        height: 280px;
        position: absolute;
        top: 128px;
        left: calc(50% - 344px/2);
        /* border: 2px solid white; */
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
    }
`

export default function Route2() {
    let { path, url } = useRouteMatch()

    return (
        <RouteContainer>
            <h1>Route 2</h1>
            <div className={'focus-nav'}>
                <Link to={`${url}/subrouteone`}>Subroute 1</Link>
                <Link to={`${url}/subroutetwo`}>Subroute 2</Link>
                <Link to={`${url}/subroutethree`}>Subroute 3</Link>
            </div>
            <div className={'focus-div'}>
                <Switch>
                    <Route exact path={path}>
                        <p>Please select ...</p>
                    </Route>
                    <Route path={`${path}/subrouteone`}>
                        <Subroute1 />
                    </Route>
                    <Route path={`${path}/subroutetwo`}>
                        <Subroute2 />
                    </Route>
                    <Route path={`${path}/subroutethree`}>
                        <Subroute3 />
                    </Route>
                </Switch>
            </div>
        </RouteContainer>
    )
}
