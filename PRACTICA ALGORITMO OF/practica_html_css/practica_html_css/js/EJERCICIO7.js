function ejecutar() {
    const palabra = "hola";
    const letras = palabra.split("");
    document.getElementById('resultado').innerText = `Letras: ${letras.join(', ')}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
