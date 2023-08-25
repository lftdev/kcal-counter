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
    foodData[inputName] = parseInt(input.value)
    saveToLocalStorage('foodData', foodData)
  }
})

const foodData = importLocalStorageData('foodData') ?? { servingSize: 0, foodAmount: 0, proteins: 0, carbs: 0, fats: 0 }
inputs.forEach(input => {
  const newValue = foodData[input.name]
  input.value = newValue === 0 ? '' : newValue
})

const form = document.querySelector('form')
form.onsubmit = event => {
  event.preventDefault()
  const result = foodData
  result.proteins *= 4
  result.carbs *= 4
  result.fats *= 9
  showResult({ ...result, totalKcals: getTotalKcals(result) })
}
const templatesList = []
fetchFruitsList().then(res => {
  res.forEach(item => templatesList.push(new Food(item.name, item.protein_g, item.carbohydrates_total_g, item.fat_total_g)))
  form.insertBefore(ComboBox('p-2', templatesList, onComboBoxChange), form.firstChild)
})
function onComboBoxChange (value) {
  if (value !== 'none') {
    const selectedTemplate = templatesList[templatesList.findIndex(item => item.name === value)]
    // Refresh saved data
    Object.keys(foodData).forEach(key => {
      if (key !== 'foodAmount') foodData[key] = selectedTemplate[key]
    })
    saveToLocalStorage('foodData', foodData)
    // Refresh inputs
    inputs.forEach(input => {
      const name = input.name
      if (name !== 'foodAmount') input.value = selectedTemplate[input.name]
    })
  }
}
