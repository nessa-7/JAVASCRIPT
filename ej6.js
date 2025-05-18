let suma = 0

function sumanumeros(numeros){

    for (let i=0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma
    
}

let arreglo= [4,5,6,7]
console.log("Suma de los numeros: " + sumanumeros(arreglo))