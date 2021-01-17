import boothsRef from './firestore'
import handleErrors from '../errorHandler'

export default function getBooths(setBooths) {
    console.log('Getting booths from DB')
    boothsRef.get()
        .then(res => {
            let array = []
            res.forEach(d => {
                array.push({
                    ...d.data(),
                    id: d.id
                })
            })
            console.log('Setting booths to state')
            setBooths(array)
        })
    .catch(handleErrors)
}