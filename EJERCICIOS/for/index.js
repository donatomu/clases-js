/* i+=10 es lo mismo que i=i+10
for(let i=0; i<=10; i++){
    console.log(i);
}*/



/*
//EJERCICIO 1:
//LA SUMA DE UN ARREGLO QUE CONTENGA NUMEROS DEL 1 AL 10 
let numeros = [1,2,3,4,5,6,7,8,9,10]
let sumaTotal=0;
let sumaPares = 0;
let sumaImpares=0;
let sumaMultiplos3=0;
//[0] [1] ... [10] pero el arreglo es [0] [1] ... [9]
// 6%2 = 0 
for(let i=0; i<numeros.length; i++){
    
    //QUIERO QUE LA SUMA  SOLO SEA DE LOS PARES
    
    if (numeros[i] % 2 ==0){
        //SUMA DE PARES
        sumaPares += numeros[i];
    }else{
        //SUMA DE IMPARES
        sumaImpares += numeros[i];
    }

    if(numeros[i] % 3 ==0){
        sumaMultiplos3 += numeros[i];
    }
    
    // SUMA TOTAL: sumaTotal += numeros[i];
}
//console.log("La suma es: "+ sumaTotal)
console.log("La suma de los pares es: "+ sumaPares)
console.log("La suma de los impares es: "+ sumaImpares)
console.log("La suma de los multiplos de 3 es: "+ sumaMultiplos3)
console.log("El tamaño del arreglo es : "+numeros.length)
// .length es una propiedad que nos dice cuantos elementos tiene un arreglo
*/

/*
Ejercicio 2: Contador de vocales en una cadena

let texto = prompt("escribe una palabra") // ALICATE - alicate
let vocales = "aeiou"
let contadorVocales = 0;
// .toLowerCase() convierte una cadena a minusculas
// .toUpperCase() convierte una cadena a mayusculas
for(let i=0; i<texto.length; i++){ 
    if(vocales.includes(texto[i].toLowerCase())){ // 
        contadorVocales++;
    }
}
console.log('El número de vocales en: '+ texto + ' es: '+ contadorVocales)
*/

/*
Vamos a pedirle al usuario que ingrese un número y 
vamos a imprimir su tabla de multiplicar hasta el 12

let numero = parseInt(prompt("ingrese un numero"))
for(let i=0; i<=12; i++){
    //console.log(numero + " x " + i + " = "+ numero*i)
    console.log(`${numero} x ${i} = ${numero*i}`) // esto es un template string
}
*/

/*
/*Ejercicio 4 
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) Suma de los números pares.
*/
let elementos = [];
let contadorNegativo =0;
let contadorPositivo = 0;
let contadorMultiplos = 0;
let sumaPares = 0
for(let i =0;i<10;i++){
    elementos.push(parseInt(prompt("Ingrese un número")))
}
for(let i=0; i<elementos.length; i++){
    //La cantidad de valores negativos ingresados.
   if(elementos[i]<0){
    contadorNegativo++;     
   }else if(elementos[i]>0){
    contadorPositivo++;
   }

    if(elementos[i]%15 ==0){
        contadorMultiplos++;
    }
   if(elementos[i]%2 == 0){
        sumaPares+=elementos[i];
   }
}


console.log(`Cantidad de valores negativos: ${contadorNegativo}`);
console.log(`Cantidad de valores positivos: ${contadorPositivo}`);
console.log(`Cantidad de múltiplos de 15: ${contadorMultiplos}`);
console.log(`Valor acumulado de los números pares: ${sumaPares}`);


