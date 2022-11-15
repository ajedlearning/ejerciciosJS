console.log('Bienvenido')
console.log('********************************')

// **************************jercicio 1*******************************
console.log('Ejercicio 1')

const contarCaracteres = (cadena = '') => {
  if (typeof cadena === 'string') {
    if (cadena.length > 1) {
      console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
    } else {
      console.log(`La cadena ${cadena} tiene ${cadena.length} caracter`)
    }
  } else {
    console.error(`Dato incorrecto en la cadena`)
  }
}

contarCaracteres('Arnaldo')

console.log('********************************')
console.log('Ejercicio 2')

const recortarTexto = (cadena = 'Default', numeroCaracter = 7) => {
  if (typeof cadena === 'string' && !isNaN(numeroCaracter)) {
    return cadena.slice(0, numeroCaracter)
  }
  console.error('Uno de los tipos de datos no es correcto')
}

console.log(recortarTexto('Hola como estas', 4))

console.log('********************************')
console.log('Ejercicio 3')

const separar = (cadena = 'Default', separador = '')=>
  (typeof cadena === 'string' && typeof separador === 'string')
  ?(cadena.split(separador)[0] === cadena)
  ?console.warn('El sepador incluido no se encuentra en la cadena ', cadena)
  :cadena.split(separador)
  :console.error('Uno de los tipos de datos no es correcto')


console.log(separar('Ayyyryyynyyyayyylyyydyyyo', ''))

console.log('********************************')
console.log('Ejercicio 4')

const repetirN = (cadena = 'Default', veces = 10)=> {
  if (typeof cadena === 'string' && !isNaN(veces)) {
    for (let i = 0; i < veces; i++) {
      console.log(cadena + ' ' + (i + 1))
    }
  } else {
    return console.error('Debes introducir valores válidos')
  }
}

repetirN('hola', 10)
