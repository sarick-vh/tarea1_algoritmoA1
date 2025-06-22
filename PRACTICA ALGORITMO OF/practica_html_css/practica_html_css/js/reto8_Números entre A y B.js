function presentarNumeros() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(a) || isNaN(b)) {
        resultadoDiv.innerHTML = 'Por favor, ingresa números válidos.';
        return;
    }

    if (a > b) {
        resultadoDiv.innerHTML = 'A debe ser menor o igual a B.';
        return;
    }

    let numeros = '';
    for (let i = a; i <= b; i++) {
        numeros += i + ' ';
    }

    resultadoDiv.innerHTML = `Números entre ${a} y ${b}: ${numeros}`;
}

function limpiar() {
    document.getElementById('a').value = ''; // Restablecer A
    document.getElementById('b').value = ''; // Restablecer B
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
