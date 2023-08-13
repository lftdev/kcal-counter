export function restoreData (input) {
  input.value = JSON.parse(window.localStorage.getItem('data'))[input.name]
}
