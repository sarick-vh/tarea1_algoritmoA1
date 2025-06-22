function mostrarPares() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero) || numero < 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido.';
        return;
    }

    for (let i = 0; i <= numero; i += 2) {
        resultadoDiv.innerHTML += i + '<br>';
    }
}

function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
