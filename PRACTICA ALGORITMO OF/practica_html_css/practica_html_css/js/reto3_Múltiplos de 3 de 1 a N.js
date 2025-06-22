function mostrarMultiplos() {
    const n = parseInt(document.getElementById('n').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(n) || n < 1) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que 0.';
        return;
    }

    let multiplosDe3 = '';
    let multiplosDe5 = '';
    let multiplosDe2y3 = '';

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            multiplosDe3 += i + ' ';
        }
        if (i % 5 === 0) {
            multiplosDe5 += i + ' ';
        }
        if (i % 6 === 0) {
            multiplosDe2y3 += i + ' ';
        }
    }

    resultadoDiv.innerHTML = `
        <strong>Múltiplos de 3:</strong> ${multiplosDe3}<br>
        <strong>Múltiplos de 5:</strong> ${multiplosDe5}<br>
        <strong>Múltiplos de 2 y 3:</strong> ${multiplosDe2y3}
    `;
}

function limpiar() {
    document.getElementById('n').value = 30; // Restablecer a 30
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
