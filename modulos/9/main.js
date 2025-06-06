import Contacto from './contacto.js';

let contactos = [];

function agregarContacto(contacto) {
  if (contactos.some(c => c.identificacion === contacto.identificacion)) {
    Swal.fire({
      icon: "error",
      title: "Contacto Existente",
      text: "Ya existe un contacto con esta identificación."
    });
    return
  }

  contactos.push(contacto)
  mostrarContactos()

  Swal.fire({
  title: "Contacto agregado!",
  icon: "success",
  draggable: true
})

limpiarFormulario()
}


function consultarContacto(identificacion) {
  return contactos.find(c => c.identificacion === identificacion)
}

function actualizarContacto(contactoActualizado) {
  const index = contactos.findIndex(c => c.identificacion === contactoActualizado.identificacion)
  if (index !== -1) {
    contactos[index] = contactoActualizado
    mostrarContactos()

    Swal.fire({
      title: "¡Actualizado!",
      text: "El contacto ha sido actualizado exitosamente.",
      icon: "success",
      position: "center",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Contacto no encontrado",
      text: "No se encontró un contacto con esa identificación."
    })
  }
}


function eliminarContacto(identificacion) {
  const contacto = consultarContacto(identificacion)
  if (!contacto) {
    Swal.fire({
      icon: "error",
      title: "Contacto no encontrado..."
    })
    return
  }

  Swal.fire({
    title: "¿Estás seguro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#8FD14F",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarlo"
  }).then((result) => {
    if (result.isConfirmed) {
      contactos = contactos.filter(c => c.identificacion !== identificacion);
      mostrarContactos();
      Swal.fire(
        "¡Eliminado!",
        "El contacto ha sido eliminado.",
        "success"
      )
    }
  })
}


function mostrarContactos(lista = contactos) {
  const tbody = document.querySelector('#tablaContactos tbody')
  tbody.innerHTML = ''
  lista.forEach(c => {
    const fila = document.createElement('tr');
    fila.innerHTML = 
    `<td>${c.identificacion}</td>
      <td>${c.nombre}</td>
      <td>${c.apellido}</td>
      <td>${c.correo}</td>
      <td>${c.celular}</td>`
    tbody.appendChild(fila)
  })
}

function limpiarFormulario() {
  document.getElementById('identificacion').value = ''
  document.getElementById('nombre').value = ''
  document.getElementById('apellido').value = ''
  document.getElementById('correo').value = ''
  document.getElementById('celular').value = ''
}


document.getElementById('btnAgregar').addEventListener('click', () => {
  const identificacion = document.getElementById('identificacion').value.trim()
  const nombre = document.getElementById('nombre').value.trim()
  const apellido = document.getElementById('apellido').value.trim()
  const correo = document.getElementById('correo').value.trim()
  const celular = document.getElementById('celular').value.trim()

  if (!identificacion || !nombre || !apellido || !correo || !celular) {
    Swal.fire({
      icon: "warning",
      title: "Campos vacíos",
      text: "Completa todos los campos para agregar el contacto."
    })
    return
  }

  const contacto = new Contacto(identificacion, nombre, apellido, correo, celular)
  agregarContacto(contacto)
})

document.getElementById('btnConsultar').addEventListener('click', () => {
  const id = document.getElementById('identificacion').value
  const contacto = consultarContacto(id)

  if (contacto) {
    mostrarContactos([contacto])
  } else {
    Swal.fire({
      icon: "error",
      title: "Contacto no encontrado",
      text: "No se encontró un contacto con esa identificación."
    });
  }
})


document.getElementById('btnActualizar').addEventListener('click', () => {
  const contacto = new Contacto(
    document.getElementById('identificacion').value,
    document.getElementById('nombre').value,
    document.getElementById('apellido').value,
    document.getElementById('correo').value,
    document.getElementById('celular').value
  )
  actualizarContacto(contacto)
})

document.getElementById('btnEliminar').addEventListener('click', () => {
  const id = document.getElementById('identificacion').value
  eliminarContacto(id)
})
