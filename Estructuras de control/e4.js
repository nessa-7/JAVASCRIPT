let edad = parseInt(prompt("Ingrese su edad: "))

if (edad<5){
    document.writeln("Su entrada es gratis")
} else if(edad>=5 && edad<=18){
    document.writeln("Su entrada tiene el valor de $5000")
} else if(edad>18){
    document.writeln("Su entrada tiene el valor de $10000")
}