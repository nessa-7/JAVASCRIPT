const prompt = require("prompt-sync")()

let cuentas=[]
let contador = 1

function crearCuenta(){
    console.clear()
    let año = new Date().getFullYear()
    let codigo = año + "-" + contador
    contador++

    let fechacreacion = new Date().toLocaleDateString()
    
    let saldo = 0

    let cuenta = {
        "codigo": codigo,
        "fechacreacion": fechacreacion,
        "saldo": saldo
    }
    cuentas.push(cuenta)
    console.log("Cuenta creada con codigo: " + codigo)
}

function consignarCuenta(){
    console.clear()
    let codigo = prompt("Ingrese el codigo de cuenta a consignar: ")
    existecod = false
    cuentas.forEach(cuentas => {
        if(cuentas.codigo==codigo){
            let valor = parseFloat(prompt("Ingrese el valor a consignar:"))
            cuentas.saldo += valor
            existecod = true
            console.log("Valor consignado correctamente")
        }
    })
    if(!existecod){
        console.log("No existe cuenta con ese codigo")
    }
    
}

function retirarCuenta(){
    console.clear()
    let codigo = prompt("Ingrese el codigo de cuenta a consignar: ")
    existecod = false
    cuentas.forEach(cuentas => {
        if(cuentas.codigo==codigo){
            let valor = parseFloat(prompt("Ingrese el valor a retirar:"))
            if(valor < cuentas.saldo){
                cuentas.saldo -= valor
                existecod = true
                console.log("Valor retirado correctamente")
                console.log("Nuevo saldo: " + cuentas.saldo)
            }
            if(valor > cuentas.saldo){
                existecod = true
                console.log("Saldo insuficiente")
            }      
        }
    })
    if(!existecod){
        console.log("No existe cuenta con ese codigo")
    }
}

function consultarCuenta(){
    console.clear()
    let codigo = prompt("Ingrese el codigo de cuenta a consignar: ")
    existecod = false
    cuentas.forEach(cuentas => {
        if(cuentas.codigo==codigo){
            console.log("Codigo: " + cuentas.codigo)
            console.log("Fecha de creacion: " + cuentas.fechacreacion)
            console.log("Saldo: " + cuentas.saldo)
            existecod = true
        }
    })

    if(!existecod){
        console.log("No existe cuenta con ese codigo")
    }
}

function listarCuentas(){
    console.clear()
    console.log("LISTADO DE CUENTAS")
    cuentas.forEach(cuentas => {
        console.log("Codigo: " + cuentas.codigo)
        console.log("Fecha de creacion: " + cuentas.fechacreacion)
        console.log("Saldo: " + cuentas.saldo)
        console.log("-------------------------")
    })
}

function menu() {
    let opcion = 0
    do {
        console.log("MENÚ BANCO ADSO")
        console.log("1. Crear Cuenta")
        console.log("2. Consignar Cuenta")
        console.log("3. Retirar Cuenta")
        console.log("4. Consultar Cuenta Por Código")
        console.log("6. Listar Cuentas")
        console.log("7. Salir")
        opcion = parseInt(prompt("Ingrese Opción (1-7):"))

        switch (opcion){
            case 1:
                crearCuenta()
                break
            case 2:
                consignarCuenta()
                break
            case 3:
                retirarCuenta()
                break
            case 4:
                consultarCuenta()
                break
            case 6:
                listarCuentas()
                break
            case 7:
                console.log("Va a salir de Banco ADSO")
                break
            default:
                console.log("Opción fuera de rango")
        }
    } while (opcion !== 7)
}

menu()