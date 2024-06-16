// asincrona 

/*
Las promesas en JavaScript son un mecanismo para manejar operaciones asíncronas, 
como solicitudes a servidores, de una manera más legible y manejable que usando callbacks(funciones de retroceso). 
Una promesa representa un valor que puede estar disponible ahora
, en el futuro, o nunca. Aquí tienes una teoría sencilla y concisa:

Un objeto de promesa tiene un estado que puede ser uno de los siguientes:

Pendiente
Cumplido con un valor
Rechazado por una razón
*/
/*
function traerUsuarios(){
    return [
        {"usuario":"Juan","edad":25},
        {"usuario":"Pedro","edad":30},
    ]
}*/

/*
function traerUsuarios(){
    let usuarios = [];
    setTimeout( () =>{
        usuarios = [
            {"usuario":"Juan","edad":25},
            {"usuario":"Pedro","edad":30},
        ]
    } , 1000);
    return usuarios;
}*/

/* 
// UNA FUNCIÓN QUE TRATE DE RECORRER LOS USUARIOS
function buscarUsuario(usuario){
    let usuarios = traerUsuarios(); //usuarios.length
    let usuario = usuarios.find( u => u.usuario === usuario);
    
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].usuario === usuario){
            usuario = usuarios[i];
        }
    }


    return usuario;
    }
*/
/*

function traerUsuarios(callback){
    setTimeout( () =>{
        callback ([
            {"usuario":"Juan","edad":25},
            {"usuario":"Pedro","edad":30},
        ])
    } , 1000); 
}

function buscarUsuario(usuarioName, callback){
    traerUsuarios( u => {
        let usuario = u.find( u => u.usuario === usuarioName);
        callback(usuario);
    } )
}

//console.log(buscarUsuario("Juan"));
buscarUsuario("Juan", console.log)
*/

/* 

ESTRUCTURA DE UNA PROMESA:
// resolve sirve para devolver el valor de la promesa, es decir, la operación se realizó con éxito.
// reject sirve para devolver un error, es decir, la operación no se realizó con éxito.

const promesa = new Promise((resolve, reject) => {
  // contiene la operación
  // ...

    if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

Para obtener el valor de una promesa cuando se cumple, se llama al then() método de la promesa.
la promesa tiene un metodo .then() que recibe dos funciones como argumentos 
la primera se ejecuta si la promesa se resuelve correctamente
la segunda se ejecuta si la promesa se rechaza
*/

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

function buscarUsuario(usuarioNombre){
    traerUsuarios().then( u =>{
        let usuario = u.find( u => u.usuario === usuarioNombre);
        console.log(usuario);
        return;
    })
}

buscarUsuario("Juan");


function usuario(){
    let usuario = { "nombre":"Juan", "edad":25, "email":"juan@gmail.com", "telefono":"1234567890" } 
}



