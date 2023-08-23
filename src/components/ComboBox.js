export default function ComboBox (className, list, onChange) {
  const box = document.createElement('select')
  box.classList = className
  box.onchange = event => onChange(event.target.value)
  list.forEach(item => {
    const option = document.createElement('option')
    const name = item.name
    option.value = name
    option.innerText = name.charAt(0).toUpperCase() + name.slice(1, name.length)
    box.appendChild(option)
  })
  return box
}
