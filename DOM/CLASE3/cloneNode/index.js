function clonarElemento(){
    let ultimoElemento = document.getElementById('lista').lastElementChild;
    let clon = ultimoElemento.cloneNode(true);
    clon.textContent = "Elemento clonado";

    document.getElementById('lista').appendChild(clon);
}