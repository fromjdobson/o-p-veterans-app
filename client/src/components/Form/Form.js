import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { getQuestion } from './utils'
import { RegistrationFormContext } from '../../providers/FormContext'
import { CurrentUserContext } from '../../providers/CurrentUser'
import firebase, { auth, provider } from '../../firebase'
import Counter from './Counter'
import WarningIcon from './WarningIcon'
import Input from './Input'
import HelperText from './HelperText'
import NextButton from './NextButton'
import { set } from 'mongoose'

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
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const [currentResponse, setCurrentResponse] = useState(null)
    const { question, inputName } = getQuestion(questionNumber)

    const db = firebase.firestore()
    const usersRef = db.collection('users')

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

                    usersRef.doc(updateUserId).update({
                        [inputName]: currentResponse
                    }).then(() => console.log('Document successfully updated.'))
                })

                usersRef.get().then((snapshot) => {
                    snapshot.forEach((doc) => {
                        const { id } = doc.data()
                        let currentUserId = currentUser.id
                        // console.log(333, currentUserForm)
        
                        if (id === currentUserId) {
                            let tempObj = {...doc.data()}

                            const { formcomplete } = tempObj

                            console.log(1111, formcomplete, questionNumber)


                            // if (formcomplete === false) {
                            //     console.log('form is not complete.')
                            //     // const { formcomplete } = tempObj
                            //     // tempObj.formcomplete = true
                            //     console.log(1111, formcomplete, questionNumber)

                            // } else {
                            //     console.log('form is currently complete.')
                            //     const { formcomplete } = tempObj
                            //     // tempObj.formcomplete = true
                            //     console.log(1111, formcomplete, questionNumber)

                            // }

                            setCurrentUser(tempObj)

                            setQuestionNumber((prevState) => {
                                return prevState + 1
                            })
                        }
                        // console.log(currentUserId, id)
                    })
                })
            }
        })
    }

    function handleChange(e) {
        const { value } = e.target
        setCurrentResponse(value)
    }

    function handleClick(e) {
        e.preventDefault()

        updateDb()

        setCurrentResponse(null)
    }

    // console.log(currentUser)

    
    return (
        <>
            <StyledForm>
                <LabelWrapper>
                    <label>{question}</label>
                    <Counter totalQuestions={10} currentQuestion={questionNumber} />
                </LabelWrapper>

                <InputWrapper>
                    <Input placeholder={'placeholder'} onChange={(e) => handleChange(e)} value={currentResponse === null ? '' : currentResponse} />
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