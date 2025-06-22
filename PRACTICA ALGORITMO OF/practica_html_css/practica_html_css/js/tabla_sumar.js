function mostrarTabla() {
    const numero = parseInt(document.getElementById('numero').value);
    const hasta = parseInt(document.getElementById('hasta').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero) || isNaN(hasta) || numero <= 0 || hasta <= 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa números válidos.';
        return;
    }

    for (let i = 1; i <= hasta; i++) {
        resultadoDiv.innerHTML += `${numero} + ${i} = ${numero + i}<br>`;
    }
}

function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('hasta').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
