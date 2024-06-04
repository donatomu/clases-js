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
    this.promedio=0;
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
console.log(alumno1.obtenerPromedio());
*/
let cursos = ["Algoritmo y estructura de datos","LP2", "Arquitectura de computadoras", "Programacion"]

let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

//FUNCION PARA GUARDAR EN EL LOCAL STORAGE
function guardarAlumnos(){
    localStorage.setItem('alumnos',JSON.stringify(alumnos)); // stringify convierte un objeto a un string
}

document.querySelectorAll(".dropdown-btn").forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle("active");
    const dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none"; // si esta visible lo oculta
    } else {
      dropdownContent.style.display = "block"; // si esta oculto lo muestra
    }
  }); 
})


document.getElementById("linkAlta").addEventListener("click", mostrarFormularioAlta);
document.getElementById("linkInscribir").addEventListener("click", mostrarFormularioInscripcion);
document.getElementById("linkCalificaciones").addEventListener("click", mostrarFormularioCalificaciones);
document.getElementById("linkGrupos").addEventListener("click", mostrarFormularioGrupos);
document.getElementById("linkBuscar").addEventListener("click", mostrarFormularioBuscar);

function mostrarFormularioAlta(){
    const content = document.getElementById('content');
    content.innerHTML = `
    <h2>Alta de Alumnos</h2>
    <form id="formAlta">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" required><br>
      <label for="apellidos">Apellidos:</label>
      <input type="text" id="apellidos" required><br>
      <label for="edad">Edad:</label>
      <input type="number" id="edad" required><br>
      <button type="submit">Dar de Alta</button>
    </form>
    `;
    document.getElementById('formAlta').addEventListener("submit",function(e){
        e.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellidos').value;
        let edad = parseInt(document.getElementById('edad').value);

        if(edad < 0 || edad > 80){
            alert("Edad no valida");
            document.getElementById('edad').value = "";
            document.getElementById('edad').focus();
            return;
        }

        let nuevoAlumno = new Alumno(nombre,apellidos,edad);
        alumnos.push(nuevoAlumno);
        guardarAlumnos();

        document.getElementById('nombre').value= "";
        document.getElementById('apellidos').value= "";
        document.getElementById('edad').value= "";
        alert("Alumno dado de alta");
    });
}


function mostrarFormularioInscripcion(){
    const content = document.getElementById('content');
    let alumnoOpciones = alumnos.map( (alumno,index) => `<option value="${index}">${alumno.nombre} ${alumno.apellidos}</option>`).join(''); //template string
    //console.log(alumnoOpciones);
    let materiasOpciones = cursos.map( curso => `<option value="${curso}">${curso}</option>`).join('');
    //console.log(materiasOpciones);
    content.innerHTML = `
        <h2>Inscribir a clase</h2>
        <form id="formInscripcion">
            <label for="nombre">Nombre del alumno: </label>
            <select id="nombre" required>
                <option value="" disabled selected>Seleccione un alumno</option>
                ${alumnoOpciones}
            </select><br>
            <label for="materia">Nombre de la materia: </label>
            <select id="materia" required>
                <option value="" disabled selected>Seleccione una materia</option>
                ${materiasOpciones}
            </select><br>
            <button type="submit">Inscribir</button>
        </form>
    `;

    document.getElementById('formInscripcion').addEventListener("submit",function(event){
        event.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let materia = document.getElementById('materia').value;
        let alumno = alumnos[nombre];
        if(alumno!=null){
            alumno.inscribirMateria(materia);
            guardarAlumnos();
            alert('Alumno inscrito en la materia con exito');
        }else{
            alert('Alumno no encontrado');
        }
    });
}

