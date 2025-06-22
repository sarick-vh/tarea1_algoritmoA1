function ejecutar() {
    const datos = [];
    datos[0] = 10;
    datos[1] = 20;
    document.getElementById('resultado').innerText = `Datos: ${datos.join(', ')}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
