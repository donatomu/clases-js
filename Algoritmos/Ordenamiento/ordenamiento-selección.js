/*
Ordenamiento por selección:
1. Buscar el mínimo elemento de la lista
2. Intercambia con el primer elemento
3. Busca el mínimo resto de la lista
4. Intercambia con el segundo
5. Asi sucesivamente
*/

function ordenamientoSeleccion(arreglo){
    let tamanio = arreglo.length;
    for(let i = 0;i< tamanio -1 ;i++){
        let minimo = i;
        for(let j = i+1; j< tamanio; j++){ 
            if(arreglo[j] < arreglo[minimo]){
                minimo = j;
            }
        }
        //intercambio 
        let aux = arreglo[i];
        arreglo[i] = arreglo[minimo];
        arreglo[minimo] = aux;
    }
    return arreglo;
}


let arreglo = [64,25,12,22,11];

console.log(ordenamientoSeleccion(arreglo)) // [11, 12, 22, 25, 64]