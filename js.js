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

const separar = (cadena = 'Default', separador = '') =>
  typeof cadena === 'string' && typeof separador === 'string'
    ? cadena.split(separador)[0] === cadena
      ? console.warn(
          'El sepador incluido no se encuentra en la cadena ',
          cadena,
        )
      : cadena.split(separador)
    : console.error('Uno de los tipos de datos no es correcto')

console.log(separar('Ayyyryyynyyyayyylyyydyyyo', ''))

console.log('********************************')
console.log('Ejercicio 4')

const repetirN = (cadena = 'Default', veces = 10) => {
  if (typeof cadena !== 'string' || isNaN(veces))
    return console.error('Debes introducir valores válidos')
  if (veces === 0) return console.error('Las veces no pueden ser cero')
  if (veces < 0) return console.error('Las veces no pueden ser negativas')

  for (let i = 0; i < veces; i++) {
    console.log(cadena + ' ' + (i + 1))
  }
}

repetirN('Hola', 3)

console.log('********************************')
console.log('Ejercicio 5')

const invertir = (cadena = 'default') =>
  typeof cadena === 'string'
    ? console.log(cadena.split('').reverse().join(''))
    : console.error('Debes ingresa un string')

invertir('aleuzeneV')

console.log('********************************')
console.log('Ejercicio 6')

const numeroVeces = (cadena = '', texto = '') => {
  if (typeof cadena !== 'string' || typeof texto !== 'string')
    return console.error('El valor debe ser string')

  let i = 0
  contador = 0

  while (i !== -1) {
    i = cadena.indexOf(texto, i)
    if (i !== -1) {
      i++
      contador++
    }
  }

  console.log(
    `La palabra "${texto}". Se repite ${contador} veces en el texto "${cadena}".`,
  )
}

numeroVeces(
  'hola arnaldo como estas como te ha ido hoy como te sientes',
  'como',
)

console.log('********************************')
console.log('Ejercicio 7')

const palindromo = (palabra = 'somos') => {
  if (typeof palabra !== 'string')
    return console.error('La cadena introducida no es un string')

  palabra = palabra.toLowerCase()

  if (palabra.split('').reverse().join('') === palabra) {
    return true
  }

  return false
}

console.log(palindromo('reconocer'))

console.log('********************************')
console.log('Ejercicio 8')

const eliminar = (cadena, texto) =>
  typeof cadena === 'string' && typeof texto === 'string'
    ? cadena.replaceAll(texto, '')
    : console.error('Los valores introducidos deben ser String')

let parr = `xyz1, xyz2, xyz3, xyz4 y xyz5`

console.log(eliminar(parr, 'xyz'))

console.log('********************************')
console.log('Ejercicio 9')

const numAleatorio = () => Math.round(Math.random() * 100 + 500)

console.log(numAleatorio())

console.log('********************************')
console.log('Ejercicio 10')

const capicua = (num = 0) => {
  typeof num !== 'number'
    ? console.error('Debes introducir un numero')
    : num < 0
    ? console.error('Debes introducir un numero positivo')
    : num.toString().split('').reverse().join('') === num.toString()
    ? console.log(`El numero ${num} si es Capícua.`)
    : console.log(`El numero ${num} no es Capícua.`)
}

capicua(90.7)

console.log('********************************')
console.log('Ejercicio 11')

const factoria = (numero = undefined) => {
  if (typeof numero !== 'number')
    return console.error('Debes ingresar un número')
  if (numero < 0) return console.error('Debes ingresar un número positivo')
  if (numero === 0)
    return console.error('Debes ingresar un número mayor a Cero')
  let factorial = 1

  for (let i = 1; i <= numero; i++) {
    factorial *= i
  }

  return factorial
}

console.log(factoria(5))

console.log('********************************')
console.log('Ejercicio 12')

const numPrimo = (num = undefined) => {
  if (num === undefined) return console.error('Debes ingresar un número')
  if (typeof num !== 'number') return console.error('Debes ingresar un número')
  if (num < 0) return console.error('Debes ingresar un número positivo')
  if (num === 0) return console.error('Debes ingresar un número mayor a Cero')
  if (num === 1) return console.error('El numero no puede ser 1')

  let indicador = false
  let esDivisible = ''

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      indicador = true
      esDivisible = i
      break
    }
  }

  return indicador
    ? console.log(
        `El numero ${num} no es Primo, ya que es divisible por ${esDivisible} `,
      )
    : console.log(`El numero ${num} si es Primo`)
}

numPrimo(4)

console.log('********************************')
console.log('Ejercicio 13')

