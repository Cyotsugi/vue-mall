export const getLocal = (name) =>{
  return localStorage.getItem(name)
}

export const setLocal = (name,value) => {
  localStorage.getItem(name,value)
}