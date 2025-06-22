function presentarMensaje() {
    const n = parseInt(document.getElementById('n').value);
    const mensaje = document.getElementById('mensaje').value;
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(n) || n < 1) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que 0.';
        return;
    }

    for (let i = n; i >= 1; i--) {
        if (i % 2 === 0) { // Solo mostrar números pares
            resultadoDiv.innerHTML += `★ ${mensaje} (${i})<br>`;
        }
    }
}

function limpiar() {
    document.getElementById('n').value = 3; // Restablecer a 3
    document.getElementById('mensaje').value = 'Estudiando programación'; // Restablecer mensaje
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
