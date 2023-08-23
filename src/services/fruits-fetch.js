export default async function fetchFruitsList () {
  return await (await fetch('https://api.calorieninjas.com/v1/nutrition?query=apple+banana+orange+watermelon+pineapple+peach+strawberry+grape', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'nyRs41cUNSXfhRYi23Y3LQ==4ncPNbxSQEjXQ2Cx'
    }
  })).json()
}
