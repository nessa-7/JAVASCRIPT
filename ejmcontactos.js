//crear un objeto de tipo prompt importando la librería prompt-sync
const prompt = require("prompt-sync")()
/**
 * Se define el arreglo contactos vacío.
 */
let contactos=[]

/**
 * Función que agrega un objeto contacto
 * al arreglo contacto con los siguientes atributos
 * identificacion, nombre, telefono y correo
 */
function agregarContacto(){
    console.clear()
    //pedir los datos
    let identifica = prompt("Ingrese Identificación: ")
    let nombre = prompt("Ingrese nombre: ")
    let telefono= prompt("Ingrese Número de Teléfono: ")
    let correo = prompt("Ingrese correo electrónico: ")
    /**
     * Se crea el objeto contacto con los
     * atributos: identificación, nombre,
     * telefono y correo
     */
    let contacto = {
        "identificacion": identifica,
        "nombre": nombre,
        "telefono": telefono,
        "correo": correo
    }
    //agregar el contacto al arreglo
    contactos.push(contacto)
    console.log("Contacto Agregado Correctamente")
}


/**
 * Función que consulta un contacto en el arreglo
 * contacto por su identificación. La versión
 * recorre el arreglo con u  foreach
 */
function consultarPorIdentificacionVersion1(){
    console.clear()
    let identifica = prompt("Ingrese identificación de contacto a consultar: ")
    existeContacto=false
    contactos.forEach(contacto => {
        if(contacto.identificacion===identifica){
            console.log(`Identificacion: ${contacto.identificacion}`)
            console.log(`Nombre: ${contacto.nombre}`)
            console.log(`Teléfono: ${contacto.telefono}`)
            console.log(`Correo: ${contacto.correo}`)
            existeContacto=true
        }
    })
    if(!existeContacto){
        console.log("No existe contacto con esa identificación")
    }
}

/**
 * Función que consulta un contacto en el arreglo 
 * contactos por su identificación. Versión utilizando
 * método find de los arreglos.
 */
function consultarPorIdentificacionVersion2(){
    console.clear()
    let identifica = prompt("Ingrese identificación de contacto a consultar: ")
    let contacto = contactos.find(contacto=>contacto.identificacion===identifica)    
    if(contacto!==undefined){
        console.log(`Identificacion: ${contacto.identificacion}`)
        console.log(`Nombre: ${contacto.nombre}`)
        console.log(`Teléfono: ${contacto.telefono}`)
        console.log(`Correo: ${contacto.correo}`)
    }else{
        console.log("No existe contacto con esa identificación")
    }       
}

/**
 * Función con muestra en pantalla los datos
 * de los contactos existentes en el arreglo
 */
function listarContactos(){
    console.clear()
    console.log("LISTADO DE CONTACOS")
    contactos.forEach(contacto => {
        console.log(`Identificacion: ${contacto.identificacion}`)
        console.log(`Nombre: ${contacto.nombre}`)
        console.log(`Teléfono: ${contacto.telefono}`)
        console.log(`Correo: ${contacto.correo}`)
        console.log("************************************")  
    });
}

/**
 * Función que elimina un contacto del
 * arreglo contactos recorriendo el arreglo
 * con un foreach.
 */
function eliminarVersion1(){
    console.clear()
    let eliminado=false
    let identifica = prompt("Ingrese identificación de contacto a eliminar: ")   
    contactos.forEach((contacto,index) => {
        if(contacto.identificacion===identifica){
            contactos.splice(index,1)
            eliminado=true
            console.log("Contacto eliminado correctamente")
        }
        
    });
    if(!eliminado){
        console.log("No existe contacto con esa identificación")
    }
}

/**
 * Función que elimina un contacto del arreglo
 * contactos, utilizando el metodo finIndex de
 * los arreglos para obtener la posición
 * y después utilizarla en el método
 * splice para eliminar el contacto.
 */
function eliminarVersion2(){
    console.clear()   
    let identifica = prompt("Ingrese identificación de contacto a eliminar: ")
    let posicion = contactos.findIndex(contacto=>contacto.identificacion===identifica) 
    if(posicion===-1){
        console.log("No existe contacto con esa identificación")
    }else{
        contactos.splice(posicion,1)
        console.log("Contacto Eliminado correctamente")
    }

}

/**
 * Función que muestra el menú de opciones
 * de la aplicación. 
 */
function menu(){
    let opcion=0
    do{
        console.clear()
        console.log("MENU CONTACTOS")
        console.log("1. Agregar Contacto")
        console.log("2. Consultar Contacto")
        console.log("3. Listar Contactos")
        console.log("4. Eliminar Contacto")
        console.log("5. Salir")
        opcion = parseInt(prompt("Ingrese opción: [1-5]: "))
        switch(opcion){
            case 1:
               agregarContacto()
                break
            case 2:
                consultarPorIdentificacionVersion2()
                break
            case 3:
                listarContactos()
                break
            case 4:
                eliminarVersion2()
                break
            case 5:
                console.log("Va a salir....")
                break
            default: 
                console.log("OPción fuera de rango")
                break
        }
        prompt("Presione enter para continuar")
    }while(opcion!=5)
}

/**
 * Llamado a la función menu para
 * iniciar el programa.
 */
menu()