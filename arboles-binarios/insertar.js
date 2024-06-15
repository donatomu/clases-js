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

function insertar(raiz,valor){
    if(raiz ===null){
        return new Nodo(valor);
    }

    if(valor<raiz.valor){
        raiz.izquierda = insertar(raiz.izquierda,valor);
    }else if(valor > raiz.valor){
        raiz.derecha = insertar(raiz.derecha,valor);
    }
    return raiz;
}

insertar(raiz,20);

function imprimirArbol(raiz) {
    if (raiz === null) {
        return;
    }
    console.log(raiz.valor);
    imprimirArbol(raiz.izquierda);
    imprimirArbol(raiz.derecha);
}

imprimirArbol(raiz);