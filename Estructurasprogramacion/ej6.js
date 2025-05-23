const prompt = require("prompt-sync")()

let arreglo = []

for (let i = 0; i < 5; i++){
    let n = parseInt(prompt("Ingrese valor: "))
    arreglo.push(n)
}

let suma = 0

function sumanumeros(arreglo){

    for (let i=0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }
    return suma
    
}

console.log("Suma de los numeros: " + sumanumeros(arreglo))