function mostrarFormularioCalificaciones() {
  const content = document.getElementById('content');
  const alumnosOptions = alumnos.map((al, index) => `<option value="${index}">${al.nombre} ${al.apellidos}</option>`).join('');

  content.innerHTML = `
    <h2>Asignar Calificaciones</h2>
    <form id="formCalificaciones">
      <label for="nombre">Nombre del Alumno:</label>
      <select id="nombre" required>
        <option value="">Seleccione un alumno</option>
        ${alumnosOptions}
      </select><br>
      <label for="materia">Materia:</label>
      <select id="materia" required>
        <option value="">Seleccione una materia</option>
      </select><br>
      <label for="calificacion">Calificación:</label>
      <input type="number" id="calificacion" required><br>
      <button type="submit">Asignar</button>
    </form>
  `;

    document.getElementById('nombre').addEventListener('change', function() {
        const alumnoIndex = document.getElementById('nombre').value;
        const alumno = alumnos[alumnoIndex];
        const materiasSelect = document.getElementById('materia');
        if (alumno) {
        materiasSelect.innerHTML = alumno.materias.map(mat => `<option value="${mat}">${mat}</option>`).join('');
        } else {
        materiasSelect.innerHTML = '<option value="">Seleccione una materia</option>';
        }
    });

    document.getElementById('formCalificaciones').addEventListener('submit', function(e) {
        e.preventDefault();
        const alumnoIndex = document.getElementById('nombre').value;
        const materia = document.getElementById('materia').value;
        const calificacion = parseFloat(document.getElementById('calificacion').value);
        if (calificacion < 0 || calificacion > 10) {
        alert('La calificación debe ser un número entre 0 y 10');
        return;
        }
        const alumno = alumnos[alumnoIndex];
        
        if (alumno) {
        alumno.asignarCalificacion(materia, calificacion);
        guardarAlumnos();
        alert('Calificación asignada con éxito');
        } else {
        alert('Alumno no encontrado');
        }
    });
}

function mostrarFormularioGrupos() {
    const content = document.getElementById('content');
    //LISTA DE MATERIAS DISPONIBLES
    const materiasOptions = cursos.map(materia => `<option value="${materia}">${materia}</option>`).join('');
  
    content.innerHTML = `
      <h2>Crear Grupos</h2>
      <form id="formGrupos">
        <label for="materiaGrupo">Seleccionar Materia:</label>
        <select id="materiaGrupo" required>
          <option value="" disabled selected>Selecciona una materia</option>
          ${materiasOptions}
        </select><br>
        <label for="nombreGrupo">Nombre del Grupo:</label>
        <input type="text" id="nombreGrupo" required><br>
        <label for="alumnosGrupo">Agregar Alumnos al Grupo:</label>
        <select id="alumnosGrupo" multiple></select><br>
        <button type="submit">Crear Grupo</button>
      </form>
      <div id="gruposCreados">
      </div>
    `;
  
    document.getElementById('materiaGrupo').addEventListener('change', function() {
      actualizarAlumnosYGrupos(this.value);
    });
  
    document.getElementById('formGrupos').addEventListener('submit', function(e) {
      e.preventDefault();
      const nombreGrupo = document.getElementById('nombreGrupo').value;
      const materiaGrupo = document.getElementById('materiaGrupo').value;
      const alumnosSeleccionados = Array.from(document.getElementById('alumnosGrupo').selectedOptions).map(option => parseInt(option.value));
  
      const grupos = JSON.parse(localStorage.getItem('grupos')) || [];
  
      if (!grupos.find(grupo => grupo.nombre === nombreGrupo && grupo.materia === materiaGrupo)) {
        const nuevoGrupo = {
          nombre: nombreGrupo,
          materia: materiaGrupo,
          alumnos: alumnosSeleccionados
        };
        grupos.push(nuevoGrupo);
        localStorage.setItem('grupos', JSON.stringify(grupos));
        alert('Grupo creado con éxito');
      } else {
        alert('El grupo ya existe para esta materia');
      }
      actualizarAlumnosYGrupos(materiaGrupo);
    });
  
    function actualizarAlumnosYGrupos(materia) {
      let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
      let grupos = JSON.parse(localStorage.getItem('grupos')) || [];
  
      // Obtener los alumnos que ya están en algún grupo de la materia seleccionada y retorna un Set con los índices de los alumnos
      const alumnosEnGrupos = new Set(grupos.filter(grupo => grupo.materia === materia).map(grupo => grupo.alumnos));
      console.log(alumnosEnGrupos)
  
      // Filtrar los alumnos que están inscritos en la materia seleccionada y no están en ningún grupo de esa materia
      const alumnosDisponibles = alumnos
        .map((al, index) => ({ ...al, index }))
        .filter(al => al.materias.includes(materia) && !alumnosEnGrupos.has(al.index));
  
      console.log(alumnosDisponibles)
  
      const alumnosOptions = alumnosDisponibles.map(al =>
        `<option value="${al.index}">${al.nombre} ${al.apellidos}</option>`
      ).join('');
  
      document.getElementById('alumnosGrupo').innerHTML = alumnosOptions;
  
      // Mostrar los grupos ya creados para la materia seleccionada
      const gruposCreadosDiv = document.getElementById('gruposCreados');
      gruposCreadosDiv.innerHTML = `<h3>Grupos Creados para ${materia}:</h3>`;
  
      const gruposMateria = grupos.filter(grupo => grupo.materia === materia);
  
      if (gruposMateria.length > 0) {
        gruposMateria.forEach(grupo => {
          const grupoDiv = document.createElement('div');
          const alumnosGrupo = grupo.alumnos.map(index => `${alumnos[index]?.nombre || 'Desconocido'} ${alumnos[index]?.apellidos || ''}`).join(', ');
          grupoDiv.innerHTML = `<strong>${grupo.nombre}</strong>: ${alumnosGrupo}`;
          gruposCreadosDiv.appendChild(grupoDiv);
        });
      } else {
        gruposCreadosDiv.innerHTML = '<h3>No se han creado grupos para esta materia.</h3>';
      }
    }
  }
  
