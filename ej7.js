function numeromayor(arreglo) {

  let mayor = arreglo[0]

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i]
    }
  }

  return mayor
}

let numeros = [6, 1, 7, 12, 5]
console.log("El número más grande es:", numeromayor(numeros))
