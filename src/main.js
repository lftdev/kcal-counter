import { getTotalKcals } from './counter.js'
import { populateList, removePreviousOutput, showResult } from './dom-manipulations.js'
import { importLocalStorageData, saveToLocalStorage } from './local-storage.js'
import './style.css'

const main = document.querySelector('main')

const templatesList = document.getElementById('templatesList')
populateList(templatesList)

const inputs = document.querySelectorAll('input[type="number"]')
inputs.forEach(input => {
  input.oninput = () => {
    data[input.name] = parseInt(input.value)
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
  removePreviousOutput(main)
  showResult({ ...data, totalKcals: getTotalKcals(data) })
}
