function multiplicarPorSumasSucesivas() {
    const multiplicando = parseInt(document.getElementById('multiplicando').value);
    const multiplicador = parseInt(document.getElementById('multiplicador').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(multiplicando) || isNaN(multiplicador) || multiplicador < 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa números válidos.';
        return;
    }

    let resultado = 0;
    for (let i = 0; i < multiplicador; i++) {
        resultado += multiplicando;
    }

    resultadoDiv.innerHTML = `${multiplicando} * ${multiplicador} = ${resultado}`;
}

function limpiar() {
    document.getElementById('multiplicando').value = '';
    document.getElementById('multiplicador').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
