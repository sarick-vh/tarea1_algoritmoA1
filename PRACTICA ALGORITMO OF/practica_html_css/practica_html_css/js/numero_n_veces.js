// script.js
function presentar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados previos

    if (numero && numero > 0) {
        let numeros = '';
        for (let i = 1; i <= numero; i++) {
            numeros += i + '<br>';
        }
        resultado.innerHTML = numeros;
    } else {
        resultado.innerHTML = 'Por favor, ingrese un número válido mayor a 0.';
    }
}

function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = '';
}
