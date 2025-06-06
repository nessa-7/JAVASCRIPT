import {consultarLibrosPorPalabraClaveTitulo, consultarLibrosPaginas} from './utilidades.js'

console.log("Libros con la palabra 'la':")
console.log(consultarLibrosPorPalabraClaveTitulo("la"))

console.log("Títulos y número de páginas:")
console.log(consultarLibrosPaginas())
