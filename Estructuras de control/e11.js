let n1 = parseInt(prompt("Ingrese el primer numero: "))
let n2 = parseInt(prompt("Ingrese el segundo numero: "))
let sumapar = 0
let sumaimpar = 0
let contador = 0

document.writeln("Numeros pares entre " + n1 + " y " + n2 + ": " + "<br>")
for(let i=n1; i<=n2; i++){
    if(i%2==0){
        document.writeln(i)
        sumapar += i
    }
}
document.writeln("<br>" + "Suma de los numeros pares: " + "<br>" + sumapar + "<br><hr>")

document.writeln("Numeros impares entre " + n1 + " y " + n2 + ":" + "<br>")
for(let i=n1; i<=n2; i++){
    if(i%2!=0){
        document.writeln(i)
        sumaimpar += i
        contador++
    }
}
let prom = sumaimpar/contador
document.writeln("<br>" + "Promedio de los numeros impares: "+ "<br>" + prom)