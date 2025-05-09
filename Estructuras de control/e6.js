let n1 =parseInt(prompt("Ingrese el primer numero: "))
let n2 =parseInt(prompt("Ingrese el segundo numero: "))

for(let i=n1; i<=n2; i++){
    if(i%3==0){
        document.writeln(i)
    }
}