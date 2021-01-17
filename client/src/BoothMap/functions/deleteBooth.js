import boothsRef from './firestore'
import handleErrors from './errorHandler'

export default function deleteBooth(id, callback) {
    boothsRef.doc(id)
        .delete().then(()=>{
            callback(prev=>{
                return prev.filter(booth=>booth.id!==id)
            })
        })
        .catch(handleErrors)
}