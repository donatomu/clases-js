// Recuperar los datos del usuario de la sesión
let usuario = JSON.parse(sessionStorage.getItem('active_user'));

// Mostrar el nombre del usuario en la página
document.getElementById('usuario').innerText = usuario.nombre;

// Función para consultar el saldo
function consultarSaldo() {
    const saldo = usuario.saldo;
    document.getElementById('saldo').innerText = saldo;
    document.getElementById('reporte').style.display = 'block';
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('monto-ingresado').style.display = 'none';
    document.getElementById('monto-retirado').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}

// Función para mostrar el formulario de ingreso o retiro de monto
function mostrarFormulario(tipoOperacion) {
    document.getElementById('operacion-label').innerText = (tipoOperacion === 'ingreso') ? 'ingresar' : 'retirar';
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('reporte').style.display = 'none';
    document.getElementById('monto-ingresado').style.display = 'none';
    document.getElementById('monto-retirado').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}

// Función para realizar la operación de ingreso o retiro de monto
function realizarOperacion(event) {
    event.preventDefault();
    const monto = parseFloat(document.getElementById('monto').value);
    const tipoOperacion = document.getElementById('operacion-label').innerText;
    if (tipoOperacion === 'ingresar') {
        ingresarMonto(monto);
        //document.getElementById('error').style.display = 'none';
    } else if (tipoOperacion === 'retirar') {
        retirarMonto(monto);
        //document.getElementById('error').style.display = 'none';
    }
}

// Función para ingresar monto
function ingresarMonto(monto) {
    const saldoAnterior = usuario.saldo;
    const nuevoSaldo = saldoAnterior + monto;
    if(nuevoSaldo>990){
        document.getElementById('error').innerText = 'Error, no puede tener más de S/.990 soles en su cuenta.';
        document.getElementById('error').style.display = 'block';
        document.getElementById('monto').value = '';
        return;
    }
    usuario.saldo = nuevoSaldo;
    sessionStorage.setItem(usuario.nombre, JSON.stringify(usuario));
    sessionStorage.setItem('active_user', JSON.stringify(usuario));

    // Mostrar el monto ingresado y el nuevo saldo
    document.getElementById('reporte').style.display = 'block';
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('saldo').innerText = nuevoSaldo;
    document.getElementById('monto-ingresado').innerText = `Se ha ingresado S/.${monto} soles`;
    document.getElementById('monto-ingresado').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    document.getElementById('monto').value = '';
}

// Función para retirar monto
function retirarMonto(monto) {
    const saldoAnterior = usuario.saldo;
    if (monto > saldoAnterior) {
        alert('No tiene saldo suficiente para realizar esta operación.');
        return;
    }
    const nuevoSaldo = saldoAnterior - monto;
    if(nuevoSaldo<10){
        document.getElementById('error').innerText = 'Error, no puede tener menos de S/.10 soles em su cuenta.';
        document.getElementById('error').style.display = 'block';
        document.getElementById('monto').value = '';
        return;
    }
    usuario.saldo = nuevoSaldo;
    sessionStorage.setItem(usuario.nombre, JSON.stringify(usuario));
    sessionStorage.setItem('active_user', JSON.stringify(usuario));

    // Mostrar el monto retirado y el nuevo saldo
    document.getElementById('reporte').style.display = 'block';
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('saldo').innerText = nuevoSaldo;
    document.getElementById('monto-retirado').innerText = `Se ha retirado S/.${monto} soles.`;
    document.getElementById('monto-retirado').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    document.getElementById('monto').value = '';
}

function cerrarSesion() {
    window.location.href = 'index.html';
}