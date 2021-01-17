import boothsRef from './firestore'
import handleErrors from '../errorHandler'

export default function addBooth(data, setBooths) {
    console.log('Adding booth to DB', data)
    boothsRef.doc(data.id)
        .set(data).then(() => {
            console.log('Adding booth to state')
            setBooths(p=>[...p,data]) 
        })
        .catch(handleErrors)
}