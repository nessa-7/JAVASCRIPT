const prompt = require("prompt-sync")()

let arreglo = []

for (let i = 0; i < 5; i++){
    let valor = prompt("Ingrese valor: ")
    arreglo.push(valor)
}

let valor1 = prompt("Ingrese el valor a reemplazar: ")
let valor2 = prompt("Ingrese el nuevo valor: ")

function reemplazar(arreglo, valor1, valor2) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == valor1) {
            arreglo[i] = valor2;
        }
    }
    return arreglo;
}

console.log("Areglo original: " + arreglo)
console.log("Arreglo nuevo: " + reemplazar(arreglo,valor1,valor2))