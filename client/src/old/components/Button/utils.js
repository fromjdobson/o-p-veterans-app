export function setButtonStyle(style) {
  switch (style) {
    case 'primary':
      return {
        background: `#618572`,
        fontColor: `#FFFFFF`,
        border: `2px solid #618572`,
        googleDisplay: `none`
      }
    case 'secondary':
      return {
        background: `#FFFFFF`,
        fontColor:`#93B0A1`,
        border: `2px solid #93B0A1`,
        googleDisplay: `none`
      }
    case 'google':
      return {
        background:`#FFFFFF`,
        fontColor: `#4285F4`,
        border: `2px solid #4285F4`,
        googleDisplay: `flex`
      }
    default:
        return {
          background: `black`,
          fontColor: `white`,
          border: `2px solid white`,
          googleDisplay: `inline-block`
        }
  }
}