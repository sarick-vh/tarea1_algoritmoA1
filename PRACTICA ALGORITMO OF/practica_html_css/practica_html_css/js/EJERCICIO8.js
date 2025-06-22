function ejecutar() {
    const numerosCadena = "10;30;40;50";
    const arregloNumeros = numerosCadena.split(";").map(Number);
    document.getElementById('resultado').innerText = `Números: ${arregloNumeros.join(', ')}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
