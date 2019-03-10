// Funciones

// // ECMA 5
// function suma(a, b) {
//   console.log(a + b)
// }

// // ECMA 6
// const resta = (a, b) => {
//   return a - b
// }

// resta(40, 78)
// console.log(resta(10, resta(5, 2)))


// let total = resta(10, resta(5, 2))
// console.log(total)

// For

// let array = [5,2,8,4,9,0]

// console.log(   )

// for(let i = 0 ; i <= 5 ; i++) {
//   console.log(  array[i]   )
// }



// let a = 0
// while(a < 100) {
//   console.log(a)
//   a++
// }

// let b = 0
// do {
//   console.log("b", b)
//   b++
// } while (a < 100)



// inputs

let nombre = document.getElementById('nombre')
let texto = document.getElementById('texto')
let boton = document.getElementById('boton')
let img =document.getElementById('foto')



let newImg = 'https://selecciones.com.mx/wp-content/uploads/2018/06/como-saber-si-tu-perro-esta-enojado-4.jpg'

const saludar = () => {
  img.src = newImg
  texto.innerHTML = nombre.value
}

console.log( Math.random() )

boton.addEventListener('click', saludar)