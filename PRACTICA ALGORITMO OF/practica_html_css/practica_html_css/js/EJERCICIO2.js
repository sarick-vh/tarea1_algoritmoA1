function ejecutar() {
    const numeros = [1, 2];
    numeros.push(3);
    document.getElementById('resultado').innerText = `Números: ${numeros.join(', ')}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
