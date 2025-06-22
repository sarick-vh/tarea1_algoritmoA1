function mostrarDivisores() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que cero.';
        return;
    }

    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    resultadoDiv.innerHTML = `Los divisores de ${numero} son: ${divisores.join(', ')}`;
}

function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
