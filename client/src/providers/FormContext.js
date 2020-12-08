import React, { useState } from 'react'

export const RegistrationFormContext = React.createContext()

export default function FormContext({ children }) {
    const [questionNumber, setQuestionNumber] = useState(0)

    return (
        <RegistrationFormContext.Provider value={[questionNumber, setQuestionNumber]}>
            { children }
        </RegistrationFormContext.Provider>
    )
}

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
