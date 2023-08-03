import { getTotalKcals, getInputs } from './counter.js'

const main = document.querySelector('main')
const form = document.querySelector('form')
form.onsubmit = event => {
  event.preventDefault()
  const inputs = getInputs()
  const result = getTotalKcals(inputs.foodAmount, inputs.servingSize, inputs.macrosKcalAmount)
  removePreviousOutput(main)
  showResult(main, form, inputs.macrosKcalAmount, result)
}
function removePreviousOutput (container) {
  const previous = document.querySelector('.results-display')
  if (previous) container.removeChild(previous)
}
function showResult (container, sibling, nutrients, result) {
  const resultDisplay = document.createElement('div')
  resultDisplay.classList.add('results-display')
  container.insertBefore(resultDisplay, sibling)

  const { proteins, carbs, fats } = nutrients
  resultDisplay.innerHTML = `
    <h2>Your Food Information</h2>
    <p>Proteins calories: ${proteins}</p>
    <p>Carbs calories: ${carbs}</p>
    <p>Fats calories: ${fats}</p>
    <h3>TOTAL: ${result}</h3>
    `
}
