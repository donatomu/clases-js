let elementoh1 = document.querySelector('h1');
let parrafo = document.createElement('p');
parrafo.innerText = 'Hola Mundo';

elementoh1.after(parrafo);