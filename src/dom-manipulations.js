export function removePreviousOutput (container) {
  const previous = document.querySelector('.results-display')
  if (previous) container.removeChild(previous)
}
export function showResult (container, sibling, macros, result) {
  const resultDisplay = document.createElement('div')
  resultDisplay.classList.add('results-display')
  container.insertBefore(resultDisplay, sibling)

  const { proteins, carbs, fats } = macros
  resultDisplay.innerHTML = `
    <h2>Your Food Information</h2>
    <p>Proteins calories: ${proteins}</p>
    <p>Carbs calories: ${carbs}</p>
    <p>Fats calories: ${fats}</p>
    <h3>TOTAL: ${result}</h3>
    `
}
