import React from 'react';
import styled from 'styled-components'
import Button from '../Button'
import TextInput from '../../ReUsables/FormComponents/TextInput/'

const BtnContainer = styled.div`
    box-sizing: border-box;
    width: 328px;
    height: 40px;
    position: relative;
    top: 364px;
    left: calc(50% - 328px/2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function WithEmail (){
    return <>
            <TextInput className='email-input' type='email' label='Email' placeholder='' />
            <TextInput className='pass-input' type='password' label='Password' placeholder='' />
            <BtnContainer>
                <Button className='short-button' buttonStyle='primary' buttonText='Register' />
                <Button className='short-button' buttonStyle='secondary' buttonText='Sign in' />
            </BtnContainer>
    </>
}