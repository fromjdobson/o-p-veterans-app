export function expandContainer(status) {
    if (status === false) {
        return {
            display: `none`
        }
    } else if (status === true) {
        return {
            display: `block`
        }
    }
}

export function setButtonDisplay(status) {
        if (status === 'active') {
            return {
                background: `#FFFFFF`,
                fontColor: `#4E6A5B`,
                fontWeight: `bold`,
                opacity: 1.0
            }
        } else if (status === 'inactive') {
            return {
                background: `#3A4F44`,
                fontColor: `#FFFFFF`,
                fontWeight: `normal`,
                opacity: 0.4
            }
        }
    }