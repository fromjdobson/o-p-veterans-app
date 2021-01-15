import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { Switch, Route, useHistory } from 'react-router-dom'

const PageContainer = styled.div`

`

export default function Vendor() {
    const history = useHistory()
    const [onboardStep, setOnboardStep] = useState('step1')
    console.log(onboardStep)
    useEffect(() => {
        console.log(history)
        history.push('/vendor/step1')
    },[onboardStep])
    return (
        <PageContainer>
            <Header />
            <Switch>
                <Route path='*/step1'>Enter Name</Route>
                <Route path='step2'>Enter Address</Route>
                <Route path='step3'>Enter Organization Information</Route>
            </Switch>
        </PageContainer>
    )
}