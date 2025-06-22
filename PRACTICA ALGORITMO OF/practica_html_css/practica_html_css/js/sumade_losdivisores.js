function calcularSumaDivisores() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que cero.';
        return;
    }

    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }

    resultadoDiv.innerHTML = `La suma de los divisores de ${numero} es: ${suma}`;
}

function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
