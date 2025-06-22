function ejecutar() {
    const frutas = ["manzana", "banana", "uva"];
    document.getElementById('resultado').innerText = `Frutas: ${frutas.join(', ')}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
