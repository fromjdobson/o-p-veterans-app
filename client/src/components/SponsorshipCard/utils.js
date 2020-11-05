export function setIconStyle(style) {
    switch (style) {
        case "closed":
        return {
            display:`none`,
            border:`none`,
        }
        case "open":
        return {
            display: `flex`,
            flexDirection: `column`,

        }
        default:
        return "Default case"
    }
}