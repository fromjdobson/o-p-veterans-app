import boothsRef from './firestore'
import handleErrors from './errorHandler'

export default function updateBooth({id,boothinfo:{top,left}}) {
    boothsRef.doc(id)
        .update({ top, left })
        .catch(handleErrors)
}