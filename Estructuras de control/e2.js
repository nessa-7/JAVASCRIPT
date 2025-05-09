let edad = parseInt(prompt("Ingrese su edad"))

if (edad>=18){
    let cedula = parseInt(prompt("Tiene cedula?: 1.Si 2.No"))
    if(cedula==1){
        let inscrita = parseInt(prompt("Tiene la cedula inscrita?: 1.Si 2.No"))
        if(inscrita==1){
            document.writeln("Si cumple con las condiciones para votar")
        }else{
            document.writeln("No cumple con las condiciones para votar")
        }
    }else{
        document.writeln("No cumple con las condiciones para votar")
    }
}else{
    document.writeln("No cumple con las condiciones para votar")
}