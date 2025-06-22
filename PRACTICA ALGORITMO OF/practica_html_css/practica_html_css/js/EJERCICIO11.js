function ejecutar() {
    const palabra = "sol";
    let letras = '';
    for (let i = 0; i < palabra.length; i++) {
        letras += palabra[i] + ' ';
    }
    document.getElementById('resultado').innerText = `Letras: ${letras}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
