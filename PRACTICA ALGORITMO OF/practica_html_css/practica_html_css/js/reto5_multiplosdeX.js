function presentarMultiplos() {
    const x = parseInt(document.getElementById('x').value);
    const n = parseInt(document.getElementById('n').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(x) || isNaN(n) || x <= 0 || n <= 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa números válidos mayores que 0.';
        return;
    }

    let multiplos = '';
    for (let i = x; i <= n; i += x) {
        multiplos += i + ' ';
    }

    resultadoDiv.innerHTML = `Múltiplos de ${x} hasta ${n}: ${multiplos}`;
}

function limpiar() {
    document.getElementById('x').value = ''; // Restablecer X
    document.getElementById('n').value = ''; // Restablecer N
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
