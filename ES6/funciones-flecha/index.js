/*
saludar();

function saludar(){
    console.log('Hola mundo');
}

let saludarV2 = function(){
    console.log('Hola mundo');
}

saludarV2();

let saludarV3 = (nombre,apellido) => {
    console.log('Hola mundo ' + nombre + " " +apellido);
}

let operacion = (a,b) => {
    a = a*a;
    b = b*b;
    return a+b
};

console.log(operacion(2,3)); // undefined

let arreglo = [1,2,3,4,5,6,7,8,9,10];
let palabras = ['hola','mundo','como','estan'];


// filter sort map reduce forEach
arreglo.filter((elemento) => elemento % 2 === 0)
.forEach( (elemento) => console.log(elemento));

palabras.map((elemento) => elemento.toUpperCase())
.forEach( (elemento) => console.log(elemento));
*/
//QUEREMOS QUE SEAN A CONVERTIDOS A CUADRADOS
let numeros = [2,5,3,9];
let numerosCuadrados =  numeros.map((elementos)=> elementos*elementos);
console.log(numerosCuadrados);

numeros.map((elementos)=> {
    elementos+=1;
    return elementos*elementos;
})
.forEach((elementos)=> console.log(elementos));
