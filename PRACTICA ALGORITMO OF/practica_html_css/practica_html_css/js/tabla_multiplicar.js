// script.js
document.addEventListener('DOMContentLoaded', () => {
    const btnPresentar = document.getElementById('btnPresentar');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const btnRegresar = document.getElementById('btnRegresar');
    const resultado = document.getElementById('resultado');
    const numeroInput = document.getElementById('numero');

    btnPresentar.addEventListener('click', () => {
        const numero = parseInt(numeroInput.value);
        if (!isNaN(numero)) {
            let tabla = `<h2>Tabla de multiplicar del ${numero}</h2>`;
            for (let i = 1; i <= 10; i++) {
                tabla += `<p>${numero} x ${i} = ${numero * i}</p>`;
            }
            resultado.innerHTML = tabla;
        } else {
            resultado.innerHTML = '<p>Por favor, ingrese un número válido.</p>';
        }
    });

    btnLimpiar.addEventListener('click', () => {
        numeroInput.value = '';
        resultado.innerHTML = '';
    });

    btnRegresar.addEventListener('click', () => {
        window.history.back();
    });
});
