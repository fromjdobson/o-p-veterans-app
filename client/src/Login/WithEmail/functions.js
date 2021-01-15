import { auth } from '../../firebase/'
import handleError from '../../ReUsables/errorHandler'

export function Register(email,pass) {
    auth.createUserWithEmailAndPassword(email, pass).then((user) => {
    }).catch(handleError)
}

export function SignIn(email,pass) {
    auth.signInWithEmailAndPassword(email, pass).then((user) => {
        if (user) {
            console.log(user)
        }
    }).catch(handleError)
}