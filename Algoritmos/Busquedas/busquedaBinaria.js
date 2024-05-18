function busquedaBinaria(arreglo, objetivo){
    let inicio = 0
    let final = arreglo.length -1;

    while(inicio <= final){
        let medio = Math.floor((inicio + final) / 2);
        if(arreglo[medio] == objetivo){
            return medio; 
        }else if(arreglo[medio] < objetivo){
            inicio = medio +1;
        }else{ //arreglo[medio] > objetivo
            final = medio -1;
        }
    }
    return -1;
}

let arreglo = [0,2,4,5,6,7,8,9,13,27]
let objetivo = 13;
let resultado = busquedaBinaria(arreglo,objetivo);
console.log("La posición del objetivo en el arreglo es: "+resultado); 