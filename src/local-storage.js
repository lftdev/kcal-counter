export function importLocalStorageData (keys) {
  const data = {}
  try {
    keys.forEach(key => {
      data[key] = JSON.parse(window.localStorage.getItem('data'))[key]
    })
  } catch (error) {
    if (error instanceof TypeError) {
      return {
        servingSize: 0,
        foodAmount: 0,
        proteins: 0,
        carbs: 0,
        fats: 0
      }
    }
    console.log('Unknown error.', error)
  }
  return data
}

export function saveToLocalStorage (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
