function mostrarNumerosPares() {
    const n = parseInt(document.getElementById('n').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(n) || n < 1) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido mayor que 0.';
        return;
    }

    let numerosPares = '';
    let par = 2; // Comenzamos desde el primer número par

    // Generar números pares hasta N
    while (par <= n) {
        numerosPares += par + ' ';
        par += 2; // Incrementar por 2 para obtener el siguiente par
    }

    // Añadir múltiplos de 3
    let multiploDe3 = 3; // Comenzamos desde el primer múltiplo de 3
    while (multiploDe3 <= n) {
        if (multiploDe3 % 2 === 0) { // Verificar si es par
            numerosPares += multiploDe3 + ' ';
        }
        multiploDe3 += 3; // Incrementar por 3 para obtener el siguiente múltiplo de 3
    }

    resultadoDiv.innerHTML = `Números pares hasta ${n}: ${numerosPares}`;
}

function limpiar() {
    document.getElementById('n').value = 10; // Restablecer a 10
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
