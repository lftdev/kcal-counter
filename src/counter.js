export const getTotalKcals = ({ servingSize, foodAmount, proteins, carbs, fats }) =>
  ((proteins * 4 + carbs * 4 + fats * 9) * foodAmount) / servingSize
