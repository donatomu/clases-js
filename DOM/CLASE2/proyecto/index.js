var total = 0;

function agregarItem(){
    let nombre = document.getElementById('itemInput').value;
    let precio = parseFloat(document.getElementById('precioInput').value);
    
    if(!nombre && !precio){
        alert('Por favor llene todos los campos');
        return;
    }
    if(!nombre){
        alert('Por favor llene el campo nombre');
        document.getElementById('itemInput').select();
        return;
    }
    if(isNaN(precio) || precio<=0){
        alert('Porfavor ingresa un número valido');
        document.getElementById('precioInput').select();
    }

    let item = document.createElement('div');
    item.innerHTML = "<span>" + nombre + "</span>: S/." + "<span>" + precio.toFixed(2) + "</span>";
    document.querySelector('.items').prepend(item);

    document.getElementById("itemInput").value = "";
    document.getElementById("precioInput").value = "";
    total += precio;
    actualizarTotal();
}

function actualizarTotal(){
    document.querySelector('.total').innerHTML = "Total: S/." + total.toFixed(2);
}

function confirmarCompra(){
    if(confirm("¿Confirmar compra?")){
        alert("Compra confirmada")
        resetearCompra();
    }
}

function resetearCompra(){
    total = 0;
    document.querySelector(".total").innerText = "Total: S/.0";
    document.querySelector(".items").innerHTML = "";
    document.getElementById("itemInput").value = "";
    document.getElementById("precioInput").value = "";
}