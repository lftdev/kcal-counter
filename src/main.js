import { getTotalKcals } from './counter.js'
import { populateList, showResult } from './dom-manipulations.js'
import { importLocalStorageData, saveToLocalStorage } from './local-storage.js'
import './style.css'

const templatesList = document.getElementById('templatesList')
populateList(templatesList)

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
