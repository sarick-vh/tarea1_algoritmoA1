function ejecutar() {
    const numerosDivisores = [6, 10];
    let sumaDivisoresResultado = '';
    for (let numero of numerosDivisores) {
        let suma = 0;
        for (let d = 1; d < numero; d++) {
            if (numero % d === 0) {
                suma += d;
            }
        }
        sumaDivisoresResultado += `Suma de divisores de ${numero}: ${suma}\n`;
    }
    document.getElementById('resultado').innerText = sumaDivisoresResultado;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
