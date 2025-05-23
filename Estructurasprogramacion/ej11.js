const prompt = require("prompt-sync")()

let arreglo = []

for (let i = 0; i < 5; i++){
    let nombres = prompt("Ingrese nombre: ")
    arreglo.push(nombres)
}

function mayusculas(arreglo) {
    let arreglo2 = []

    for (let i = 0; i < arreglo.length; i++) {
        arreglo2.push(arreglo[i].toUpperCase())
    }

    return arreglo2
}

console.log("El arreglo original es: " + arreglo)
console.log("El arreglo en mayusculas es: " + mayusculas(arreglo))