document.getElementById('presentar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    let mayor;
    if (num1 > num2) {
        mayor = num1;
    } else {
        mayor = num2;
    }

    document.getElementById('result').textContent = mayor;
});

document.getElementById('limpiar').addEventListener('click', () => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = '';
});
