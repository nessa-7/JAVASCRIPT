let salario = parseInt(prompt("Ingrese su salario mensual: "))

if(salario < 1000000){
    let unop = salario * 0.01
    document.writeln("Su impuesto a pagar es: " + unop)
} else if(salario >= 1000000 && salario < 2000000){
    let tresp = salario * 0.03
    document.writeln("Su impuesto a pagar es: " + tresp)
} else if(salario >= 2000000 && salario <= 4000000){
    let cincop = salario * 0.05
    document.writeln("Su impuesto a pagar es: " + cincop)
} else if(salario > 4000000 && salario <= 10000000){
    let sietep = salario * 0.07
    document.writeln("Su impuesto a pagar es: " + sietep)
} else if(salario > 10000000){
    let diezp = salario * 0.10
    document.writeln("Su impuesto a pagar es: " + diezp)
}