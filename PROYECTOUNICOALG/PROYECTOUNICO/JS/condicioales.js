// Ejercicio 1: Clasificar por edad
function ejercicio1() {
    const edad = parseInt(document.getElementById('edad1').value);
    const resultado = document.getElementById('resultado1');
    
    if (isNaN(edad) || edad < 0) {
        resultado.innerHTML = "Por favor ingresa una edad válida";
        resultado.className = "result error";
        return;
    }
    
    let clasificacion;
    if (edad >= 0 && edad <= 12) {
        clasificacion = "niño";
    } else if (edad >= 13 && edad <= 17) {
        clasificacion = "adolescente";
    } else if (edad >= 18 && edad <= 59) {
        clasificacion = "adulto";
    } else {
        clasificacion = "adulto mayor";
    }
    
    resultado.innerHTML = `Con ${edad} años, eres ${clasificacion}`;
    resultado.className = "result success";
    
}

// Ejercicio 2: Comparar cuatro números
function ejercicio2() {
    const num1 = parseFloat(document.getElementById('num1_2').value);
    const num2 = parseFloat(document.getElementById('num2_2').value);
    const num3 = parseFloat(document.getElementById('num3_2').value);
    const num4 = parseFloat(document.getElementById('num4_2').value);
    const resultado = document.getElementById('resultado2');
    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        resultado.innerHTML = "Por favor ingresa todos los números";
        resultado.className = "result error";
        return;
    }
    
    if (num1 === num2 && num2 === num3 && num3 === num4) {
        resultado.innerHTML = "Todos los números son iguales";
    } else {
        const mayor = Math.max(num1, num2, num3, num4);
        resultado.innerHTML = `El número mayor es: ${mayor}`;
    }
    resultado.className = "result success";
}

// Ejercicio 3: Evaluar nota
function ejercicio3() {
    const nota = parseFloat(document.getElementById('nota3').value);
    const resultado = document.getElementById('resultado3');
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado.innerHTML = "Por favor ingresa una nota válida (0-10)";
        resultado.className = "result error";
        return;
    }
    
    let estado;
    if (nota >= 7) {
        estado = "APROBADO";
    } else if (nota >= 5) {
        estado = "SUPLETORIO";
    } else {
        estado = "REPROBADO";
    }
    
    resultado.innerHTML = `Con nota ${nota}: ${estado}`;
    resultado.className = "result success";
}

// Ejercicio 4: Día de la semana
function ejercicio4() {
    const dia = document.getElementById('dia4').value.toLowerCase().trim();
    const resultado = document.getElementById('resultado4');
    
    if (!dia) {
        resultado.innerHTML = "Por favor ingresa un día de la semana";
        resultado.className = "result error";
        return;
    }
    
    if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
        resultado.innerHTML = `${dia} es fin de semana`;
    } else if (dia === "lunes" || dia === "martes" || dia === "miércoles" || 
               dia === "miercoles" || dia === "jueves" || dia === "viernes") {
        resultado.innerHTML = `${dia} es entre semana`;
    } else {
        resultado.innerHTML = "Por favor ingresa un día válido";
        resultado.className = "result error";
        return;
    }
    resultado.className = "result success";
}

// Ejercicio 5: Clasificar temperatura
function ejercicio5() {
    const temp = parseFloat(document.getElementById('temp5').value);
    const resultado = document.getElementById('resultado5');
    
    if (isNaN(temp)) {
        resultado.innerHTML = "Por favor ingresa una temperatura válida";
        resultado.className = "result error";
        return;
    }
    
    let clima;
    if (temp < 15) {
        clima = "hace frío";
    } else if (temp >= 15 && temp <= 25) {
        clima = "está templado";
    } else {
        clima = "hace calor";
    }
    
    resultado.innerHTML = `Con ${temp}°C ${clima}`;
    resultado.className = "result success";
}

