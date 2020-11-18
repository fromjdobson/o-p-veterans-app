export function setHeader(status) {
    if (status === false) {
      return {
        display: `none`,
        centerJustify: `center`
      }
    } else if (status === true) {
      return {
        display: `inline-block`,
        centerJustify: `space-between`
      }
    }
  }