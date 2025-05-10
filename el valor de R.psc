Proceso EvaluarR
    // Declarar variables
    Definir R Como Logico
    Definir izquierda, derecha Como Logico
    Definir potencia, mod_resultado Como Entero
	
    // Calcular cada parte
    izquierda <- (8 > 2) O (932 < 23)
    potencia <- 2 ^ 2
    mod_resultado <- 4 Mod potencia
    derecha <- (mod_resultado = 2)
	
    // Evaluar expresión completa
    R <- izquierda Y derecha
	
    // Mostrar resultado
    Escribir "El valor de R es: ", R
FinProceso
