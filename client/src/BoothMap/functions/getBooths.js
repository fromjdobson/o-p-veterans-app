import boothsRef from './firestore'
import handleErrors from './errorHandler'

export default function getBooths(callback) {
    boothsRef.get()
        .then(res => {
            let array = []
            res.forEach(d => {
                array.push({
                    id: d.id,
                    data: d.data()
                })
            })
            callback(array)
        })
    .catch(handleErrors)
}