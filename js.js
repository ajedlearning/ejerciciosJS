console.log('Bienvenido');
console.log('********************************');


// **************************jercicio 1*******************************
console.log('Ejercicio 1');
function contarCaracteres(cadena = 'Default'){
    if(cadena.length>1){
        return `La cadena ${cadena} tiene ${cadena.length} caracteres`; 
    }
    
    return `La cadena ${cadena} tiene ${cadena.length} caracter`;
    
}

console.log(contarCaracteres('A'))

console.log('********************************');
console.log('Ejercicio 2');

function recortarTexto(cadena='Default', numeroCaracter=7){
    
    return cadena.slice(0, numeroCaracter)
}

console.log(recortarTexto('Hola como estas', 4));

console.log('********************************');
console.log('Ejercicio 3');

function separar(cadena ='Default', separador=''){
    return cadena.split(separador);
}
console.log(separar('Ayyyryyynyyyayyylyyydyyyo','yyy'));

console.log('********************************');
console.log('Ejercicio 4');

function repetirN(cadena='Default', veces=10){
    for (let i = 0; i < veces; i++) {
        
        console.log(cadena + ' ' + (i+1));
    }
    
    
}

repetirN('hola',10);
