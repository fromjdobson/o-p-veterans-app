export function setIcon(status, icon1, icon2) {
    if (status === false) {
        return icon1
    } else if (status === true) {
        return icon2
    }
}