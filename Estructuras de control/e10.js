let n = parseInt(prompt("Ingrese un numero: "))

let m=1
for(let i=1; i<=n; i++){
    m*=i
}

document.writeln(n + "! = " + m)