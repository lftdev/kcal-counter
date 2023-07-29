export function setupCounter(container, sibling) {
  const resultDisplay = document.createElement('div')
  resultDisplay.classList.add('results-display')
  container.insertBefore(resultDisplay, sibling)
  const getFoodAmount = () => parseInt(prompt('Enter food amount you will eat (g):'))
  const getServingSize = () => parseInt(prompt('Enter serving size (g):'))
  function getNutrientsAmount () {
    const proteins = parseInt(prompt('Enter protein amount:')) * 4
    const carbs = parseInt(prompt('Enter carbs amount:')) * 4
    const fats = parseInt(prompt('Enter fats amount:')) * 9
    return { proteins, carbs, fats }
  }
  const amount = getFoodAmount()
  const serving = getServingSize()
  const { proteins, carbs, fats } = getNutrientsAmount()
  resultDisplay.innerHTML = `
    <h2>Your Food Information</h2>
    <p>Proteins calories: ${proteins}</p>
    <p>Carbs calories: ${carbs}</p>
    <p>Fats calories: ${fats}</p>
    <p>TOTAL: ${((proteins + carbs + fats) * amount) / serving}</p>
  `
}
