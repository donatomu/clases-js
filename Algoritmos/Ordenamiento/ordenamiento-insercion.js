function ordenamientoInsersión(arreglo){
    let tamanio = arreglo.length;
    for(let i = 1;i<tamanio;i++){
        let actual = arreglo[i];
        let j = i-1;
        while(j>=0 && arreglo[j] > actual){ // valor de la izquierda > derecha
            arreglo[j+1] = arreglo[j];
            j = j-1;
        }
        arreglo[j+1] = actual;
    }
    return arreglo;
}

let arreglo = [64,25,12,22,11];

console.log(ordenamientoInsersión(arreglo)) // [11, 12, 22, 25, 64]