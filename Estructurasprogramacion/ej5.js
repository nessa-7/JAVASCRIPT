const prompt = require("prompt-sync")()

let numeros = parseInt(prompt("Ingrese numeros: "))
let contador = 0

function cantidadnumeros(numeros){

    for (let i=0; i < numeros.length; i++) {
        let numerospares = numeros[i]

    if (numerospares%2==0){
        contador++
    }
}
    return contador
}

console.log("Cantidad de numeros pares: " + cantidadnumeros(numeros))