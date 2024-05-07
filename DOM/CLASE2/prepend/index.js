let elemento = document.getElementById('lista')
let listaCursos = ['CSS', 'JavaScript', 'React', 'Node.js'];
let boton = document.getElementById('boton');

function mostrar(){
    listaCursos.forEach(curso=>{
        let elementoLi = document.createElement('li')
        elementoLi.textContent = curso
        elemento.prepend(elementoLi)
    })
}

//boton.addEventListener('click', mostrar);

/*
boton.addEventListener('click', function(){
    listaCursos.forEach(curso=>{
        let elementoLi = document.createElement('li')
        elementoLi.textContent = curso
        elemento.prepend(elementoLi)
    })
})*/

boton.addEventListener('click', ()=>{
    listaCursos.forEach(curso=>{
        let elementoLi = document.createElement('li')
        elementoLi.textContent = curso
        elemento.prepend(elementoLi)
    })
})
