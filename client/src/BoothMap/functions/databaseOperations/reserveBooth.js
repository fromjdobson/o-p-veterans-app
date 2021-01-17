import boothsRef from './firestore'
import handleErrors from '../errorHandler'

export default function reserveBooth(id) {
    boothsRef.doc(id)
        .update({ reserved: true })
        .catch(handleErrors)
}