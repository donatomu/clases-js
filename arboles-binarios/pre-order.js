// CENTRO - IZQUIERDA - DERECHA
class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

let raiz = new Nodo(12);
raiz.izquierda = new Nodo(7);
raiz.derecha = new Nodo(21);

raiz.izquierda.izquierda = new Nodo(4);
raiz.izquierda.derecha = new Nodo(9);

raiz.izquierda.izquierda.izquierda = new Nodo(2);

raiz.izquierda.derecha.izquierda = new Nodo(8);
raiz.izquierda.derecha.derecha = new Nodo(11);

raiz.derecha.izquierda = new Nodo(16);
raiz.derecha.derecha = new Nodo(25);

raiz.derecha.izquierda.derecha = new Nodo(19);

// RECORRIDO ITERATIVO PARA ENCONTRAR ESTE ORDEN
function recorridoPreOrdenIterarivo(raiz){
    let resultados = [] ; // almacenar los resultados
    if(raiz===null) return resultados; // si la raiz es nula, retornar un arreglo vacio

    let stack = [raiz]; // almacenar los nodos que ya han sido recorridos

    while(stack.length>0){
        let nodo = stack.pop();
        resultados.push(nodo.valor);

        if(nodo.derecho !==null){
            stack.push(nodo.derecho);
        }
        if(nodo.izquierda !==null){
            stack.push(nodo.izquierda);
        }
    }

    /*
    El bucle while se ejecuta mientras la pila no esté vacía.
    En cada iteración del bucle:
    Sacamos un nodo de la pila con stack.pop().
    Añadimos el valor del nodo a resultados.

    Si el nodo tiene un hijo derecho, lo empujamos a la pila.
    Si el nodo tiene un hijo izquierdo, lo empujamos a la pila.
    Al empujar primero el hijo derecho y luego el hijo izquierdo, aseguramos que el hijo izquierdo sea procesado primero en la siguiente iteración del bucle.
    */
    return resultados;
}

console.log(recorridoPreOrdenIterarivo(raiz))