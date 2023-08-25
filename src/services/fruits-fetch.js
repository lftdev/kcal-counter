const fetchFruitsList = async () =>
  await fetch('https://api.calorieninjas.com/v1/nutrition?query=apple+banana+orange+watermelon+pineapple+peach+strawberry+grape', {
    method: 'GET',
    headers: {
      'X-Api-Key': import.meta.env.VITE_X_API_KEY
    }
  }).then(response => response.json()).then(json => json.items)

export default fetchFruitsList
