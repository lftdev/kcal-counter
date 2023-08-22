export function removePreviousOutput (container) {
  const previous = document.getElementById('results-display')
  if (previous) container.removeChild(previous)
}
export function populateList (list) {
  import('./templates.json').then(Templates => {
    Object.keys(Templates).forEach(key => {
      const option = document.createElement('option')
      option.innerText = key
      list.appendChild(option)
    })
  })
}
export function showResult (result) {
  const { servingSize, foodAmount, proteins, carbs, fats, totalKcals } = result

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
    `
  })
  document.getElementById('app').appendChild(box)
}
function MessageBox (props) {
  const { className, title, message, children } = props
  const background = document.createElement('div')
  background.classList = 'bg-[rgba(0,0,0,.8)]'
  const box = document.createElement('div')
  box.classList = className
  box.innerHTML = `
    <h2 class="text-5xl">${title}</h2>
    <p>${message}</p>
    ${children}
  `
  const button = document.createElement('button')
  button.classList = 'bg-[#D64045] text-white font-bold p-2'
  button.innerText = 'OK'
  button.onclick = () => document.getElementById('app').removeChild(background)
  box.appendChild(button)
  background.appendChild(box)
  return background
}
