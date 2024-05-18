/*
[0] [1] [2] [3]
*/
function busquedaSecuencial(arreglo, objetivo){
    for(let i = 0;i<arreglo.length;i++){
        if(arreglo[i] == objetivo){
            return i;
        }
    }
    return -1;
}
let arreglo = [10,20,30,40,50];
let objetivo = 30;
let resultado = busquedaSecuencial(arreglo,objetivo);
console.log("La posición del objetivo en el arreglo es: "+resultado); 
