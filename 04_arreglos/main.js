// // Arreglos
// let arreglo = [3, 54, 100, 90, 0]

// console.log( arreglo[4] )
// arreglo[4] = 'hola'
// console.log(arreglo[4])

// // Objetos

// let sensei = {
//   nombre: 'angelo',
//   edad: 28,
//   email: 'angelo@ongrin.com'
// }
// sensei.apellido = 'luna'

// console.log( sensei )

// Preguntar con prompt:
// nombre
// email
// edad

// guardarlos en un arreglo
// guardarlos en un objeto

// imprimir arreglo y objeto completo

// imprimir cada elemento por separado.

// let nombre = prompt('ingresa nombre')
// let email = prompt('ingresa email')
// let edad = prompt('ingresa edad')

// let arreglo = [nombre, edad, email]

// let objeto = {
//   nombre: nombre,
//   edad: edad,
//   email: email
// }

// console.log(arreglo)
// console.log(objeto)

// console.log(arreglo[0])
// console.log(arreglo[1])
// console.log(arreglo[2])

// console.log(objeto.nombre)
// console.log(objeto.edad)
// console.log(objeto.email)

// JSON



let sensei = {
  nombre: 'angelo',
  edad: 28,
  email: 'angelo@ongrin.com',
  educacion: ['preescolar', 'primaria', {elemento: 4}],
  direccion: {
    calle: 'agustin melgar',
    interior: '3',
    exterior: '44'
  }
}

console.log( sensei.educacion[1] )
console.log(sensei.direccion.calle)
console.log(sensei.educacion[2].elemento)