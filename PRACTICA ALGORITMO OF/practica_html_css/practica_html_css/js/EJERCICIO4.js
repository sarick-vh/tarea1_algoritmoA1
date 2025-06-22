function ejecutar() {
    const saludo = "Hola clase";
    document.getElementById('resultado').innerText = `Saludo: ${saludo}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
