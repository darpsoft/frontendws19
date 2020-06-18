export const addCookies = (nameCookies, valueCookies) => {
  document.cookie = `${nameCookies}=${valueCookies}; path=/`
}

export const removeCookies = (nameCookies) => {
  document.cookie = `${nameCookies}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
}