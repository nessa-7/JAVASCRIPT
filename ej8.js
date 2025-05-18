const prompt = require("prompt-sync")()

let texto = prompt("Ingrese un texto: ")
let contador = 1

function palabras(texto){

    for (let i=0; i < texto.length; i++) {
        let palabra = texto[i]

    if (palabra==' '){
        contador++
    }
}
    return contador
}

console.log("Cantidad de palabras: " + palabras(texto))