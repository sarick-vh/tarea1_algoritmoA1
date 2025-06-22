function presentarTabla() {
    const x = parseInt(document.getElementById('x').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(x)) {
        resultadoDiv.innerHTML = 'Por favor, ingresa un número válido.';
        return;
    }

    let tabla = '<strong>Tabla de Sumar:</strong><br>';
    for (let i = 1; i <= 12; i++) {
        tabla += `★ ${i} + ${x} = ${i + x}<br>`;
    }

    resultadoDiv.innerHTML = tabla;
}

function limpiar() {
    document.getElementById('x').value = ''; // Restablecer X
    document.getElementById('resultado').innerHTML = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia 'menu.html' por la ruta correcta a tu menú
}
