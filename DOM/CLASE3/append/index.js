let contenedorFormulario = document.getElementById('contenedor-formulario')

let formulario = document.createElement('form');
let label = document.createElement('label');
label.textContent = 'Ingrese su nombre:';
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Escribe tu nombre');
let boton = document.createElement('button')
boton.textContent = 'Enviar'
boton.addEventListener('click', function(event){
    event.preventDefault();
    let mensaje = document.createElement('p');
    mensaje.innerHTML = 'Hola, '+ input.value;
    contenedorFormulario.append(mensaje);
});
/*
formulario.appendChild(label);
formulario.appendChild(input);
formulario.appendChild(boton);
*/
formulario.append(label,input,boton);
contenedorFormulario.appendChild(formulario);
