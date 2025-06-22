function verificarNumeroPerfecto() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que cero.';
        return;
    }

    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        resultadoDiv.innerHTML = `${numero} es un número perfecto.`;
    } else {
        resultadoDiv.innerHTML = `${numero} no es un número perfecto.`;
    }
}

function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
