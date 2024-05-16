let inputTarea = document.getElementById("cuadrado")
let boton = document.getElementById("boton")
let lista = document.getElementById("listas")
let btnBorrar = document.getElementById("borrador")

//AGREGAR LA FUNCIONALIDAD AL BOTON PARA QUE PUEDA AGREGAR TAREAS
boton.addEventListener( 'click' , agregarTarea);
btnBorrar.addEventListener('click', borrarTarea);
function agregarTarea(){
    let tarea = inputTarea.value;
    //CREA UN ELEMENTO DE TIPO LI, LE ASIGNAS EL TEXTO DE LA TAREA 
    let elementoLi = document.createElement('li')
    elementoLi.textContent = tarea


    //Vamos a crear un boton para eliminar la tarea
    let btnCompletado =document.createElement('button') //botonCompletado camelCase 
    btnCompletado.textContent = "completar"
    /*
    btnCompletado.addEventListener('click', function(){
        elementoLi.style.textDecoration = 'line-through'
    })*/
    btnCompletado.addEventListener('click', function(){
       elementoLi.classList.toggle('completada') //toggle si tiene la clase la quita y si no la tiene la pone
    })


    let btnElminarLi = document.createElement('button');
    btnElminarLi.textContent = 'Eliminar';
    btnElminarLi.addEventListener('click', function(){
        elementoLi.remove();
        btnElminarLi.remove();
        btnCompletado.remove();
    })
    

    //VAMOS A AÑADIR EL ELEMENTO LI CREADO A LA LISTA USANDO append
    lista.append(elementoLi,btnElminarLi,btnCompletado)
}
function borrarTarea(){
    lista.removeChild(lista.firstChild) //lastChild
}



 
  