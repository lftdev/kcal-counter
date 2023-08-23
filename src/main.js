import ComboBox from './components/ComboBox.js'
import { getTotalKcals } from './counter.js'
import { showResult } from './dom-manipulations.js'
import { importLocalStorageData, saveToLocalStorage } from './local-storage.js'
import fetchFruitsList from './services/fruits-fetch.js'
import './style.css'

const inputs = document.querySelectorAll('input[type="number"]')
inputs.forEach(input => {
  input.oninput = () => {
    const inputName = input.name
    let value = parseInt(input.value)
    if (inputName === 'proteins' || inputName === 'carbs') value *= 4
    else if (inputName === 'fats') value *= 9
    data[inputName] = value
    saveToLocalStorage('data', data)
  }
})

const data = importLocalStorageData(Array.from(inputs).map(input => input.name))
inputs.forEach(input => {
  const newValue = data[input.name]
  input.value = newValue === 0 ? '' : newValue
})

const form = document.querySelector('form')
form.onsubmit = event => {
  event.preventDefault()
  showResult({ ...data, totalKcals: getTotalKcals(data) })
}

const templatesList = (await fetchFruitsList()).items
function onComboBoxChange (value) {
  let index = 0
  templatesList.some((template, idx) => {
    if (template.name === value) {
      index = idx
      return true
    }
    return false
  })
  const template = templatesList[index]
  inputs.forEach(input => {
    switch (input.name) {
      case 'servingSize':
        input.value = template.serving_size_g
        break
      case 'proteins':
        input.value = template.protein_g
        break
      case 'carbs':
        input.value = template.carbohydrates_total_g
        break
      case 'fats':
        input.value = template.fat_total_g
    }
  })
}
form.insertBefore(ComboBox('p-2', templatesList, onComboBoxChange), form.firstChild)
