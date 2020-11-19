import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AppStateContext } from '../../providers/Store'

const LoginContainer = styled.div`
    /* width: 100%; */
    height: 100%;
    display: flex;
    /* border: 1px solid purple; */
`

export default function Login() {
    const [appState,setAppState] = useContext(AppStateContext)
    // const [loginState, setLoginState] = useState({ email: '', password: ''})
    // const { email, password } = loginState
    console.log(appState)

    // function getEmail(e) {
    //     const { value } = e.target
    //     setLoginState({ email: value, password: password })
    // }

    // function getPassword(e) {
    //     const { value } = e.target
    //     setLoginState({ email: email, password: value })
    // }


    return (
        <LoginContainer>
            <p>Hello</p>
                {/* <p>Register with OP Veteran</p>
                <h3>Create an account</h3> */}
        </LoginContainer>
    )
}