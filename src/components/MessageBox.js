export default function MessageBox (props) {
  const { className, title, message, children, onBtnClick } = props
  const background = document.createElement('div')
  background.onclick = onBtnClick
  background.classList = 'absolute grid place-items-center bg-[rgba(0,0,0,.8)] w-full h-full'
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
  button.onclick = onBtnClick
  box.appendChild(button)
  background.appendChild(box)
  return background
}
