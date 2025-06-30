// Variables globales para ejercicios que requieren múltiples entradas
let nombresEjercicio8 = [];
let sumaEjercicio9 = 0;
let contadorEjercicio9 = 0;
let contadorEjercicio10 = 0;

// Ejercicio 1: Números del 1 al 10
function ejercicio1() {
    const resultado = document.getElementById('resultado1');
    let numeros = "";
    
    for (let i = 1; i <= 10; i++) {
        numeros += i + " ";
    }
    
    resultado.innerHTML = `Números del 1 al 10: ${numeros}`;
    resultado.className = "result success";
}

// Ejercicio 2: Tabla de multiplicar
function ejercicio2() {
    const numero = parseInt(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado2');
    
    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor ingresa un número válido";
        resultado.className = "result error";
        return;
    }
    
    let tabla = `Tabla de multiplicar del ${numero}:<br>`;
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} × ${i} = ${numero * i}<br>`;
    }
    
    resultado.innerHTML = tabla;
    resultado.className = "result success";
}

// Ejercicio 3: Suma de números naturales
function ejercicio3() {
    const n = parseInt(document.getElementById('numero3').value);
    const resultado = document.getElementById('resultado3');
    
    if (isNaN(n) || n < 1) {
        resultado.innerHTML = "Por favor ingresa un número válido mayor a 0";
        resultado.className = "result error";
        return;
    }
    
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    
    resultado.innerHTML = `La suma de los primeros ${n} números naturales es: ${suma}`;
    resultado.className = "result success";
}

// Ejercicio 4: Factorial
function ejercicio4() {
    const numero = parseInt(document.getElementById('numero4').value);
    const resultado = document.getElementById('resultado4');
    
    if (isNaN(numero) || numero < 0) {
        resultado.innerHTML = "Por favor ingresa un número válido mayor o igual a 0";
        resultado.className = "result error";
        return;
    }
    
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    
    resultado.innerHTML = `El factorial de ${numero} es: ${factorial}`;
    resultado.className = "result success";
}

// Ejercicio 5: Números pares del 1 al 50
function ejercicio5() {
    const resultado = document.getElementById('resultado5');
    let pares = "";
    
    for (let i = 2; i <= 50; i += 2) {
        pares += i + " ";
    }
    
    resultado.innerHTML = `Números pares del 1 al 50: ${pares}`;
    resultado.className = "result success";
}

// Ejercicio 6: Divisores usando while
function ejercicio6() {
    const numero = parseInt(document.getElementById('numero6').value);
    const resultado = document.getElementById('resultado6');
    
    if (isNaN(numero) || numero < 1) {
        resultado.innerHTML = "Por favor ingresa un número válido mayor a 0";
        resultado.className = "result error";
        return;
    }
    
    let divisores = "";
    let i = 1;
    while (i <= numero) {
        if (numero % i === 0) {
            divisores += i + " ";
        }
        i++;
    }
    
    resultado.innerHTML = `Los divisores de ${numero} son: ${divisores}`;
    resultado.className = "result success";
}

// Ejercicio 7: Fibonacci usando while
function ejercicio7() {
    const n = parseInt(document.getElementById('numero7').value);
    const resultado = document.getElementById('resultado7');
    
    if (isNaN(n) || n < 1) {
        resultado.innerHTML = "Por favor ingresa un número válido mayor a 0";
        resultado.className = "result error";
        return;
    }
    
    let fibonacci = "";
    let a = 0, b = 1;
    let count = 0;
    
    while (count < n) {
        if (count === 0) {
            fibonacci += a + " ";
        } else if (count === 1) {
            fibonacci += b + " ";
        } else {
            let siguiente = a + b;
            fibonacci += siguiente + " ";
            a = b;
            b = siguiente;
        }
        count++;
    }
    
    resultado.innerHTML = `Los primeros ${n} términos de Fibonacci son: ${fibonacci}`;
    resultado.className = "result success";
}

// Ejercicio 8: Contador de nombres hasta "Messi"
function ejercicio8() {
    const nombre = document.getElementById('nombre8').value.trim();
    const resultado = document.getElementById('resultado8');
    
    if (!nombre) {
        resultado.innerHTML = "Por favor ingresa un nombre";
        resultado.className = "result error";
        return;
    }
    
    nombresEjercicio8.push(nombre);
    
    if (nombre.toLowerCase() === "messi") {
        resultado.innerHTML = `¡Terminaste! Ingresaste ${nombresEjercicio8.length} nombres en total.<br>Nombres: ${nombresEjercicio8.join(", ")}`;
        resultado.className = "result success";
    } else {
        resultado.innerHTML = `Nombres ingresados hasta ahora: ${nombresEjercicio8.length}<br>Último: ${nombre}<br>(Escribe "Messi" para terminar)`;
        resultado.className = "result success";
    }
    
    document.getElementById('nombre8').value = "";
}

function reiniciarEjercicio8() {
    nombresEjercicio8 = [];
    document.getElementById('resultado8').innerHTML = "";
    document.getElementById('nombre8').value = "";
}

// Ejercicio 9: Suma hasta número negativo
function ejercicio9() {
    const numero = parseFloat(document.getElementById('numero9').value);
    const resultado = document.getElementById('resultado9');
    
    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor ingresa un número válido";
        resultado.className = "result error";
        return;
    }
    
    if (numero < 0) {
        resultado.innerHTML = `¡Terminaste! Ingresaste ${contadorEjercicio9} números positivos.<br>La suma total es: ${sumaEjercicio9}`;
        resultado.className = "result success";
    } else {
        sumaEjercicio9 += numero;
        contadorEjercicio9++;
        resultado.innerHTML = `Números ingresados: ${contadorEjercicio9}<br>Suma actual: ${sumaEjercicio9}<br>(Ingresa un número negativo para terminar)`;
        resultado.className = "result success";
    }
    
    document.getElementById('numero9').value = "";
}

function reiniciarEjercicio9() {
    sumaEjercicio9 = 0;
    contadorEjercicio9 = 0;
    document.getElementById('resultado9').innerHTML = "";
    document.getElementById('numero9').value = "";
}

// Ejercicio 10: Contador hasta 0
function ejercicio10() {
    const numero = parseFloat(document.getElementById('numero10').value);
    const resultado = document.getElementById('resultado10');
    
    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor ingresa un número válido";
        resultado.className = "result error";
        return;
    }
    
    if (numero === 0) {
        resultado.innerHTML = `¡Terminaste! Ingresaste ${contadorEjercicio10} números antes del 0.`;
        resultado.className = "result success";
    } else {
        contadorEjercicio10++;
        resultado.innerHTML = `Números ingresados: ${contadorEjercicio10}<br>Último número: ${numero}<br>(Ingresa 0 para terminar)`;
        resultado.className = "result success";
    }
    
    document.getElementById('numero10').value = "";
}

function reiniciarEjercicio10() {
    contadorEjercicio10 = 0;
    document.getElementById('resultado10').innerHTML = "";
    document.getElementById('numero10').value = "";
}