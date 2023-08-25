import MessageBox from '../components/MessageBox'

export function showResult (result) {
  const { servingSize, foodAmount, proteins, carbs, fats, totalKcals } = result

  const app = document.getElementById('app')
  const box = MessageBox({
    className: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 p-5 rounded-md bg-white',
    title: 'Your Food Information',
    message: `For a <span class="font-bold">serving size of ${servingSize}g</span> and a <span class="font-bold">food amount of ${foodAmount}g</span>, you will have the following calories:`,
    children: `
    <ul>
      <li><span class="font-bold">Proteins calories:</span> ${proteins}</li>
      <li><span class="font-bold">Carbs calories:</span> ${carbs}</li>
      <li><span class="font-bold">Fats calories:</span> ${fats}</li>
    </ul>
    <h3 class="text-4xl">TOTAL: ${Math.floor(totalKcals)}</h3>
    `,
    onBtnClick: () => app.removeChild(box)
  })
  app.appendChild(box)
}
