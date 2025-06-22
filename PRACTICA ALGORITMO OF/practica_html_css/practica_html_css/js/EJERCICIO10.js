function ejecutar() {
    const frutas = ["manzana", "banana", "uva"];
    let i = 0;
    let resultado = '';
    while (i < frutas.length) {
        resultado += frutas[i] + ' ';
        i++;
    }
    document.getElementById('resultado').innerText = `Frutas: ${resultado}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
