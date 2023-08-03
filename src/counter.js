/* eslint-disable no-undef */
export function getInputs () {
  return {
    foodAmount: parseInt(prompt('Enter food amount you will eat (g):')),
    servingSize: parseInt(prompt('Enter serving size (g):')),
    macrosKcalAmount: {
      proteins: parseInt(prompt('Enter protein amount:')) * 4,
      carbs: parseInt(prompt('Enter carbs amount:')) * 4,
      fats: parseInt(prompt('Enter fats amount:')) * 9
    }
  }
}
export const getTotalKcals = (foodAmount, servingSize, macrosKcalAmount) =>
  ((macrosKcalAmount.proteins + macrosKcalAmount.carbs + macrosKcalAmount.fats) * foodAmount) / servingSize
