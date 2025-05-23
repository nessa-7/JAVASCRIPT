const prompt = require("prompt-sync")()

let c1 = 0
let c2 = 0
let c3 = 0
let vb = 0
let cp = "123"
let opcion = 0
let total = 0

function cerrar(){
    let clave = prompt("Ingrese la clave para cerrar elecciones: ")
        if (clave === cp) {
            console.log("Elecciones cerradas por el presidente")
            resultados()
            return true
        } else {
            console.log("Clave incorrecta")
            return false
        } 
}

function menu (){
    let abierta = true
    do{
        console.clear()
        console.log("MENU ELECCIONES 2025")
        console.log("1. Candidato Uno")
        console.log("2. Candidato Dos")
        console.log("3. Candidato Tres")
        console.log("4. Blanco")
        console.log("5. Cerrar elecciones")
        
        opcion = parseInt(prompt("Ingrese opción: [1-5]: "))

        switch(opcion){
            case 1:
                c1++
                total++
                break
            case 2:
                c2++
                total++
                break
            case 3:
                c3++
                total++
                break
            case 4:
                vb++
                total++
                break
            case 5:
                if(cerrar()){
                    abierta = false
                }
                break
            default:
                console.log("Opcion fuera de rango")
                break
        }

        if(total>=5){
            console.log("Cantidad de votos completa")
            abierta = false
            resultados()
        }
    }while(abierta)
}

function resultados(){
    console.log("RESULTADOS:");
    console.log("Candidato Uno: " + c1 + " votos")
    console.log("Candidato Dos: " + c2 + " votos")
    console.log("Candidato Tres: " + c3 + " votos")
    console.log("Votos en Blanco: " + vb + " votos")
    console.log("Total de votos: " + total)
}

menu()