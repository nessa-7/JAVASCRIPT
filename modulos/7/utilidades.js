import libros from './libros.js'

export function consultarLibrosPorPalabraClaveTitulo(palabraClave) {
  const palabra = palabraClave.toLowerCase()
  return libros.filter(libro =>
    libro.titulo.toLowerCase().includes(palabra)
  )
}

export function consultarLibrosPaginas() {
  return libros.map(libro => ({
    titulo: libro.titulo,
    numeroPaginas: libro.numeroPaginas
  }))
}
