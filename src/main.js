import { setupCounter } from './counter.js'

const main = document.querySelector('main')
const btnCalc = document.getElementById('btnCalc')
btnCalc.onclick = () => setupCounter(main, btnCalc)
