// UNA FUNCION QUE ME TRAIGA LOS DATOS DE LA TIENDA
// fetch('https://fakestoreapi.com/products')
const productosPorPagina = 5;
let paginaActual = 1;
let totalPaginas = 1;
let productosGlobal = [];
let productosFiltrados = [];

// ceil es para redondear hacia arriba 0.5 -> 1 
// round es para redondear al numero mas cercano 0.5 -> 0
// random es para obtener un numero aleatorio entre 0 y 1

document.addEventListener('DOMContentLoaded', () => {
    obtenerProductos();
    mostrarCarrito();
});

async function obtenerProductos() {
    try {
      let response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('ERROR DE RED ' + response.statusText);
      }
      productosGlobal = await response.json();
      productosFiltrados = productosGlobal;
      totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina); // esto es para redondear hacia arriba
      mostrarProductos(paginaActual);
      actualizarBotones();
    } catch (error) {
      console.error('HAY PROBLEMA CON LA OPERACIÓN', error);
    }
}

function mostrarProductos(pagina){
    const contenedor = document.getElementById('productos')
    contenedor.innerHTML = ''
    let inicio = (pagina - 1) * productosPorPagina // es para saber donde inicia la pagina
    let final = inicio + productosPorPagina 

    let productosMostrar = productosFiltrados.slice(inicio, final) // [0] [1] [2] [3] [4]

    productosMostrar.forEach(producto => {
        let productoElemento = document.createElement('div')
        productoElemento.classList.add('producto')
        productoElemento.innerHTML = `
        <h2>${producto.title}</h2>
        <img src="${producto.image}" alt="${producto.title}">
        <p><strong>Precio:</strong> $${producto.price}</p>
        <button onclick="mostrarDetallesProducto(${producto.id})">Ver Detalles</button>
        <br>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedor.appendChild(productoElemento) 
    })
}

function cambiarPagina(direccion){
    paginaActual += direccion;
    if(paginaActual < 1){
        paginaActual = 1
    }
    if(paginaActual > totalPaginas){
        paginaActual = totalPaginas
    }
    mostrarProductos(paginaActual)
    actualizarBotones()
}

function actualizarBotones(){
    document.getElementById('prevPage').disabled = paginaActual ===1;
    document.getElementById('nextPage').disabled = paginaActual === totalPaginas;
}

// para el carrito
function agregarAlCarrito(idProducto){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(idProducto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito()
}

function mostrarCarrito(){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = '';

    carrito.forEach( idProducto =>{
        fetch(`https://fakestoreapi.com/products/${idProducto}`)
            .then(response => response.json())
            .then(producto=>{
                let itemCarrito = document.createElement('div');
                itemCarrito.classList.add('carrito-item');
                itemCarrito.innerHTML = `
                <h3>${producto.title}</h3>
                <img src="${producto.image}" alt="${producto.title}" style="width: 50px;">
                <p><strong>Precio:</strong> $${producto.price}</p>
                `;
                contenedorCarrito.appendChild(itemCarrito);
            })
    })
}

function buscarProductos(){
    let busqueda = document.getElementById('search').value.toLowerCase();
    productosFiltrados = productosGlobal.filter(producto => {
        producto.title.toLowerCase().includes(busqueda) // Mochila roja  roja
    })
    paginaActual = 1; // para que regrese a la pagina 1
    totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
    mostrarProductos(paginaActual);
    actualizarBotones();
}

function mostrarDetallesProducto(idProducto){
    let producto = productosGlobal.find(producto => producto.id === idProducto);
    if(producto){
        document.getElementById('modalTitulo').textContent = producto.title;
        document.getElementById('modalImagen').src = producto.image;
        document.getElementById('modalDescripcion').textContent = producto.description;
        document.getElementById('modalPrecio').textContent = producto.price;
        document.getElementById('modalAgregarCarrito').onclick = () => agregarAlCarrito(idProducto);
        document.getElementById('productoModal').style.display = 'block';
    }
}

// algunas funciones para cerrar el modal
document.querySelector('.close').onclick = function() {
    document.getElementById('productoModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('productoModal')) {
        document.getElementById('productoModal').style.display = 'none';
    }
}
