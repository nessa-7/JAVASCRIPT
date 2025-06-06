import Alcancia from './alcancia.js'

const miAlcancia = new Alcancia()

const estado = document.getElementById('estado')
const btn200 = document.getElementById('agregar200')
const btn500 = document.getElementById('agregar500')
const btn1000 = document.getElementById('agregar1000')
const btnRomper = document.getElementById('romper')
const btnNueva = document.getElementById('nueva')

function actualizarEstado() {
  const monedas = miAlcancia.contarMonedas()
  const total = miAlcancia.calcularTotal()
  estado.innerHTML = 
    "Monedas de $200: " + monedas.monedas200 + "<br>" +
    "Monedas de $500: " + monedas.monedas500 + "<br>" +
    "Monedas de $1000: " + monedas.monedas1000 + "<br>" +
    "Total ahorrado: $" + total
}

btn200.onclick = () => {
  miAlcancia.agregarMoneda(200)
  actualizarEstado()
};

btn500.onclick = () => {
  miAlcancia.agregarMoneda(500)
  actualizarEstado()
};

btn1000.onclick = () => {
  miAlcancia.agregarMoneda(1000)
  actualizarEstado()
}

btnRomper.onclick = () => {
  miAlcancia.romper()
  actualizarEstado()
}

btnNueva.onclick = () => {
  miAlcancia.nueva()
  actualizarEstado()
}

actualizarEstado()
