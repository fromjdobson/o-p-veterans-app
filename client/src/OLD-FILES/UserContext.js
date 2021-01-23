import React, { useState } from 'react'

export const UserStateContext = React.createContext()

export default function UserContext({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <UserStateContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </UserStateContext.Provider>
    )
}

// function login() {
//     let userDatabase = firebase.database().ref('users')
//     let usersEmail

//     auth.signInWithPopup(provider)
//         .then((result) => {
//             const loggedInUser = result.user
//             const { email } = loggedInUser
//             usersEmail = email
//             console.log(usersEmail)
//         })

//         console.log(usersEmail)

//     userDatabase.once('value')
//         .then((snapshot) => {
//             let userList = snapshot.val()
//             let newState = []

//             for (let entry in userList) {
//                 const name = userList[entry].name
//                 const email = userList[entry].email
//                 const id = entry

//                 newState.push({
//                     name: name,
//                     email: email,
//                     id: id
//                 })

//                 newState.map((newEntry) => {
//                     const { id } = newEntry
//                     console.log(id)
//                 })
//             }
//         })


//     console.log(usersObj)

//     userDatabase.on('value', (snapshot) => {
//         console.log(snapshot.val())
//     })

//     userDatabase.push({
//         name: 'wallly',
//         email: 'wally@email.com'
//     })
// }