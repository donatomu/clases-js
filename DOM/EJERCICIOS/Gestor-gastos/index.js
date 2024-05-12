let listaGastos = document.getElementById('lista-gastos');
let inputConcepto = document.getElementById('concepto');
let inputMonto = document.getElementById('monto');
let selectCategoria = document.getElementById('categoria');
let botonAgregar = document.getElementById('agregar');
let totalGastos = document.getElementById('total-gastos');

botonAgregar.addEventListener('click', ()=>{
    let concepto = inputConcepto.value;
    let monto = parseFloat(inputMonto.value);
    let categoria = selectCategoria.value;

    if(concepto && !isNaN(monto)){
        let nuevoGasto = document.createElement('li');
        nuevoGasto.textContent = concepto + ": S/." +monto+ " - " +categoria;
        listaGastos.append(nuevoGasto);

        inputConcepto.value = '';
        inputMonto.value = '';
        selectCategoria.selectedIndex = 0;

        calcularGastosTotales();
    }else{
        alert('Ingrese los datos correctamente');
    }
});

function calcularTotalGastos() {
    let total = 0;
    const gastos = listaGastos.querySelectorAll('li');
    gastos.forEach(gasto => {
        const monto = parseFloat(gasto.textContent.match(/\d+\.\d+/)[0]);
        total += monto;
    });
    totalGastos.textContent = `Total de Gastos: $${total.toFixed(2)}`;
}