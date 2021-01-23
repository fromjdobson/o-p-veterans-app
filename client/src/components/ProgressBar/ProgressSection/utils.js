export function setOpacity(iconStatus) {
    if (iconStatus === 'active') {
        return 1.0
    } else if (iconStatus === 'inactive') {
        return 0.4
    }
}