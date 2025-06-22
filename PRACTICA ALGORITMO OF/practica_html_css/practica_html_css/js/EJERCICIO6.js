function ejecutar() {
    const nombre = "Luis";
    let letras = Array.from(nombre).join(', ');
    document.getElementById('resultado').innerText = `Letras: ${letras}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
