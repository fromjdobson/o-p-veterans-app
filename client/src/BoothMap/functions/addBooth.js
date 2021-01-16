import boothsRef from './firestore'
import handleErrors from './errorHandler'

export default function addBooth(newData, callback) {
    const {label} = newData
    boothsRef.doc(label)
        .set(newData).then(() => {
            callback(prev => ([...prev, {
                id: label,
                data: newData
            }]))
        })
        .catch(handleErrors)
}