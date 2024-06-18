/*
OPCIONES
PROMESAS - CALLBACKS - ASYNC/AWAIT


async y await son dos palabras clave introducidas en ES2017 (ES8) que proporcionan una forma más sencilla y legible 
de manejar operaciones asíncronas en JavaScript. Estas se utilizan para trabajar con promesas, permitiendo escribir
 código asíncrono que se parece al código síncrono, mejorando así la legibilidad y la mantenibilidad del código.
*/

/*
Funciones Asíncronas (async)
Declaración de Función async:
Una función declarada con async siempre devuelve una promesa.
Si la función devuelve un valor, este se convierte automáticamente en una promesa resuelta.
Si la función lanza una excepción, la promesa devuelta se rechaza con el valor lanzado.

async function miFuncion(){
    return "Hola Mundo";
}
miFuncion().then(valor => console.log(valor));
*/

/*
La Palabra Clave await
Esperar Promesas:
await solo se puede usar dentro de funciones async.
Pausa la ejecución de la función async hasta que la promesa se resuelve (o rechaza).
El valor de la expresión await es el valor resuelto de la promesa.
*/

/*
function traerUsuarios(){
    return new Promise( (resolve,reject) =>{
        setTimeout( () =>{
            resolve([
                {"usuario":"Juan","edad":25},
                {"usuario":"Pedro","edad":30},
            ])
        },1000)
    } )
}

async function mostrarDatos(){
    let usuarios = await traerUsuarios(); // traerUsuarios().then() 
    console.log(usuarios);
}

mostrarDatos();*/

/*
CRUD:
Create, Read, Update, Delete
*/

// Tenemos un objeto fetch que nos permite hacer peticiones http desde js
// fetch(url) devuelve una promesa

/*
async function traerDatosTiendaFake(){
    let respuesta = await fetch('https://fakestoreapi.com/products');
    let datos = await respuesta.json();
    return datos;
} 
traerDatosTiendaFake().then(datos => console.log(datos));
*/

//EJEMPLO DE TIPO GET
fetch('https://fakestoreapi.com/products',{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(respuesta => {
    if(!respuesta.ok){ // .ok simula un codigo de estado 200
        throw new Error('No se pudo realizar la petición' + respuesta.statusText);
    }
    return respuesta.json();
}).then(datos => console.log(datos))

//EJEMPLO DE TIPO POST
fetch('https://fakestoreapi.com/products',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ // convierte un objeto a json
        title: 'Producto 1',
        price: 100,
        description: 'Producto de prueba',
        category: 'Electronics',
        image: 'https://via.placeholder.com/600/92c952'
    })
}).then(respuesta => {
    if(!respuesta.ok){ // .ok simula un codigo de estado 200 //  201 CREATED
        throw new Error('No se pudo realizar la petición' + respuesta.statusText);
    }
    return respuesta.json();
}).then(datos => console.log(datos))