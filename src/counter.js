export const getTotalKcals = ({ servingSize, foodAmount, proteins, carbs, fats }) =>
  ((proteins + carbs + fats) * foodAmount) / servingSize
