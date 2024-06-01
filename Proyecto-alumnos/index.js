/*
1.- Crear una clase alumno, la cual debe incluir:
Nombre
Apellidos
Edad
Materias inscritas
Calificaciones
*/
class Alumno{

    constructor(nombre,apellidos,edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materias = []; //se inicializa como un arreglo vacio
        this.calificaciones = {}; // Programacion: 10, Matematicas: 9
    }

    inscribirMateria(materia){
        // .includes() busca un elemento dentro de un arreglo y regresa true si lo encuentra
        if(!this.materias.includes(materia)){
            this.materias.push(materia);
        }
    }
    
    asignarCalificacion(materia,calificacion){
        this.calificaciones[materia] = calificacion;
    }

    obtenerPromedio(){
        // lo primero que hay que hacer  es convertir el objeto a un arreglo
        let calificaciones = Object.values(this.calificaciones);
        let total = calificaciones.reduce((acumulador , valor) => acumulador + valor, 0);
        //console.log(calificaciones);
        //console.log(total);
        if(calificaciones.length > 0){
            return total/calificaciones.length;
        }else{
            return 0;
        }   
        // ? operador ternario
        //return calificaciones.length > 0 ? total/calificaciones.length : 0;  
    }
}
/*
let alumno1 = new Alumno("Juan","Perez",20);
alumno1.inscribirMateria("Programacion");
alumno1.inscribirMateria("Matematicas");
alumno1.asignarCalificacion("Programacion",10);
alumno1.asignarCalificacion("Matematicas",9);
console.log(alumno1.obtenerPromedio());*/
let cursos = ["Algoritmo y estructura de datos","LP2", "Arquitectura de computadoras", "Programacion"]


document.getElementById("linkAlta").addEventListener("click", mostrarFormularioAlta);
document.getElementById("linkEscribir").addEventListener("click", mostrarFormularioInscripcion);
document.getElementById("linkCalificaciones").addEventListener("click", mostrarFormularioCalificaciones);
document.getElementById("linkGrupos").addEventListener("click", mostrarFormularioGrupos);
document.getElementById("linkBuscar").addEventListener("click", mostrarFormularioBuscar);

function mostrarFormularioAlta(){
    let content =  document.getElementById("content");
    content.innerHTML = "";
}




