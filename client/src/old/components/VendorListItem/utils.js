export function setIcon(status, icon1, icon2) {
    if (status === false) {
        return icon1
    } else if (status === true) {
        return icon2
    }
}

export function setDisplay(status) {
    if (status === 'active') {
        return {
            color: '#4E6A5B',
            fontWeight: 'bold',
            background: 'none',
            opacity: 1.0
        }
    } else if (status === 'inactive') {
        return {
            color: '#FFFFFF',
            fontWeight: 'normal',
            background: '#3A4F44',
            opacity: 0.4
        }
    }
}