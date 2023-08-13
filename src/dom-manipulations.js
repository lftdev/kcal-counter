export function removePreviousOutput (container) {
  const previous = document.getElementById('results-display')
  if (previous) container.removeChild(previous)
}
export function showResult (container, proteins, carbs, fats, totalKcals) {
  const resultDisplay = document.createElement('div')
  resultDisplay.id = 'results-display'
  container.appendChild(resultDisplay)

  resultDisplay.innerHTML = `
    <h2>Your Food Information</h2>
    <p>Proteins calories: ${proteins}</p>
    <p>Carbs calories: ${carbs}</p>
    <p>Fats calories: ${fats}</p>
    <h3>TOTAL: ${totalKcals}</h3>
    `
}
