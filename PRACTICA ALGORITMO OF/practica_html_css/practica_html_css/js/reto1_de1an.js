function mostrarNumerosImpares() {
    const n = parseInt(document.getElementById('n').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(n) || n < 1) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que 0.';
        return;
    }

    let numerosImpares = '';
    for (let i = n; i >= 1; i--) {
        if (i % 2 !== 0) { // Solo números impares
            numerosImpares += i + ' ';
        }
    }

    resultadoDiv.innerHTML = `Números impares desde ${n} hasta 1: ${numerosImpares}`;
}

function limpiar() {
    document.getElementById('n').value = 10; // Restablecer a 10
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
