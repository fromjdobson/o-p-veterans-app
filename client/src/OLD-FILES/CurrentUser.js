import React, { useState, useEffect } from 'react'
import firebase, { auth } from '../firebase'

export const CurrentUserContext = React.createContext()

export default function CurrentUser({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        console.log('CurrentUser')
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { uid } = user
                const signInId = uid
                const db = firebase.firestore()
                const usersRef = db.collection('users')
                usersRef.get().then((snapshot) => {
                    snapshot.forEach((doc) => {
                        const { id } = doc.data()
                        const docId = id

                        if (signInId === docId) {
                            setCurrentUser({...doc.data()})
                        }
                    })
                })
            }
        })
    }, [])

    return (
        <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </CurrentUserContext.Provider>
    )
}