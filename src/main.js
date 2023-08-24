import Food from './classes/Food.js'
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

const templatesList = (await fetchFruitsList()).items.map(item => new Food(item.name, item.protein_g, item.carbohydrates_total_g, item.fat_total_g))
function onComboBoxChange (value) {
  const selectedTemplate = templatesList[templatesList.findIndex(item => item.name === value)]
  const setData = (k, v) => { data[k] = v }
  Object.entries(selectedTemplate).forEach(([key, val]) => {
    if (key === 'proteins' || key === 'carbs') setData(key, val * 4)
    else if (key === 'fats') setData(key, val * 9)
  })
  data.servingSize = 100
  saveToLocalStorage('data', data)
  inputs.forEach(input => {
    const name = input.name
    if (name !== 'foodAmount') input.value = selectedTemplate[input.name]
  })
}
form.insertBefore(ComboBox('p-2', templatesList, onComboBoxChange), form.firstChild)
