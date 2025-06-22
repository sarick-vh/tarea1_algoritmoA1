function ejecutar() {
    const palabra = "sol";
    let vocales = 0;
    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        if ("aeiou".includes(letra)) {
            vocales++;
        }
    }
    document.getElementById('resultado').innerText = `Vocales: ${vocales}`;
}

function limpiar() {
    document.getElementById('resultado').innerText = '';
}

function regresar() {
    window.location.href = 'menu.html'; // Cambia a la URL de tu menú
}
