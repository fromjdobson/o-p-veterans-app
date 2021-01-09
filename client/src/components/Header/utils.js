export function setUserGraphic(currentUser, altImg) {
  if (currentUser) {
    const { photo } = currentUser
    return photo
  } else {
    return altImg
  }
}