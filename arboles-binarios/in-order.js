// IZQUIERDA-CENTRO-DERECHA
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


function inOrder(raiz){
    let resultados = []; // almacenar los resultados
    let stack = []; // almacenar los nodos que ya han sido recorridos 
    let nodo = raiz; // nodo actual

    while(nodo !=null || stack.length>0){
        while( nodo !==null ){
            stack.push(nodo);
            nodo = nodo.izquierda;
        }
        nodo = stack.pop();
        resultados.push(nodo.valor)
        nodo = nodo.derecha; // avanzar al siguiente nodo
    }
    return resultados;
}

// RECORRIDO RECURSIVO
let resultadosV1= [];
function inOrderRecursivo(nodo,resultados){
    if(nodo !==null){ //caso base
        inOrderRecursivo(nodo.izquierda,resultados);
        resultados.push(nodo.valor);
        inOrderRecursivo(nodo.derecha,resultados);
    }
}


console.log(inOrder(raiz)); // [2, 4, 7, 8, 9, 11, 12, 16, 19, 21, 25]

