export function nivelRiesgo(edad,valor){
    if (edad >= 40 && edad <=60 && valor){
        return "Riesgo moderado"
    } else if(edad > 60 || valor){
        return "Alto riesgo"
     } else{
        return "Bajo riesgo"
    }
}