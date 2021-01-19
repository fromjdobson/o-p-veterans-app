import boothsRef from './firestore'
import handleErrors from '../errorHandler'

export default function reserveBooth(id, setBooths) {
    boothsRef.doc(id)
        .update({ reserved: true })
        .then(() => {
            setBooths(prev => {
                return prev.map(booth => {
                    return booth.id === id ? { ...booth, reserved: true } : booth
                })
            })
            alert('Confirm reservation and continue to payment')
        })
        .catch(handleErrors)
}