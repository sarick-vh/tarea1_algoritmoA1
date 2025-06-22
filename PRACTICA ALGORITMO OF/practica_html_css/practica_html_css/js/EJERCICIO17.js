function ejecutar() {
    const numerosDivisores = [6, 10, 28];
    let perfectoResultado = '';
    for (let numero of numerosDivisores) {
        let suma = 0;
        for (let d = 1; d < numero; d++) {
            if (numero % d === 0) {
                suma += d;
            }
        }
        if (suma === numero) {
            perfectoResultado += `${numero} es un número perfecto.\n`;
        } else {
            perfectoResultado += `${numero} NO es un número perfecto.\n`;
        }
    }
    document.getElementById('resultado').innerText = perfectoResultado;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
