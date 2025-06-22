function mostrarPares() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fin = parseInt(document.getElementById('fin').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(inicio) || isNaN(fin)) {
        resultadoDiv.innerHTML = 'Por favor, ingresa números válidos.';
        return;
    }

    if (inicio > fin) {
        resultadoDiv.innerHTML = 'El número inicial debe ser menor o igual que el número final.';
        return;
    }

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            resultadoDiv.innerHTML += i + '<br>';
        }
    }
}

function limpiar() {
    document.getElementById('inicio').value = '';
    document.getElementById('fin').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
