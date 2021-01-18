import boothsRef from './firestore'
import handleErrors from '../errorHandler'

const dummyData = [{id:'A01',top:300,left:300},{id:'A02',top:200,left:300}]

export default function getBooths(setBooths) {
    // setBooths(dummyData)
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