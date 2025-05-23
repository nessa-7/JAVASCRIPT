const prompt = require("prompt-sync")()

let arreglo = []

for (let i = 0; i < 5; i++){
    let numeros = parseInt(prompt("Ingrese numero: "))
    arreglo.push(numeros)
}


function eliminar(arreglo) {
    let arreglo2 = []

    for (let i = 0; i < arreglo.length; i++) {
        let existe = false

    for (let x = 0; x < arreglo.length; x++) {
        if (arreglo[i] === arreglo2[x] ) {
            existe = true
            break
        }
    }
        if (!existe){
            arreglo2.push(arreglo[i])
        }
    }

    return arreglo2
}

console.log("El arreglo original es: " + arreglo)
console.log("El arreglo sin duplicados es: " + eliminar(arreglo))