import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { RegistrationFormContext } from '../../providers/FormContext'
import { CurrentUserContext } from '../../providers/CurrentUser'
import firebase, { auth } from '../../firebase'
import Counter from './Counter'
import WarningIcon from './WarningIcon'
import Input from './Input'
import HelperText from './HelperText'
import NextButton from './NextButton'

import {
    getQuestion,
    handleChange
} from './utils'


const StyledForm = styled.div`
    margin: 64px 0px 0px 0px;
    width: 100%;
`

const LabelWrapper = styled.div`
    margin: 0px 0px 8px 0px;
    display: flex;
    justify-content: space-between;
    /* border: 2px dashed dodgerblue; */

    & > label {
        margin: 0px;
        width: 80%;
        height: 48px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: flex-start;
        color: #545454;
        /* border: 1px dotted red; */
    }
`

const InputWrapper = styled.div`
    margin: 0px 0px 16px 0px;
    height: 48px;
    display: flex;
    align-items: center;
    /* border: 2px dashed dodgerblue; */

`

const ButtonWrapper = styled.div`
    box-sizing: border-box;
    margin: 0px 0px 16px 0px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    /* border: 1px dashed orange; */
`

export default function Form() {
    const [questionNumber, setQuestionNumber] = useContext(RegistrationFormContext)
    const [, setCurrentUser] = useContext(CurrentUserContext)
    const [currentResponse, setCurrentResponse] = useState(null)
    const { question, inputName } = getQuestion(questionNumber)

    const db = firebase.firestore()
    const usersRef = db.collection('users')
    let dbId


    function updateDb() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { uid } = user
                usersRef.get().then((snapshot) => {
                    const { docs } = snapshot
                    let updateUserId

                    const userToUpdate = docs.find((docUser) => {
                        let dbUserId = docUser.data().id
                        let idToUpdate

                        if (uid === dbUserId) {
                            idToUpdate = dbUserId
                        }

                        return idToUpdate
                    })

                    updateUserId = userToUpdate.data().id
                    dbId = userToUpdate.data().id

                    usersRef.doc(updateUserId).update({
                        [inputName]: currentResponse
                    }).then(() => console.log('Document successfully updated.'))

                    let docRef = usersRef.doc(dbId)
                    docRef.get().then((doc) => {
                        if (doc) {
                            const { formcomplete } = doc.data()
                            if (question !== '') {
                                setCurrentUser({...doc.data()})
                            } else if (question === '') {
                                const tempObj = {...doc.data()}
                                tempObj.formcomplete = true
                                setCurrentUser({...tempObj})
                                // console.log(2222, tempObj)
                            }

                            console.log(formcomplete)
                        }
                    }).catch((error) => {
                        console.log('Error getting document: ', error)
                    })
                })
            }
        })
    }

    function handleClick(e) {
        e.preventDefault()

        updateDb()

        setQuestionNumber((prevState) => {
            return prevState + 1
        })

        setCurrentResponse(null)
    }

    return (
        <>
            <StyledForm>
                <LabelWrapper>
                    <label>{question}</label>
                    <Counter totalQuestions={10} currentQuestion={questionNumber} />
                </LabelWrapper>

                <InputWrapper>
                    <Input placeholder={'placeholder'} onChange={(e) => handleChange(e, setCurrentResponse)} value={currentResponse === null ? '' : currentResponse} />
                    <WarningIcon display={'none'} />
                </InputWrapper>

                <HelperText visibility={'hidden'} />

                <ButtonWrapper>
                    <NextButton onClick={(e) => handleClick(e)} />
                </ButtonWrapper>
            </StyledForm>
        </>
    )
}