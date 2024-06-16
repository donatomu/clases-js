/*
La recursividad es una técnica de programación en la que una función se llama a sí misma para resolver un problema. 
Esta técnica puede simplificar la solución de problemas que de otra forma serían difíciles de abordar mediante la iteración (bucles).

Componentes de la Recursividad

Caso Base: Es la condición que detiene la recursión. Sin un caso base, una función recursiva continuaría llamándose a sí misma indefinidamente, llevando a un desbordamiento de pila

Caso Recursivo: Es la parte de la función donde la misma se llama a sí misma con un conjunto de parámetros modificados, acercándose al caso base.


Ventajas:

Simplicidad: Las soluciones recursivas son más fáciles de entender y escribir.
Claridad: Puede hacer que el código sea más claro y más parecido a la definición matemática.

Desventajas:
Eficiencia: Puede ser menos eficiente debido al costo de las llamadas de función y uso de memoria.
Desbordamiento de Pila: Sin un caso base adecuado, puede llevar a un desbordamiento de pila.

*/

//CONTEO HACIA ATRAS

/* ITERATIVO
for(let i=10;i<=1;i--){
    console.log(i)
}

function cuentaAtras(numero){
    //caso base
    if(numero===0){
        return;
    }
    console.log(numero);
    return cuentaAtras(numero-1); // 10 9 8 7 6 5 4 3 2 1
}
cuentaAtras(10);

// !5 = 5*4*3*2*1  = 120 //

function factorial(n){
    if(n===0){
        return 1;
    }
    console.log(n);
    return n*factorial(n-1);
}

console.log(factorial(5));*/


// 1 + 2
// [1,2,3,4,5] [2,3,4,5] [3,4,5] [4,5] [5] []
function sumaArregloRecursivo(arreglo){
    if(arreglo.length===0){
        return 0;
    }else{
        // llamada recursiva: el primer elemento más la suma del resto del arreglo
        return arreglo[0]+sumaArregloRecursivo(arreglo.slice(1)); // .slice elimina el primer elemento del arreglo
    }
}

console.log(sumaArregloRecursivo([1,2,3,4,5])); // 15


