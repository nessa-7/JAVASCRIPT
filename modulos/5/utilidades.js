export function esBisiesto(year){
    if ((year%4 === 0 && year%100 != 0) || (year%400 === 0)) {
    return "Es bisiesto"
  } else{
    return "No es bisiesto"
  }
}