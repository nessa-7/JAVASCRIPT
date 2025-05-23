const prompt = require("prompt-sync")()

let arreglo = []

for (let i = 0; i < 5; i++){
    let valor = prompt("Ingrese valor: ")
    arreglo.push(valor)
}

let indice = prompt("Ingrese el valor a buscar: ")

function buscar(arreglo,indice) {
    
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == indice) {
            return i
        }
    }
    return "Valor no encontrado"
}

console.log("El indice del valor es: " + buscar(arreglo,indice))