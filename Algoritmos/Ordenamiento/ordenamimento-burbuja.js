/* 
Funcionamiento:
1. Comparamos el primer elemento con el segundo.
2. Si el primer elemento es mayor que el segundo, los intercambiamos.
3. Si no, dejamos los elementos como están.
4. Repetimos el proceso con el segundo y tercer elemento, y así sucesivamente.
5. Repetimos el proceso hasta que no se necesiten más intercambios.

[64,25,12,22,11] // 5 elementos [25,25,12,22,11] => [25,64,12,22,11]
*/
function ordenamientoBurbuja(arreglo){
    for(let i =0;i<arreglo.length-1;i++){// i = 0
        for(let j=0;j<arreglo.length-i-1;j++){ // 0<= j <=3
            if(arreglo[j] > arreglo[j+1]){
                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }

        console.log(arreglo);
    }   
    return arreglo;
}

let arreglo = [64,25,12,22,11];

console.log(ordenamientoBurbuja(arreglo))
