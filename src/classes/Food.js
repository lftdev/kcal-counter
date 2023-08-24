export default class Food {
  name = ''
  proteins = 0
  carbs = 0
  fats = 0
  servingSize = 100
  constructor (name, proteins, carbs, fats, servingSize) {
    this.name = name
    this.proteins = proteins
    this.carbs = carbs
    this.fats = fats
    if (servingSize && servingSize > 0) this.servingSize = servingSize
  }
}
