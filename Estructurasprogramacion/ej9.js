const prompt = require("prompt-sync")()

let arreglo = []

for (let i = 0; i < 5; i++){
    let numeros = parseInt(prompt("Ingrese numero: "))
    arreglo.push(numeros)
}

function invertir(arreglo){
    let arreglo2 = []

    for (let i=arreglo.length-1; i>=0; i--){
        arreglo2.push(arreglo[i])
    }
    return arreglo2
}

console.log("El arreglo original es: " + arreglo)
console.log("El arreglo invertido es: " + invertir(arreglo))