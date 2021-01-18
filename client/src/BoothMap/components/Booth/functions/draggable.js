import moveBooth from '../../../functions/databaseOperations/moveBooth'

// This function makes the booth draggable directly on the DOM, bypassing react during drag.
// Once booth is dragged, the mouseup event will setState.
export default function draggable({el,setState,state}) {
    const snapToGrid = 4
    var tempPosition = { left:state.left, top:state.top }
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
    el.onmousedown = handleMouseDown

    function handleMouseDown(e) {
        e = e || window.event;
        e.preventDefault()
        pos3 = e.clientX
        pos4 = e.clientY
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mousemove', handleMouseMove)
        setState({isDragging: true})
    }

    function handleMouseMove(e) {
        e = e || window.event
        e.preventDefault()
        let s = snapToGrid
        let x = Math.round(e.clientX / s) * s
        let y = Math.round(e.clientY / s) * s
        pos1 = pos3 - x
        pos2 = pos4 - y
        pos3 = x
        pos4 = y
        tempPosition = {
            left: el.offsetLeft - pos1,
            top: el.offsetTop - pos2
        }
        el.style.left = (tempPosition.left) + "px"
        el.style.top = (tempPosition.top) + "px"
    }

    function handleMouseUp() {
        const hasMoved = tempPosition.left !== state.left || tempPosition.top !== state.top
        setState({ ...tempPosition, isDragging: false })
        hasMoved && moveBooth({
            id: state.id,
            left: tempPosition.left,
            top: tempPosition.top
        })
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('mousemove', handleMouseMove)
    }
}