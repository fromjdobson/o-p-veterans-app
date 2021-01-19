import boothsRef from './firestore'
import handleErrors from '../errorHandler'

export default function moveBooth({id,top,left}) {

    const maxTop = document.body.clientHeight
    const maxLeft = document.body.clientWidth
    const newTop = top ? top<maxTop ? top : maxTop : 0
    const newLeft = left ? left<maxLeft ? left : maxLeft : 0

    boothsRef.doc(id)
        .update({ top: newTop, left:newLeft })
        .catch(handleErrors)
}