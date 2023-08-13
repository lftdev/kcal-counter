import { getTotalKcals } from './counter.js'
import { removePreviousOutput, showResult } from './dom-manipulations.js'
import './style.css'

const data = {
  servingSize: 0,
  foodAmount: 0,
  proteins: 0,
  carbs: 0,
  fats: 0
}

const main = document.querySelector('main')

const inputs = document.querySelectorAll('input[type="number"]')
inputs.forEach(input => {
  input.oninput = () => {
    data[input.name] = parseInt(input.value)
  }
})

const form = document.querySelector('form')
form.onsubmit = event => {
  event.preventDefault()
  removePreviousOutput(main)
  showResult(main, data.proteins, data.carbs, data.fats, getTotalKcals(data))
}
