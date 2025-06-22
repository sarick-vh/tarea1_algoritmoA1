function ejecutar() {
    const palabra = "Programación";
    document.getElementById('resultado').innerText = `Cantidad de caracteres: ${palabra.length}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
