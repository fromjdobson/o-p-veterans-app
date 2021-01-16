import boothsRef from './firestore'


export default function updateBooth (props) {
    let id = props.id
    let top = props.boothinfo.top
    let left = props.boothinfo.left
    boothsRef.doc(id).update({ top: top, left: left })
        // .then((d)=>console.log('updated',d))
        .catch(error => {
            console.error("Error getting documents: ", error);
        })
}