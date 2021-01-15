import { auth, provider } from '../../firebase/'
import handleError from '../../ReUsables/errorHandler'

export const handleGoolgeLogin = () => {
    auth.signInWithPopup(provider).then((result) => {
        console.log('User is signed in.')
    }).catch(handleError)
}