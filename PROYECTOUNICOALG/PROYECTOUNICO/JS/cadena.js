// Ejercicio 1: Contar letras
function ejercicio1() {
    const palabra = document.getElementById('palabra1').value.trim();
    const resultado = document.getElementById('resultado1');
    
    if (!palabra) {
        resultado.innerHTML = "Por favor ingresa una palabra";
        resultado.className = "result error";
        return;
    }
    
    resultado.innerHTML = `La palabra "${palabra}" tiene ${palabra.length} letras`;
    resultado.className = "result success";
}

// Ejercicio 2: Contar letra "a"
function ejercicio2() {
    const texto = document.getElementById('texto2').value.trim();
    const resultado = document.getElementById('resultado2');
    
    if (!texto) {
        resultado.innerHTML = "Por favor ingresa un texto";
        resultado.className = "result error";
        return;
    }
    
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    
    resultado.innerHTML = `La letra "a" aparece ${contador} veces en: "${texto}"`;
    resultado.className = "result success";
}

// Ejercicio 3: Invertir cadena
function ejercicio3() {
    const cadena = document.getElementById('cadena3').value.trim();
    const resultado = document.getElementById('resultado3');
    
    if (!cadena) {
        resultado.innerHTML = "Por favor ingresa texto para invertir";
        resultado.className = "result error";
        return;
    }
    
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }
    
    resultado.innerHTML = `Texto original: "${cadena}"<br>Texto invertido: "${invertida}"`;
    resultado.className = "result success";
}

// Ejercicio 4: Comparar longitud
function ejercicio4() {
    const texto1 = document.getElementById('texto1_4').value.trim();
    const texto2 = document.getElementById('texto2_4').value.trim();
    const resultado = document.getElementById('resultado4');
    
    if (!texto1 || !texto2) {
        resultado.innerHTML = "Por favor ingresa ambos textos";
        resultado.className = "result error";
        return;
    }
    
    let mensaje;
    if (texto1.length > texto2.length) {
        mensaje = `El primer texto tiene más letras (${texto1.length}) que el segundo (${texto2.length})`;
    } else if (texto2.length > texto1.length) {
        mensaje = `El segundo texto tiene más letras (${texto2.length}) que el primero (${texto1.length})`;
    } else {
        mensaje = `Ambos textos tienen la misma cantidad de letras (${texto1.length})`;
    }
    
    resultado.innerHTML = mensaje;
    resultado.className = "result success";
}

// Ejercicio 5: Mostrar iniciales
function ejercicio5() {
    const nombre = document.getElementById('nombre5').value.trim();
    const resultado = document.getElementById('resultado5');
    
    if (!nombre) {
        resultado.innerHTML = "Por favor ingresa tu nombre completo";
        resultado.className = "result error";
        return;
    }
    
    const palabras = nombre.split(' ');
    let iniciales = "";
    
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > 0) {
            iniciales += palabras[i][0].toUpperCase() + ".";
        }
    }
    
    resultado.innerHTML = `Nombre: "${nombre}"<br>Iniciales: ${iniciales}`;
    resultado.className = "result success";
}

// Ejercicio 6: Reemplazar "a" por "@"
function ejercicio6() {
    const texto = document.getElementById('texto6').value.trim();
    const resultado = document.getElementById('resultado6');
    
    if (!texto) {
        resultado.innerHTML = "Por favor ingresa un texto";
        resultado.className = "result error";
        return;
    }
    
    let textoModificado = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            textoModificado += '@';
        } else {
            textoModificado += texto[i];
        }
    }
    resultado.innerHTML = `Texto original: "${texto}"<br>Texto modificado: "${textoModificado}"`;
    resultado.className = "result success";
}