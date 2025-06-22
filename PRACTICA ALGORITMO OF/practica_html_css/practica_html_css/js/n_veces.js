function repetirNombre(nombre, veces) {
    let resultado = '';
    for (let i = 0; i < veces; i++) {
        resultado += nombre + '<br>';
    }
    return resultado;
}

document.getElementById('presentarBtn').addEventListener('click', function() {
    const nombre = document.getElementById('nombreInput').value;
    const veces = parseInt(document.getElementById('vecesInput').value);
    const resultadoDiv = document.getElementById('resultado');

    if (nombre && veces > 0) {
        resultadoDiv.innerHTML = repetirNombre(nombre, veces);
    } else {
        alert('Por favor, ingresa un nombre y un número válido.');
    }
});

document.getElementById('limpiarBtn').addEventListener('click', function() {
    document.getElementById('nombreInput').value = '';
    document.getElementById('vecesInput').value = '';
    document.getElementById('resultado').innerHTML = '';
});

document.getElementById('regresarBtn').addEventListener('click', function() {
    alert('Regresando a la página anterior...');
    // Aquí puedes agregar lógica para regresar a otra página si es necesario
});
