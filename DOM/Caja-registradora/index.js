let cuentas = [
  { nombre: "Mali", saldo: 200, password: "123" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

for (let i = 0; i < cuentas.length; i++) {
  let seleccion = document.getElementById("nombre");
  let option = document.createElement("option");
  option.text = cuentas[i].nombre;
  option.value = cuentas[i].nombre;
  seleccion.appendChild(option);
}

function ingresar() {
  let nombre = document.getElementById("nombre").value;
  console.log(nombre);
  let contraseña = document.getElementById("contraseña").value;
  console.log(contraseña);
  for (let i = 0; i < cuentas.length; i++) {
    if (nombre == cuentas[i].nombre && contraseña == cuentas[i].password) {
      console.log("Inicio de sesión correcto");
      mostrarMensaje("¡Inicio de sesión correcto!", "success");
      //para que pueda verse el iniciode sesion correcto
      const user_to_login = JSON.parse(sessionStorage.getItem(nombre));

      if (!user_to_login) { // Si el user no existe entonces
        sessionStorage.setItem(cuentas[i].nombre, JSON.stringify(cuentas[i]));
        sessionStorage.setItem("active_user", JSON.stringify(cuentas[i]));
      } else { // de lo contrario
        sessionStorage.setItem("active_user", JSON.stringify(user_to_login));
      }
      setTimeout(() => {
        window.location.href = "caja.html";
      }, 500);
      return;
    } else {
      mostrarMensaje("¡Nombre de usuario o contraseña incorrectos!", "error");
    }
  }
}

function mostrarMensaje(mensaje, tipo) {
  if (tipo === "error") {
    document.getElementById("mensaje-error").innerText = mensaje;
    document.getElementById("mensaje-error").style.display = "block";
    document.getElementById("mensaje-pase").style.display = "none";
  } else if (tipo === "success") {
    document.getElementById("mensaje-pase").innerText = mensaje;
    document.getElementById("mensaje-pase").style.display = "block";
    document.getElementById("mensaje-error").style.display = "none";
  }
}
