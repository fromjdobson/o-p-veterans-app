import boothsRef from './firestore'
import handleErrors from '../errorHandler'

export default function moveBooth({id,top,left}) {
    console.log('moving booth', id, top, left)
    boothsRef.doc(id)
        .update({ top, left })
        .then(() => {
            console.log('saved position')
        })
        .catch(handleErrors)
}