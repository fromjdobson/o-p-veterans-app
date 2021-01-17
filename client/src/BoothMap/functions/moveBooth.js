import boothsRef from './firestore'
import handleErrors from './errorHandler'

export default function moveBooth({id,boothinfo:{top,left}}) {
    boothsRef.doc(id)
        .update({ top, left })
        .catch(handleErrors)
}