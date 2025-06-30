function promedio() {
  const nums = [
    parseFloat(document.getElementById("a1").value),
    parseFloat(document.getElementById("a2").value),
    parseFloat(document.getElementById("a3").value),
    parseFloat(document.getElementById("a4").value),
    parseFloat(document.getElementById("a5").value)
  ];
  const prom = nums.reduce((a, b) => a + b, 0) / nums.length;
  document.getElementById("r1").innerText = `Promedio: ${prom}`;
}

function contarImpares() {
  const arr = document.getElementById("arrayImpares").value.split(",").map(Number);
  const impares = arr.filter(n => n % 2 !== 0).length;
  document.getElementById("r2").innerText = `Impares: ${impares}`;
}

function contarMayoresEdad() {
  const edades = document.getElementById("edades").value.split(",").map(Number);
  const mayores = edades.filter(e => e >= 18).length;
  document.getElementById("r3").innerText = `Mayores de edad: ${mayores}`;
}

function buscarValor() {
  const arr = document.getElementById("buscarArr").value.split(",");
  const val = document.getElementById("buscarVal").value;
  const existe = arr.includes(val);
  document.getElementById("r4").innerText = existe ? "Sí existe" : "No existe";
}

function concatenarPalabras() {
  const arr = document.getElementById("palabrasArr").value.split(",");
  document.getElementById("r5").innerText = arr.join(" ");
}

function cubosArreglo() {
  const arr = document.getElementById("numsCubos").value.split(",").map(Number);
  const cubos = arr.map(n => n ** 3);
  document.getElementById("r6").innerText = cubos.join(", ");
}

function tablaArreglo() {
  const arr = document.getElementById("numsTabla").value.split(",").map(Number);
  let result = "";
  arr.forEach(n => {
    for (let i = 1; i <= 10; i++) {
      result += `${n}x${i}=${n*i} | `;
    }
    result += "\n";
  });
  document.getElementById("r7").innerText = result;
}

function factorialArreglo() {
  const arr = document.getElementById("numsFact").value.split(",").map(Number);
  const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
  const res = arr.map(factorial);
  document.getElementById("r8").innerText = res.join(", ");
}

function paresEnNuevo() {
  const arr = document.getElementById("numsPares").value.split(",").map(Number);
  const pares = arr.filter(n => n % 2 === 0);
  document.getElementById("r9").innerText = pares.join(", ");
}

function sumarArreglos() {
  const a1 = document.getElementById("arr1").value.split(",").map(Number);
  const a2 = document.getElementById("arr2").value.split(",").map(Number);
  const suma = a1.map((n, i) => n + a2[i]);
  document.getElementById("r10").innerText = suma.join(", ");
}
