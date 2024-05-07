let contenedor = document.querySelector('#contenedor')
let anterior = document.getElementById('anterior')
let elementoNuevo = document.createElement('p')
elementoNuevo.textContent = 'Este es un nuevo elemento'

document.getElementById('reemplazar').addEventListener('click', ()=>{
    contenedor.replaceChild(elementoNuevo, anterior)
    console.log(anterior.textContent)
})