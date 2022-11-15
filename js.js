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
   
if(typeof cadena !== 'string' || isNaN(veces))return console.error('Debes introducir valores válidos');
if(veces === 0)return console.error('Las veces no pueden ser cero'); 
if(veces < 0)return console.error('Las veces no pueden ser negativas'); 
    
for (let i = 0; i < veces; i++) {
    console.log(cadena + ' ' + (i + 1))
}
        
}

repetirN('Hola', 3)

console.log('********************************')
console.log('Ejercicio 5')

const invertir = (cadena='default') =>
    (typeof cadena === 'string')
    ?console.log(cadena.split('').reverse().join(''))
    :console.error('Debes ingresa un string');


invertir('aleuzeneV')

console.log('********************************')
console.log('Ejercicio 6')

const numeroVeces = (cadena='' , texto='')=>{
    if(typeof cadena !== 'string' || typeof texto !== 'string')return console.error('El valor debe ser string');

    let i = 0;
    contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto,i)
        if(i !== -1){
          i++;
          contador++;      
        }
    }

console.log(`La palabra "${texto}". Se repite ${contador} veces en el texto "${cadena}".`);
       
}

numeroVeces('hola arnaldo como estas como te ha ido hoy como te sientes','como')


