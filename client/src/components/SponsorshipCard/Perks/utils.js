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

export function handleClick(status, newFunc) {
    newFunc(() => {
        if (status === false) {
            return true
        } else if (status === true) {
            return false
        }
    })
}