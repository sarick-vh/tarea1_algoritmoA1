function ejecutar() {
    const frutas = ["manzana", "banana", "uva"];
    let resultado = '';
    for (let i = 0; i < frutas.length; i++) {
        resultado += frutas[i] + ' ';
    }
    document.getElementById('resultado').innerText = `Frutas: ${resultado}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
