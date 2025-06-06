export function calcularDescuento(precio){
    let descuento = 0
    if(precio > 1000){
        descuento = precio-(precio*0.2)
    } else if(precio >= 500 && precio <= 1000){
        descuento = precio-(precio*0.1)
    } else if(precio < 500){
        descuento = precio
    }
    return "Precio original: " + precio + " - Precio con descuento: " + descuento
}