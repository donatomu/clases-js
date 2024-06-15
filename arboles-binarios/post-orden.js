// IZQUIERDA-DERECHA-CENTRO
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


function postOrder(raiz){
    let resultados = [];
    let stack1 = [raiz]; // se inicializa como el nodo inicial de la raiz
    let stack2 = [];

    while(stack1.length>0){
        let nodo = stack1.pop();
        stack2.push(nodo);

        if(nodo.izquierda !==null){
            stack1.push(nodo.izquierda);
        }
        if(nodo.izquierda!=null){
            stack1.push(nodo.derecha);
        }
    }

    while(stack2.length>0){
        let nodo = stack2.pop();
        resultados.push(nodo.valor);
    }

    return resultados;
}

console.log(postOrder(raiz)); // [2, 4, 8, 11, 9, 7, 19, 16, 25, 21, 12]