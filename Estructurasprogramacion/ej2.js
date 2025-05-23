function generarcontra() {
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let minusculas = "abcdefghijklmnopqrstuvwxyz"
    let numeros = "0123456789"
    let especiales = "@#$%&()=?¿*+[]{}"

    function seleccion(tipo, cantidad) {
        let resultado = ""
        for (let i = 0; i < cantidad; i++) {
            let indice = Math.floor(Math.random() * tipo.length)
            resultado += tipo[indice]
        }
        return resultado
    }

    let ma = seleccion(mayusculas, 2)
    let mi = seleccion(minusculas, 2)
    let nu = seleccion(numeros, 2)
    let es = seleccion(especiales, 2)

    let contra = ma + mi + nu + es

    return contra
}

console.log("Contraseña generada:", generarcontra())
