Proceso DivisionDeNumeros
    // Declarar variables
    Definir numero1, numero2, resultado Como Real
	
    // Solicitar los n�meros
    Escribir "Ingresa el primer n�mero:"
    Leer numero1
	
    Escribir "Ingresa el segundo n�mero (no puede ser 0):"
    Leer numero2
	
    // Validar que no se divida por cero
    Si numero2 <> 0 Entonces
        resultado <- numero1 / numero2
        Escribir "El resultado de la divisi�n es: ", resultado
    Sino
        Escribir "Error: No se puede dividir entre cero."
    FinSi
FinProceso
