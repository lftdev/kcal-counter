export const importLocalStorageData = key => JSON.parse(window.localStorage.getItem(key))

export function saveToLocalStorage (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
