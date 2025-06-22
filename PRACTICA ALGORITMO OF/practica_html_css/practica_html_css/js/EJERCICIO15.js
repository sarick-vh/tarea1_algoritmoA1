function ejecutar() {
    const numerosDivisores = [6, 10];
    let divisoresResultado = '';
    for (let numero of numerosDivisores) {
        divisoresResultado += `Divisores de ${numero}: `;
        for (let d = 1; d <= numero; d++) {
            if (numero % d === 0) {
                divisoresResultado += d + ' ';
            }
        }
        divisoresResultado += '\n';
    }
    document.getElementById('resultado').innerText = divisoresResultado;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
