import boothsRef from './firestore'

export default function getBooths(cb) {
    boothsRef.get()
    .then(res => {
        let array = []
        res.forEach(d => {
            array.push({
                id: d.id,
                data: d.data()
            })
        })
        cb(array)
    })
    .catch(error => {
        console.error("Error getting documents: ", error);
    });
}