export function setModalDisplay(modalStatus) {
    if (modalStatus === false) {
        return { display: `none` }
    } else if (modalStatus) {
        return { display: `flex` }
    }
}