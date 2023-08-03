/* eslint-disable no-undef */
export function getInputs () {
  const getFoodAmount = () => parseInt(prompt('Enter food amount you will eat (g):'))

  const getServingSize = () => parseInt(prompt('Enter serving size (g):'))

  function getNutrientsKcalAmount () {
    const proteins = parseInt(prompt('Enter protein amount:')) * 4
    const carbs = parseInt(prompt('Enter carbs amount:')) * 4
    const fats = parseInt(prompt('Enter fats amount:')) * 9
    return { proteins, carbs, fats }
  }

  const foodAmount = getFoodAmount()
  const servingSize = getServingSize()
  const nutrientsKcal = getNutrientsKcalAmount()
  return { foodAmount, servingSize, nutrientsKcal }
}
export const getTotalKcals = (foodAmount, servingSize, nutrientsKcal) =>
  ((nutrientsKcal.proteins + nutrientsKcal.carbs + nutrientsKcal.fats) * foodAmount) / servingSize
