function verificarNumeroPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero) || numero <= 1) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que 1.';
        return;
    }

    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        resultadoDiv.innerHTML = `${numero} es un número primo.`;
    } else {
        resultadoDiv.innerHTML = `${numero} no es un número primo.`;
    }
}

function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
