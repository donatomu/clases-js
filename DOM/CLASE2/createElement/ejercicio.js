function agregarCurso(){
    let nombreCurso = document.querySelector('#curso-nombre').value;
    let descripcionCurso = document.querySelector('#descripcion').value;
    let dificultadCurso = document.querySelector('#nivel-dificultad').value;

    if(nombreCurso === ''){
        alert('Porfavor ingrese un nombre de curso')
        return;
    }
    var nuevoCurso = document.createElement('li');
    nuevoCurso.innerHTML = '<h2>' + nombreCurso + '</h2>' + '<p>' + 
    descripcionCurso + '</p>' + '<p>' + dificultadCurso + '</p>';

    document.querySelector('#curso-lista').appendChild(nuevoCurso);
    //document.querySelector('#curso-formulario').reset();
}

/*
let formulario= document.querySelector('#curso-formulario');
formulario.innerHTML = '<h1>Hola</h1>'

*/