function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    const primosDiv = document.getElementById('primos');
    resultadoDiv.innerHTML = '';
    primosDiv.innerHTML = '';

    if (isNaN(numero) || numero < 1) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que 0.';
        return;
    }

    let esPrimo = true;
    let verificaciones = 0;

    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            verificaciones++;
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    resultadoDiv.innerHTML = esPrimo ? `${numero} es un número primo.` : `${numero} no es un número primo.`;
    resultadoDiv.innerHTML += `<br>Verificaciones realizadas: ${verificaciones}`;

    // Encontrar todos los primos del 1 al 20
    let primos = [];
    for (let i = 2; i <= 20; i++) {
        if (esPrimoNumero(i)) {
            primos.push(i);
        }
    }
    primosDiv.innerHTML = `Números primos entre 1 y 20: ${primos.join(', ')}`;
}

function esPrimoNumero(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function limpiar() {
    document.getElementById('numero').value = ''; // Restablecer número
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('primos').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
