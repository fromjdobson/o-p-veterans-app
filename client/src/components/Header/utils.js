export function setUserGraphic(currentUser, altImg) {
  if (currentUser) {
    const { userImg } = currentUser
    return userImg
  } else {
    return altImg
  }
}