/*Ejercicio1: El usuario ingresa dos número y vamos a devolver la diferencia de los mismos.
let num1 = parseInt(prompt('Ingrese un número'))
let num2 = parseInt(prompt("ingrese un numero"))
let resta;
console.log(resta);
if(num1 > num2){
    resta = num1 - num2;
    console.log(`La resta de los números es ${resta}`); //ES6 Template String 
    //console.log("La resta de los numeros es " + resta)
}else{
    resta = num2-num1;
    console.log(`La resta de los números es ${resta}`)
}*/

/*
//EJERCICIO2: Escribe un programa que solicite al usuario los tres lados de un triángulo. 
//El programa debe (determinar) si el triángulo es equilátero, isósceles o escaleno.
let lado1 = parseInt(prompt('ingrese el lado1'))
let lado2 = parseInt(prompt('Ingrese el lado2'))
let lado3 = parseInt(prompt('Ingrese el lado3')) 
let triangulo;
// == (compara valores)   === (compara tipo de dato y valores) 
if (lado1==lado2 || lado1 == lado3 || lado2 == lado3){
    triangulo = 'Isosceles'
    console.log(triangulo);
}
 
if(lado1==lado2 && lado2 == lado3) {
    triangulo = 'equilateros'
    console.log(triangulo);
}

if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
    triangulo = "escaleno"
    console.log(triangulo);
}
Otra forma de hacerlo
if (lado1==lado2 || lado1 == lado3 || lado2 == lado3){
    triangulo = 'Isosceles'
    console.log(triangulo);
}else if(lado1==lado2 && lado2 == lado3){
    triangulo = 'equilateros'
    console.log(triangulo);
}else{
    triangulo = "escaleno"
    console.log(triangulo);
}*/

//EJERCICIO3: 
/*
Escribe un programa que solicite una calificación (entre 0 y 100) y determine la letra de la calificación según la siguiente tabla:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
E: 0-59

let calificacion = parseInt(prompt("Ingrese su calificación entre 0 y 100"))
// Si califcacion es mayor a 90 y menor que 100
if(calificacion >= 90 && calificacion <= 100){
    //PARA EL A
    console.log("Calificación: A");
}else if(calificacion >= 80 && calificacion <=89){
    console.log("Calificación: B");
}else if(calificacion>=70 && calificacion<=79){
    console.log("Calificación: C");
}else if(calificacion>=60 && calificacion<=69){
    console.log("Calificación: D");
}else{
    console.log("Calificación: E");
}*/

/*
Ejercio 5:
En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. 
Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, 
si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.

let tiempo = parseInt(prompt("Ingrese el tiempo"))
let distancia = parseInt(prompt("Ingrese la distancia"))
// d = v*t => v = d/t
let velocidad = distancia/tiempo;

if(velocidad >=40 && velocidad <=60){
    console.log("el conductor a sido aprovado");
}else{
    console.log("el conductor sera desaprovado");
}
*/

/*
Ejercicio 6: Sistema de Descuentos en una Tienda
Escribe un programa que solicite al usuario el nombre del producto, la cantidad comprada y el precio unitario. 
Luego, el programa debe calcular el precio total y aplicar un descuento basado en las siguientes reglas:

Si la cantidad es mayor a 10, se aplica un 10% de descuento.
Si la cantidad es entre 5 y 10 (inclusive), se aplica un 5% de descuento.
Si la cantidad es menor a 5, no se aplica ningún descuento.
Finalmente, el programa debe mostrar el precio total antes del descuento, 
el monto del descuento aplicado y el precio final después del descuento.
*/

let producto = prompt("ingrese el nombre del producto")
let precio = parseInt(prompt("ingrese el precio del producto"))
let cantidad = parseInt(prompt("ingrese la cantidad"))
let precioTotal = precio*cantidad
if (cantidad >10){
    precioTotal = precioTotal - precioTotal*0.10
}else if(cantidad >=5 && cantidad <=10){
    precioTotal = precioTotal - precioTotal*0.05
}
console.log(`El nombre del producto es: ${producto}`)
console.log("el precioTotal va ser: " + precioTotal);