function mostrarFormularioBuscar(){
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>Buscar alumno</h2>
    <form id="formBuscar">
        <label for="criterio">Criterio de busqueda:</label>
        <select id= "criterio">
          <option value="" disabled selected>Seleccione un criterio</option>
          <option value="nombre">Nombre</option>
          <option value="apellidos">Apellidos</option>
        </select><br>
        <label for="valor">Valor:</label>
        <input type="text" id="valor" required><br>
        <button type="submit">Buscar</button>
    </form>
    <div id="resultados"></div>
  `;

  document.getElementById('formBuscar').addEventListener('submit', function(e){
    e.preventDefault();
    let criterio = document.getElementById('criterio').value;
    let valor = document.getElementById('valor').value;
    let resultados = []; //el arreglo de los alumnos

    if(criterio === '' || valor === ''){
      alert('Seleccione un criterio de busqueda');
      return;
    }

    //BUSQUEDA SECUENCIAL
    for(let i =0;i<alumnos.length;i++){
      if(criterio === 'nombre' && alumnos[i].nombre.includes(valor)){ 
        resultados.push(alumnos[i]);
      }else if(criterio === 'apellidos' && alumnos[i].apellidos.includes(valor)){
        resultados.push(alumnos[i]);
      }
    }

    document.getElementById('valor').value = '';
    document.getElementById('criterio').value = '';
    mostrarResultados(resultados)
  })
}

function mostrarResultados(resultados){
  let resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = '<h3>Resultados de la busqueda</h3>';

  if(resultados.length>0){
    resultados.forEach(alumno =>{
      let alumnoDiv = document.createElement('div');
      let promedio;
      if(alumno.obtenerPromedio == null){
        promedio = 0;
      }else{
        promedio = alumno.obtenerPromedio().toFixed(2);
      }
      alumnoDiv.innerHTML = `
        <strong>${alumno.nombre} ${alumno.apellidos}</strong> - Edad: ${alumno.edad} - Promedio: ${promedio}
        <ul>
          ${Object.entries(alumno.calificaciones).map(([materia, calificacion]) => `<li>${materia}: ${calificacion}</li>`).join('')}
        </ul>
      `
      resultadosDiv.appendChild(alumnoDiv);
    });
  }else{
    resultadosDiv.innerHTML = '<h3>No se encontraron resultados</h3>';
  }
}

function mostrarFormularioPromedioAlumno(){
  let content = document.getElementById('content');
  if(alumnos.length === 0 ){
    alert('No hay alumnos registrados');
    mostrarFormularioAlta();
    return;
  }
  const alumnosOptions = alumnos.map((al, index) => `<option value="${index}">${al.nombre} ${al.apellidos}</option>`).join('');
  content.innerHTML = `
    <h2>Obtener Promedio de un Alumno</h2>
    <form id="formPromedioAlumno">
      <label for="selectAlumno">Seleccionar Alumno:</label>
      <select id="selectAlumno">
        <option value="" disabled selected>Seleccione un alumno</option>  
        ${alumnosOptions}
      </select><br>
      <button type="submit">Obtener Promedio</button>
    </form>
    <div id="resultadoPromedioAlumno"></div>
  `;

  document.getElementById('formPromedioAlumno').addEventListener('submit', function(e) {
    e.preventDefault();
    let indexAlumno = document.getElementById('selectAlumno').value;
    let alumno = JSON.parse(localStorage.getItem('alumnos'))[indexAlumno]; // numeros[0] numeros[1]
    let promedio ;
    if(alumno.obtenerPromedio == null){
      alert('El alumno no tiene calificaciones asignadas')
      return;
    }else{
      promedio = alumno.obtenerPromedio().toFixed(2);
    }
    document.getElementById('resultadoPromedioAlumno').innerHTML = `Promedio de ${alumno.nombre} ${alumno.apellidos} : ${promedio}`
  })
}

// Función para mostrar el formulario de obtener el promedio del grupo
function mostrarFormularioPromedioGrupo() {
  const content = document.getElementById('content');
  const grupos = JSON.parse(localStorage.getItem('grupos')) || [];

  //valida si no hay grupos creados
  if(grupos.length == 0){
    alert('No hay grupos creados, por favor crea un grupo primero.');
    //redirigue a la creacion de grupos 
    mostrarFormularioGrupos();
    return;
  }
  opcionesGrupos = grupos.map(grupo => `<option value="${grupo.nombre}">${grupo.nombre}</option>`).join('');

  content.innerHTML = `
    <h2>Obtener Promedio del Grupo</h2>
    <form id="formPromedioGrupo">
      <label for="selectGrupo">Seleccionar Grupo:</label>
      <select id="selectGrupo">${opcionesGrupos}</select><br>
      <button type="submit">Obtener Promedio</button>
    </form>
    <div id="resultadoPromedioGrupo"></div>
  `;

  document.getElementById('formPromedioGrupo').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombreGrupo = document.getElementById('selectGrupo').value;
    const grupos = JSON.parse(localStorage.getItem('grupos')) || [];
    const grupo = grupos.find(grupo => grupo.nombre === nombreGrupo);
    
    let alumnos = [];
    grupo.alumnos.forEach(index => {
      alumnos.push(JSON.parse(localStorage.getItem('alumnos'))[index]);
    })

    // Añadir método obtenerPromedio a cada alumno con calificaciones, lo pongo porque me salia fallas sin esto 
    alumnos.forEach(alumno => {
      alumno.obtenerPromedio = function() {
        const total = Object.values(this.calificaciones).reduce((acc, cal) => acc + cal, 0);
        return total / Object.values(this.calificaciones).length;
      };
    })

    const promedio = grupo.alumnos.reduce((acc, index) => acc + alumnos[index].obtenerPromedio(), 0) / grupo.alumnos.length;
    document.getElementById('resultadoPromedioGrupo').textContent = `Promedio del Grupo ${grupo.nombre}: ${promedio}`;
  });
}





