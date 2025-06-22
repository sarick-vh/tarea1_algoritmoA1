function ejecutar() {
    const palabra = "sol";
    let j = 0;
    let letras = '';
    while (j < palabra.length) {
        letras += palabra[j] + ' ';
        j++;
    }
    document.getElementById('resultado').innerText = `Letras: ${letras}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
