let n = parseInt(prompt("Ingrese un numero: "))

let primo = 0

for(let i=1; i<=n; i++){
    let divisores = n%i
    if(divisores==0){
        primo+=1
    }
}

if(primo==2){
    document.writeln(n + " es primo")
} else{
    document.writeln(n + " no es primo")
}