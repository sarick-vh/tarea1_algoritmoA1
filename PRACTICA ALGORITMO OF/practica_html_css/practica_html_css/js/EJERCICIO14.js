function ejecutar() {
    const palabra1 = "casa";
    const palabra2 = "cosa";
    let comparacion = '';
    for (let i = 0; i < palabra1.length; i++) {
        comparacion += `¿Son iguales en posición ${i}? ${palabra1[i]} === ${palabra2[i]}: ${palabra1[i] === palabra2[i]} \n`;
    }
    document.getElementById('resultado').innerText = comparacion;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
