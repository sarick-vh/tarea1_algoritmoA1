function dividirPorRestasSucesivas() {
    const dividendo = parseInt(document.getElementById('dividendo').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(dividendo) || isNaN(divisor) || divisor <= 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa números válidos. El divisor debe ser mayor que cero.';
        return;
    }

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    resultadoDiv.innerHTML = `${dividendo} ÷ ${divisor} = ${cociente} con un resto de ${resto}`;
}

function limpiar() {
    document.getElementById('dividendo').value = '';
    document.getElementById('divisor').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
