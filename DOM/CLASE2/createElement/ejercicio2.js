function agregarParrafo(){
    let contenido = document.getElementById('contenido-parrafo').value

    if(contenido!== ''){
        let parrafo = document.createElement('p');
        parrafo.textContent = contenido;
        let contenedor = document.getElementById('contenedor');
        contenedor.appendChild(parrafo);
        document.getElementById('contenido-parrafo').value = '';
    }else{
        alert('No se puede agregar un parrafo vacio');
    }
}

function removerParrafo(){
    let contenedor = document.getElementById('contenedor');
    let parrafos = contenedor.getElementsByTagName('p');
    if(parrafos.length>0){//removeChild [0][1][2]  - tamaño es 3-1=2
        //ELIMINAR EL ULTIMO PARRRAFO
        contenedor.removeChild(parrafos[parrafos.length-1]);
    }else{
        alert('No hay parrafos')
    }
}