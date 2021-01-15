import React, {useState} from 'react';
import Button from '../Button'
import TextInput from '../../ReUsables/FormComponents/TextInput/'
import { Container } from './StyledContainer'
import { Register, SignIn } from "./functions";

export default function WithEmail (){
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)

    return <>
            <TextInput className='email-input' type='email' label='Email' placeholder='' onChange={setEmail}/>
            <TextInput className='pass-input' type='password' label='Password' placeholder='' onChange={setPass}/>
            <Container>
                <Button className='short-button' buttonStyle='primary' buttonText='Register' onClick={()=>Register(email,pass)}/>
                <Button className='short-button' buttonStyle='secondary' buttonText='Sign in' onClick={()=>SignIn(email,pass)}/>
            </Container>
    </>
}