const numParImpar = (num) => {
  if (num === undefined) return console.error('Debes ingresar un número')
  if (typeof num !== 'number') return console.error('Debes ingresar un número')
  if (num < 0) return console.error('Debes ingresar un número positivo')

  if (num % 2 === 0) return console.log('El Número es Par')
  if (num % 2 > 0) return console.log('El Número es Impar')
}

numParImpar(23)

console.log('********************************')
console.log('Ejercicio 14')

const convertir = (num = 0, tipo = 'C') => {
  let resultado = null
  if (typeof num !== 'number')
    return console.error('debe ingresar un numero en el primer parametro')

  tipo = tipo.toUpperCase()

  if (typeof tipo !== 'string')
    return console.error('debe ingresar un string en el segundo parametro')
  if (tipo !== 'C' && tipo !== 'F')
    return console.error(
      'debe ingresar en el segundo parametro una letra C para grados Celsius, o una letra F para Fahrenheit',
    )

  if (tipo === 'C') {
    resultado = num * (9 / 5) + 32
    return console.log(
      `${num} grados Celsius equivales a ${resultado} grados Fahrenheit`,
    )
  }

  if (tipo === 'F') {
    resultado = (num - 32) * (5 / 9)
    return console.log(
      `${num} grados Fahrenheit  equivales a ${resultado} grados Celsius`,
    )
  }
}

convertir(0, 'f')

console.log('********************************')
console.log('Ejercicio 15')

const convertirBin = (numBin = undefined, base = undefined) => {
  if (!base)
    return console.error('Debe introducir un número en el segundo valor')
  if (!numBin)
    return console.error('Debe introducir un número en el primer valor')

  if (typeof base !== 'number')
    return console.error('Debe introducir un número en el segundo valor')

  if (typeof numBin !== 'number')
    return console.error('Debe introducir un número en el primer valor')

  // I evaluate that numBin is binary
  let arr = numBin.toString().split('')

  //  evluate if value of b is zero or one
  if (base === 2) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '0' || arr[i] === '1') {
        b = arr[i]
      } else {
        return console.error('El numero debe ser binario')
        break
      }
    }
    b === '0' || b === '1'
      ? console.log(
          `El binario ${numBin} en decimal es = ${parseInt(numBin, base)}`,
        )
      : false
  } else if (base === 10) {
    return console.log(
      `El decimal ${numBin} en binario es = ${numBin.toString(2)}`,
    )
  }
}
convertirBin(1110011, 2)

console.log('********************************')
console.log('Ejercicio 16')

const aplicarDescuento = (monto = 0, porcen = 0) => {
  if (typeof monto !== 'number')
    return console.error(`El monto debe ser un número`)
  if (typeof porcen !== 'number')
    return console.error(`El porcentaje debe ser un número`)
  if (monto < 0 || porcen < 0)
    return console.error(`No se acepta número negativo`)

  console.log(
    `El ${porcen} por ciento de descuento de ${monto} es ${
      (porcen * monto) / 100
    }, tu monto total queda en ${monto - (porcen * monto) / 100}.`,
  )
}

aplicarDescuento(200, 10)

console.log('********************************')
console.log('Ejercicio 17')

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.error('Debe ingresar la fecha')
  if (!(fecha instanceof Date))
    return console.error('Debe ingresar una fecha válida')

  let fechaAMenosFecha = new Date().getTime() - fecha.getTime()
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365
  let anioTotal = Math.floor(fechaAMenosFecha / aniosEnMS)

  return Math.sign(anioTotal) === -1
    ? console.info(
        `Faltan ${Math.abs(anioTotal)} años para el ${fecha.getFullYear()}`,
      )
    : Math.sign(anioTotal) === 1
    ? console.info(`Han pasado ${anioTotal} años desde ${fecha.getFullYear()}`)
    : console.info(`Estamos en el años actual ${fecha.getFullYear()}`)
}

calcularAnios(new Date(2083, 3, 12))

console.log('********************************')
console.log('Ejercicio 18')

const contarVocalesConsonantes = (cadena='') => {
  if(typeof cadena !== 'string')return console.error('El valor introducidos deben ser String')
  cadena = cadena.toLocaleLowerCase();
  let vocales = 0, consonantes =0;
  for (const letra of cadena) {
    if(/[aeiouáéíóú]/.test(letra))vocales++;
    
    if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra))consonantes++;
    
  }

  return console.log({
    cadena,
    vocales,
    consonantes
  });
  
}
contarVocalesConsonantes('arnaldo');

