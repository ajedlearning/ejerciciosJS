console.log('Bienvenido');
console.log('********************************');


// **************************jercicio 1*******************************
console.log('Ejercicio 1');
function contarCaracteres(cadena = 'Default'){
    if(typeof cadena === 'string'){

         if(cadena.length>1){
        return `La cadena ${cadena} tiene ${cadena.length} caracteres`; 
    }
    
    return `La cadena ${cadena} tiene ${cadena.length} caracter`;  
    }else{
        return console.error('El valor introducido debe ser un String')
    }
 
    
}

console.log(contarCaracteres('5'))



console.log('********************************');
console.log('Ejercicio 2');

function recortarTexto(cadena='Default', numeroCaracter=7){
    if(typeof(cadena)==='string' && !isNaN(numeroCaracter)){
      return cadena.slice(0, numeroCaracter)  
    }
    return console.error('Uno de los tipos de datos no es correcto');
}

console.log(recortarTexto('Hola como estas',3));

console.log('********************************');
console.log('Ejercicio 3');

function separar(cadena ='Default', separador=''){
    if(typeof cadena === 'string' && typeof separador === 'string'){
        if(cadena.split(separador)[0]===cadena){
           
            return console.warn('El sepador incluido no se encuentra en la cadena',cadena);
        }else{
            return cadena.split(separador) ; 
        }
        
    }

    return console.error('Uno de los tipos de datos no es correcto');
   
}
console.log(separar('Ayyyryyynyyyayyylyyydyyyo','yyy'));

console.log('********************************');
console.log('Ejercicio 4');

function repetirN(cadena='Default', veces=10){

    if(typeof(cadena)==='string' && !isNaN(veces)){
        for (let i = 0; i < veces; i++) {
        
            console.log(cadena + ' ' + (i+1));
        }
    }else{
       return console.error('Debes introducir valores válidos'); 
    }

}

repetirN('hola', 10);
