import 'dotenv/config'
export default function fetchFruitsList () {
  return fetch('https://api.calorieninjas.com/v1/nutrition?query=apple+banana+orange+watermelon+pineapple+peach+strawberry+grape', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'nyRs41cUNSXfhRYi23Y3LQ==4ncPNbxSQEjXQ2Cx'
    }
  }).then(res => res.json()).then(json => json).items
}
