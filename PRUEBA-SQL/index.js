const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'biblioteca'
});

conexion.connect((error) =>{
    if(error){
        console.error('Error al conectarse a la base de datos', error);
        return;
    }
    //console.log('Conectado a la base de datos');
});

let datos;

function obtenerDatos(nombreTabla){
    return new Promise((resolve,reject)=>{
        conexion.query(`SELECT * FROM ${nombreTabla}`, (error, resultado) => {
            if(error){
                reject(error);
                return;
            }
            resolve(resultado);
        });
    } )
}

function insertarDato(nombre){
    return new Promise((resolve,reject)=>{
        let consulta = `INSERT INTO autor(Nombre_autor) VALUES ('${nombre}')`;
        conexion.query(consulta, (error, resultado) => {
            if(error){
                reject("Error al insertar",error);
                return;
            }
            resolve(resultado);
        });
    } )
}

/*
obtenerDatos().then((resultado)=>{
    console.log(resultado);
}).catch((error)=>{
    console.error('Error al obtener los datos', error);
});*/

async function mostrarDatos(){
    datos = await obtenerDatos('autor');
    console.log(datos);
}

function guardarDato(nombre){
    insertarDato(nombre).then((resultado)=>{
        console.log(resultado);
    }).catch((error)=>{
        console.error('Error al insertar los datos', error);
    });
};

module.exports = {
    mostrarDatos,
}


