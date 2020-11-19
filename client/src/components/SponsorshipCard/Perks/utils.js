export function setDisplay(status) {
    if  (status === false) {
        return {
            display: `none`
        }
    } else if (status === true) {
        return {
            display: `block`
        }
    }
}