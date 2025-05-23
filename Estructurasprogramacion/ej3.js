const prompt = require("prompt-sync")()

let radio = parseInt(prompt("Ingrese el radio del circulo: "))

function areacirculo(radio){
    return Math.PI * Math.pow(radio,2)
}

console.log(areacirculo(radio))
