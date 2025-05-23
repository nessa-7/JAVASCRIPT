let x = 0
let y = 0
let z = 0
let nuevox = 0
let nuevoy = 0
let nuevoz = 0

for (let i = 0; i < 100; i++) {
    
    x = Math.random() * 10 - 5
    y = Math.random() * 10 - 5
   
    z = x*x + y*y
 
    if (z > nuevoz) {
        nuevoz = z
        nuevox = x
        nuevoy = y
    }
}

console.log("Valor de x: " + x)
console.log("Valor de y: " + y)
console.log("Valor de z: " + z)
console.log("Nuevo valor de x: " + nuevox)
console.log("Nuevo valor de y: " + nuevoy)
console.log("Mejor valor de z: " + nuevoz)