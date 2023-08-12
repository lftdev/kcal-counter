import { getTotalKcals, getInputs } from './counter.js'
import { removePreviousOutput, showResult } from './dom-manipulations.js'

const main = document.querySelector('main')
const form = document.querySelector('form')
form.onsubmit = event => {
  event.preventDefault()
  const inputs = getInputs()
  const result = getTotalKcals(inputs.foodAmount, inputs.servingSize, inputs.macrosKcalAmount)
  removePreviousOutput(main)
  showResult(main, form, inputs.macrosKcalAmount, result)
}
