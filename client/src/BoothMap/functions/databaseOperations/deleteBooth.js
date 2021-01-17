import boothsRef from './firestore'
import handleErrors from '../errorHandler'

export default function deleteBooth(id, setBooths) {
    boothsRef.doc(id)
        .delete().then(()=>{
            setBooths(prev=>{
                return prev.filter(booth=>booth.id!==id)
            })
        })
        .catch(handleErrors)
}