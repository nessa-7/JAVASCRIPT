const prompt = require("prompt-sync")()

let texto = prompt("Ingrese un texto: ")
let contador = 0

function vocales(texto){

    for (let i=0; i < texto.length; i++) {
        let vocal = texto[i]

    if (vocal=='a'|| vocal=='e' || vocal=='i'|| vocal=='o' || vocal=='u'){
        contador++
    }
}
    return contador
}

console.log("Cantidad de vocales: " + vocales(texto))