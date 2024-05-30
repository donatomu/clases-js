function ordenamientoQuickSort(arreglo){
    if(arreglo.length <= 1){
        return arreglo;
    }
    let pivote = arreglo[arreglo.length-1];
    let izquierda = [];
    let derecha = [];
    
    for(let i =0;i<arreglo.length-1;i++){
        if(pivote > arreglo[i]){
            izquierda.push(arreglo[i]);
        }else{
            derecha.push(arreglo[i]);
        }
    }
    console.log("pivote: "+pivote)
    console.log("izquierda: "+izquierda)
    console.log("derecha: "+derecha)
    console.log(arreglo)

    return ordenamientoQuickSort(izquierda).concat(pivote,ordenamientoQuickSort(derecha));
}

let arreglo = [64,25,12,22,11];
console.log(ordenamientoQuickSort(arreglo)) // [11, 12, 22, 25, 64]