// Ejercicio 6: Saludo personalizado
function ejercicio6() {
    const nombre = document.getElementById('nombre6').value.trim();
    const genero = document.getElementById('genero6').value;
    const resultado = document.getElementById('resultado6');
    
    if (!nombre || !genero) {
        resultado.innerHTML = "Por favor ingresa tu nombre y selecciona tu género";
        resultado.className = "result error";
        return;
    }
    
    const saludo = genero === "masculino" ? "Bienvenido" : "Bienvenida";
    resultado.innerHTML = `${saludo} ${nombre}`;
    resultado.className = "result success";
}

// Ejercicio 7: Saludo según la hora
function ejercicio7() {
    const hora = parseInt(document.getElementById('hora7').value);
    const resultado = document.getElementById('resultado7');
    
    if (isNaN(hora) || hora < 0 || hora > 23) {
        resultado.innerHTML = "Por favor ingresa una hora válida (0-23)";
        resultado.className = "result error";
        return;
    }
    
    let saludo;
    if (hora >= 0 && hora <= 11) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora <= 17) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }
    
    resultado.innerHTML = `${saludo} (${hora}:00)`;
    resultado.className = "result success";
}

// Ejercicio 8: Calcular bono familiar
function ejercicio8() {
    const hijos = parseInt(document.getElementById('hijos8').value);
    const trabajo = document.getElementById('trabajo8').value;
    const resultado = document.getElementById('resultado8');
    
    if (isNaN(hijos) || hijos < 0 || !trabajo) {
        resultado.innerHTML = "Por favor completa todos los campos";
        resultado.className = "result error";
        return;
    }
    
    let bonoPorHijo = trabajo === "si" ? 50 : 30;
    let bonoTotal = hijos * bonoPorHijo;
    
    resultado.innerHTML = `Bono total: $${bonoTotal} (${hijos} hijos × $${bonoPorHijo})`;
    resultado.className = "result success";
}

// Ejercicio 9: Descuento por tipo de cliente
function ejercicio9() {
    const cliente = document.getElementById('cliente9').value;
    const gasto = parseFloat(document.getElementById('gasto9').value);
    const resultado = document.getElementById('resultado9');
    
    if (!cliente || isNaN(gasto) || gasto < 0) {
        resultado.innerHTML = "Por favor completa todos los campos";
        resultado.className = "result error";
        return;
    }
    
    let descuento = 0;
    if (cliente === "vip" && gasto > 100) {
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
    
    const montoDescuento = gasto * descuento;
    const subtotal = gasto - montoDescuento;
    const iva = subtotal * 0.15;
    const total = subtotal + iva;
    
    resultado.innerHTML = `
        Gasto inicial: ${gasto.toFixed(2)}<br>
        Descuento (${(descuento*100)}%): -${montoDescuento.toFixed(2)}<br>
        Subtotal: ${subtotal.toFixed(2)}<br>
        IVA (15%): +${iva.toFixed(2)}<br>
        Total a pagar: ${total.toFixed(2)}
    `;
    resultado.className = "result success";
}

// Ejercicio 10: Descuento por membresía
function ejercicio10() {
    const membresia = document.getElementById('membresia10').value;
    const compra = parseFloat(document.getElementById('compra10').value);
    const resultado = document.getElementById('resultado10');
    
    if (!membresia || isNaN(compra) || compra < 0) {
        resultado.innerHTML = "Por favor completa todos los campos";
        resultado.className = "result error";
        return;
    }
    
    let descuento, ivaRate;
    if (membresia === "si" && compra > 50) {
        descuento = 0.30;
        ivaRate = 0.15;
    } else {
        descuento = 0.05;
        ivaRate = 0.10;
    }
    
    const montoDescuento = compra * descuento;
    const subtotal = compra - montoDescuento;
    const iva = subtotal * ivaRate;
    const total = subtotal + iva;
    
    resultado.innerHTML = `
        Compra inicial: ${compra.toFixed(2)}<br>
        Descuento (${(descuento*100)}%): -${montoDescuento.toFixed(2)}<br>
        Subtotal: ${subtotal.toFixed(2)}<br>
        IVA (${(ivaRate*100)}%): +${iva.toFixed(2)}<br>
        Total a pagar: ${total.toFixed(2)}
    `;
    resultado.className = "result success";
}