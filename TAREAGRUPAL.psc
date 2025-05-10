funcion ejercicio5
	// Algoritmo: Comparar dos precios
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Leer los dos precios del usuario
	// Paso 4: Comparar los precios con condicionales
	// Paso 5: Mostrar si uno es mayor, menor o si son iguales
	// Paso 1: Declarar variables
    Definir precio1, precio2 Como Real
	
    // Paso 2: Inicializar variables
    precio1 <- 0
    precio2 <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese el precio del primer producto:"
    Leer precio1
    Escribir "Ingrese el precio del segundo producto:"
    Leer precio2
	
    // Paso 4: Comparar y mostrar resultados
    Si precio1 > precio2 Entonces
        Escribir "El primer producto es m�s caro."
    Sino
        Si precio2 > precio1 Entonces
            Escribir "El segundo producto es m�s caro."
        Sino
            Escribir "Ambos productos tienen el mismo precio."
        FinSi
    FinSi
FinFuncion

funcion ejercicio20
	// Algoritmo: Verificador de triple
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Leer los dos n�meros
	// Paso 4: Verificar si el segundo es igual a 3 veces el primero
	// Paso 5: Mostrar el resultado
	// Paso 1: Declarar variables
    Definir numero1, numero2 Como Real
	
    // Paso 2: Inicializar variables
    numero1 <- 0
    numero2 <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese el primer n�mero:"
    Leer numero1
    Escribir "Ingrese el segundo n�mero:"
    Leer numero2
	
    // Paso 4: Verificaci�n
    Si numero2 = numero1 * 3 Entonces
        Escribir "El segundo n�mero es el triple del primero."
    Sino
        Escribir "El segundo n�mero NO es el triple del primero."
    FinSi

FinFuncion

funcion ejercicio24
	// Algoritmo: Verificar si el car�cter es una vocal
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Leer letra
	// Paso 4: Convertir a min�scula para comparar
	// Paso 5: Verificar si es una vocal
	// Paso 6: Mostrar resultado
	// Paso 1: Declarar variables
    Definir letra Como Caracter
	
    // Paso 2: Inicializar variables
    letra <- ""
	
    // Paso 3: Leer letra
    Escribir "Ingrese una letra:"
    Leer letra
	
    // Paso 4: Convertir a min�scula para simplificar comparaci�n
    letra <- Minusculas(letra)
	
    // Paso 5: Verificar si es vocal
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        // Paso 6: Mostrar resultado si es vocal
        Escribir "Es una vocal."
    Sino
        // Paso 6: Mostrar resultado si NO es vocal
        Escribir "No es una vocal."
    FinSi
FinFuncion

funcion ejercicio15
	// Algoritmo: Calcular cambio con billetes de $10 y $5
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Leer monto del vuelto
	// Paso 4: Calcular cu�ntos billetes de 10 se pueden usar
	// Paso 5: Calcular el resto y cu�ntos billetes de 5 se necesitan
	// Paso 6: Mostrar resultado
	
	// Paso 1: Declarar variables
    Definir vuelto, billetes10, billetes5, resto Como Entero
	
    // Paso 2: Inicializar variables
    vuelto <- 0
    billetes10 <- 0
    billetes5 <- 0
    resto <- 0
	
    // Paso 3: Leer monto del vuelto
    Escribir "Ingrese el valor del vuelto (m�ltiplo de 5):"
    Leer vuelto
	
    // Paso 4: Calcular billetes de $10
    billetes10 <- Trunc(vuelto / 10)
	
    // Paso 5: Calcular resto y billetes de $5
    resto <- vuelto % 10
    Si resto >= 5 Entonces
        billetes5 <- 1
    FinSi
	
    // Paso 6: Mostrar resultados
    Escribir "Billetes de $10 necesarios: ", billetes10
    Escribir "Billetes de $5 necesarios: ", billetes5
FinFuncion

funcion ejercicio13
	// Algoritmo: Verificador de acceso
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Leer edad y dinero disponible
	// Paso 4: Verificar si cumple ambas condiciones (edad > 18 y dinero >= 1)
	// Paso 5: Mostrar si puede o no entrar
	// Paso 1: Declarar variables
    Definir edad Como Entero
    Definir dinero Como Real
	
    // Paso 2: Inicializar variables
    edad <- 0
    dinero <- 0
	
    // Paso 3: Leer datos del usuario
    Escribir "Ingrese su edad:"
    Leer edad
    Escribir "Ingrese el dinero que tiene ($):"
    Leer dinero
	
    // Paso 4: Verificar condiciones
    Si edad > 18 Y dinero >= 1 Entonces
        // Paso 5: Resultado
        Escribir "�Acceso permitido!"
    Sino
        Escribir "Acceso denegado. Requiere m�s edad o dinero."
    FinSi
FinFuncion

funcion ejercicio9
	// Algoritmo: Verificador de m�ltiplos
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Leer el n�mero desde teclado
	// Paso 4: Evaluar si es m�ltiplo de 3, 9 y/o 12 usando m�dulo
	// Paso 5: Mostrar resultados seg�n corresponda
	// Paso 1: Declarar variables
    Definir numero Como Entero
	
    // Paso 2: Inicializar variable
    numero <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese un n�mero:"
    Leer numero
	
    // Paso 4: Evaluaciones
    Si numero % 3 = 0 Entonces
        Escribir "Es m�ltiplo de 3."
    FinSi
	
    Si numero % 9 = 0 Entonces
        Escribir "Es m�ltiplo de 9."
    FinSi
	
    Si numero % 12 = 0 Entonces
        Escribir "Es m�ltiplo de 12."
    FinSi
	
    // Si no es m�ltiplo de ninguno
    Si (numero % 3 <> 0) Y (numero % 9 <> 0) Y (numero % 12 <> 0) Entonces
        Escribir "No es m�ltiplo de 3, 9 ni 12."
    FinSi
FinFuncion

Funcion ejercicio10
	// Algoritmo: Calculadora de propina
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Pedir el valor de la cuenta
	// Paso 4: Preguntar nivel de servicio
	// Paso 5: Calcular la propina seg�n el nivel
	// Paso 6: Calcular total a pagar
	// Paso 7: Mostrar la propina y el total
	// Paso 1: Declarar variables
    Definir cuenta, propina, total Como Real
    Definir servicio Como Cadena
	
    // Paso 2: Inicializar variables
    cuenta <- 0
    propina <- 0
    total <- 0
    servicio <- ""
	
    // Paso 3: Pedir valor de la cuenta
    Escribir "Ingrese el valor de la cuenta:"
    Leer cuenta
	
    // Paso 4: Preguntar el nivel de servicio
    Escribir "�C�mo fue el servicio? (bueno/regular):"
    Leer servicio
	
    // Paso 5: Calcular propina
    Si servicio = "bueno" Entonces
        propina <- cuenta * 0.15
    Sino
        Si servicio = "regular" Entonces
            propina <- cuenta * 0.10
        Sino
            Escribir "Nivel de servicio no v�lido. Se asumir� propina 0."
            propina <- 0
        FinSi
    FinSi
	
    // Paso 6: Calcular total a pagar
    total <- cuenta + propina
	
    // Paso 7: Mostrar resultados
    Escribir "Propina: $", propina
    Escribir "Total a pagar: $", total
FinFuncion

funcion ejercicio26
	// Algoritmo: Comparador de nombres
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Pedir los dos nombres
	// Paso 4: Comparar si son exactamente iguales
	// Paso 5: Mostrar resultado
	// Paso 1: Declarar variables
    Definir nombre1, nombre2 Como Cadena
	
    // Paso 2: Inicializar variables
    nombre1 <- ""
    nombre2 <- ""
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese el primer nombre:"
    Leer nombre1
    Escribir "Ingrese el segundo nombre:"
    Leer nombre2
	
    // Paso 4: Comparaci�n
    Si nombre1 = nombre2 Entonces
        Escribir "Los nombres son iguales."
    Sino
        Escribir "Los nombres son diferentes."
    FinSi
FinFuncion

funcion ejercicio14
	// Algoritmo: CalcularDescuento
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Pedir edad y monto
	// Paso 4: Verificar condiciones de edad y monto
	// Paso 5: Calcular y mostrar el total a pagar
	// Paso 1: Declarar variables
    Definir edad Como Entero
    Definir monto, total, iva, descuento Como Real
	
    // Paso 2: Inicializar variables
    edad <- 0
    monto <- 0
    total <- 0
    iva <- 0
    descuento <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese la edad del cliente:"
    Leer edad
    Escribir "Ingrese el monto de la compra:"
    Leer monto
	
    // Paso 4: Verificar condici�n
    Si edad > 60 Y monto > 50 Entonces
        // Descuento especial: se cobra sin impuestos ni descuentos
        total <- monto
        Escribir "Descuento especial aplicado. Total a pagar: $", total
    Sino
        // Aplicar IVA del 15%
        iva <- monto * 0.15
        total <- monto + iva
		
        // Aplicar descuento del 5%
        descuento <- total * 0.05
        total <- total - descuento
		
        Escribir "Total con IVA y descuento del 5%: $", total
    FinSi
FinFuncion

funcion ejercicio7
	
	// Algoritmo: VerificarParMultiplo10
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Leer n�mero
	// Paso 4: Verificar si es par usando mod
	// Paso 5: Verificar si es m�ltiplo de 10 usando divisi�n
	// Paso 6: Mostrar resultados
	
	// Paso 1: Declarar variables
    Definir numero, residuo Como Entero
	
    // Paso 2: Inicializar variables
    numero <- 0
    residuo <- 0
	
    // Paso 3: Leer n�mero
    Escribir "Ingrese un n�mero:"
    Leer numero
	
    // Paso 4: Verificar si es par usando mod
    Si numero mod 2 = 0 Entonces
        Escribir "El n�mero es par."
    Sino
        Escribir "El n�mero es impar."
    FinSi
	
    // Paso 5: Verificar si es m�ltiplo de 10 sin usar mod
    residuo <- numero - (Trunc(numero / 10) * 10)
	
    Si residuo = 0 Entonces
        Escribir "El n�mero es m�ltiplo de 10."
    Sino
        Escribir "El n�mero NO es m�ltiplo de 10."
    FinSi
FinFuncion

funcion ejercicio3
	//inicio
	//solicitar al usuario monto de compra
	//evaluar el monto
	//Si el monto es menor a 100 ? 0% de descuento
	//Si el monto es mayor o igual a 100 y menor a 500 ? 5% de descuento
	//Si el monto es mayor o igual a 500 ? 10% de descuento
	//calcular descuento y total a pagar
	//mostar resultado
	//fin
	
	// 1. Declarar variables
    Definir monto, descuento, totalPagar Como Real
	
    // 2. Inicializar variables
    descuento <- 0
    totalPagar <- 0
	
    // 3. Pedir al usuario el monto de compra
    Escribir "Ingrese el monto de la compra: "
    Leer monto
	
    // 4. Determinar el porcentaje de descuento
    Si monto < 100 Entonces
        descuento <- 0
    Sino
        Si monto >= 100 Y monto < 500 Entonces
            descuento <- monto * 0.05
        Sino
            descuento <- monto * 0.10
        FinSi
    FinSi
	
    // 5. Calcular el total a pagar
    totalPagar <- monto - descuento
	
    // 6. Mostrar resultados
    Escribir "Monto de compra: $", monto
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalPagar
FinFuncion


Funcion ejercicio22
	// Algoritmo: Clasificador de presi�n arterial
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Solicitar presi�n sist�lica
	// Paso 4: Evaluar rango con estructura condicional
	// Paso 5: Mostrar clasificaci�n
	// Paso 1: Declarar variables
    Definir presion Como Real
	
    // Paso 2: Inicializar variables
    presion <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese la presi�n sist�lica del cliente:"
    Leer presion
	
    // Paso 4: Clasificaci�n seg�n el valor
    Si presion < 90 Entonces
        Escribir "Clasificaci�n: Presi�n baja"
    Sino
        Si presion >= 90 Y presion <= 120 Entonces
            Escribir "Clasificaci�n: Presi�n normal"
        Sino
            Si presion >= 121 Y presion <= 139 Entonces
                Escribir "Clasificaci�n: Prehipertensi�n"
            Sino
                Escribir "Clasificaci�n: Hipertensi�n"
            FinSi
        FinSi
    FinSi
FinFuncion

funcion ejercicio1
	// Ejercicio 1: Calculadora de Vuelto
	
	// Paso 1: Mostrar mensaje de bienvenida
	// Paso 2: Pedir al usuario el costo del producto
	// Paso 3: Pedir al usuario el dinero recibido
	// Paso 4: Calcular la diferencia entre dinero recibido y costo
	// Paso 5: Si el dinero recibido es mayor o igual al costo
	//           - Mostrar el vuelto
	//         Si no
	//           - Mostrar mensaje de advertencia de dinero insuficiente
	// Declaraci�n e inicializaci�n de variables
	Definir costo, dinero_recibido, vuelto Como Real
	
	// Mostrar mensaje inicial
	Escribir "=== Calculadora de Vuelto ==="
	
	// Entrada de datos
	Escribir "Ingrese el costo del producto:"
	Leer costo
	
	Escribir "Ingrese el dinero recibido:"
	Leer dinero_recibido
	
	// C�lculo y decisi�n
	Si dinero_recibido >= costo Entonces
		vuelto <- dinero_recibido - costo
		Escribir "El vuelto es: $", vuelto
	Sino
		Escribir "El dinero recibido no es suficiente para pagar el producto."
	FinSi
FinFuncion

funcion ejercicio23
	// Ejercicio 23: Mostrar saludo personalizado
	
	// Paso 1: Mostrar mensaje de inicio
	// Paso 2: Pedir al usuario que ingrese su nombre
	// Paso 3: Guardar el nombre en una variable
	// Paso 4: Mostrar el saludo: �Hola, [nombre]!
	// Declaraci�n e inicializaci�n de variables
	Definir nombre Como Cadena
	
	// Mostrar mensaje de inicio
	Escribir "=== Programa de Saludo Personalizado ==="
	
	// Entrada de datos
	Escribir "Ingrese su nombre:"
	Leer nombre
	
	// Salida del saludo personalizado
	Escribir "�Hola, ", nombre, "!"
FinFuncion

Funcion ejercicio8
	// Algoritmo: Evaluador de puntuaci�n
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Leer puntuaci�n del usuario
	// Paso 4: Evaluar con condicionales seg�n el rango
	// Paso 5: Mostrar evaluaci�n correspondiente
	// Paso 1: Declarar variables
    Definir puntuacion Como Entero
	
    // Paso 2: Inicializar variables
    puntuacion <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese una puntuaci�n del 1 al 10:"
    Leer puntuacion
	
    // Paso 4: Evaluar y mostrar seg�n rango
    Si puntuacion >= 1 Y puntuacion <= 3 Entonces
        Escribir "Evaluaci�n: Malo"
    Sino
        Si puntuacion >= 4 Y puntuacion <= 6 Entonces
            Escribir "Evaluaci�n: Regular"
        Sino
            Si puntuacion >= 7 Y puntuacion <= 8 Entonces
                Escribir "Evaluaci�n: Bueno"
            Sino
                Si puntuacion >= 9 Y puntuacion <= 10 Entonces
                    Escribir "Evaluaci�n: Excelente"
                Sino
                    Escribir "Puntuaci�n no v�lida. Ingrese un n�mero entre 1 y 10."
                FinSi
            FinSi
        FinSi
    FinSi
FinFuncion

Funcion ejercicio30
	// Algoritmo: Contar y convertir frase a may�sculas
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Pedir frase al usuario
	// Paso 4: Usar funciones de cadena: Longitud() y Mayusculas()
	// Paso 5: Mostrar resultados
	// Paso 1: Declarar variables
    Definir frase, fraseMayuscula Como Cadena
    Definir cantidadCaracteres Como Entero
	
    // Paso 2: Inicializar variables
    frase <- ""
    fraseMayuscula <- ""
    cantidadCaracteres <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese una frase:"
    Leer frase
	
    // Paso 4: Procesamiento
    cantidadCaracteres <- Longitud(frase)
    fraseMayuscula <- Mayusculas(frase)
	
    // Paso 5: Mostrar resultados
    Escribir "Cantidad de caracteres: ", cantidadCaracteres
    Escribir "Frase en may�sculas: ", fraseMayuscula

FinFuncion

Funcion ejercicio12
	// Algoritmo: Clasificador de signo y operaci�n
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Pedir n�mero al usuario
	// Paso 4: Verificar si es positivo, negativo o cero
	// Paso 5: Ejecutar la acci�n correspondiente
	// Paso 6: Mostrar resultado
	// Paso 1: Declarar variables
    Definir numero, resultado Como Real
	
    // Paso 2: Inicializar variables
    numero <- 0
    resultado <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese un n�mero:"
    Leer numero
	
    // Paso 4 y 5: Clasificar y operar
    Si numero > 0 Entonces
        resultado <- numero * 2
        Escribir "El n�mero es positivo. Su doble es: ", resultado
    Sino
        Si numero < 0 Entonces
            resultado <- Abs(numero)
            Escribir "El n�mero es negativo. Convertido a positivo es: ", resultado
        Sino
            Escribir "El n�mero es neutro (cero)."
        FinSi
    FinSi
FinFuncion

Funcion ejercicio16
	// Algoritmo: Categorizador de d�a de la semana
	// Paso 1: Declarar variables
	// Paso 2: Inicializar variables
	// Paso 3: Pedir n�mero del 1 al 7
	// Paso 4: Validar y categorizar usando Segun
	// Paso 5: Mostrar el resultado
	// Paso 1: Declarar variables
    Definir numero Como Entero
	
    // Paso 2: Inicializar variable
    numero <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese un n�mero del 1 al 7:"
    Leer numero
	
    // Paso 4 y 5: Validar y mostrar d�a
    Segun numero Hacer
        1:
            Escribir "Lunes"
        2:
            Escribir "Martes"
        3:
            Escribir "Mi�rcoles"
        4:
            Escribir "Jueves"
        5:
            Escribir "Viernes"
        6:
            Escribir "S�bado"
        7:
            Escribir "Domingo"
        De Otro Modo:
            Escribir "Entrada no v�lida. Debe ser un n�mero entre 1 y 7."
    FinSegun
FinFuncion

Funcion ejercicio17 
	
	// Clasificador de producto por precio unitario
	//Pedir precio unitario y decir si es "econ?mico", "regular" o "caro "
	//Definir variables (precio unitario, clasificaci?n)
	//Solicitar y leer el precio unitario
	//Verificar que el precio sea positivo
	//Si el precio es v?lido entonces:
	// Si precio < 20 entonces: clasificaci?n = "econ?mico"
	//Sino si precio <= 50 entonces: clasificaci?n = "regular" Sino:
	//clasificaci?n = "caro" Fin S Mostrar la clasificaci?n
	definir productoUnitario Como Real
	definir cladificacion Como Caracter
	Escribir "CLASIFICADOR DE PRODUCTOS POR PRECIO UNITARIO"
    Escribir "Ingrese el precio unitario del producto (en $):"
    Leer precioUnitario
	//verifico que el precio sea unitario 
	Si precioUnitario <= 0 Entonces
        Escribir "Error: El precio debe ser mayor que cero."
    Sino
        // Clasificar el producto seg?n su precio
        Si precioUnitario < 20 Entonces
            clasificacion <- "econ?mico"
        Sino 
            Si precioUnitario <= 50 Entonces
                clasificacion <- "regular"
            Sino
                clasificacion <- "caro"
            FinSi
        FinSi
        
        // Mostrar el resultado de la clasificaci?n
        Escribir "El producto con precio unitario de $", precioUnitario, " se clasifica como: ", clasificacion
    FinSi
FinFuncion


funcion ejercicio2
	//entrada menu del usurio 
	definir opcion  Como Entero
	definir valor, resultado como real 
	escribir "convertir de kilometro a libras"
	escribir "convertir de libras a kilometros"
	escribir "ingrese su opcion " 
	//cuerpo realizar conversion segun la opcion elejida
	leer opcion 
	Si opcion = 1   Entonces
		escribir " la cantidad a kilometros"
		leer valor
		resultado <- valor * 2.20462
		escribir valor, "kilometros equivalen a", resultado, "libras"
	SiNo 
		si opcion = 2 Entonces
			Escribir "ingrese la cantidad a libras:"
			leer valor 
			resultado <- valor * 0.453592
			Escribir valor "libras equivalen a","resultado", "kilometros"
		sino 
			escribir "opcion no valida. debe ingresar 1 o 2"
		FinSi
		
	Fin Si
FinAlgoritmo

FinFuncion
funcion ejercicio19
	//entrada
	//definir las variables que me dan los datos del porblema
	definir horas, minutos, segund Como Real
	//solicitar la cantidad de horas al usuario
	// Solicitar la cantidad de horas al usuario
	Escribir "CONVERSOR DE HORAS A MINUTOS Y SEGUNDOS"
	Escribir "Ingrese la cantidad de horas:"
	Leer horas
	
	// Verificar que el valor sea v?lido (positivo)
	Si horas < 0 Entonces
		Escribir "Error: La cantidad de horas no puede ser negativa."
	Sino
		// Realizar las conversiones
		minutos <- horas * 60
		segundos <- horas * 3600
		
		// Mostrar los resultados
		Escribir horas, " hora(s) equivalen a:"
		Escribir "- ", minutos, " minuto(s)"
		Escribir "- ", segundos, " segundo(s)"
	FinSi
FinFuncion
funcion ejercicio4
	// Definici?n de variables
	Definir precioSinIVA, precioConIVA, precioFinal Como Real
	Definir porcentajeIVA, porcentajeDescuento Como Real
	
	// Establecer los porcentajes
	porcentajeIVA <- 0.15  // 15% de IVA
	porcentajeDescuento <- 0.30  // 30% de descuento
	
	// Solicitar el precio sin IVA
	Escribir "C?LCULO DE PRECIO CON IVA Y DESCUENTO"
	Escribir "Ingrese el precio sin IVA:"
	Leer precioSinIVA
	
	// Verificar que el precio sea v?lido
	Si precioSinIVA <= 0 Entonces
		Escribir "Error: El precio debe ser mayor que cero."
	Sino
		// Calcular precio con IVA
		precioConIVA <- precioSinIVA * (1 + porcentajeIVA)
		
		// Calcular precio final con descuento
		precioFinal <- precioConIVA * (1 - porcentajeDescuento)
		
		// Mostrar resultados
		Escribir "Resumen de la operaci?n:"
		Escribir "- Precio sin IVA: $", precioSinIVA
		Escribir "- IVA aplicado: ", porcentajeIVA * 100, "%"
		Escribir "- Precio con IVA: $", precioConIVA
		Escribir "- Descuento aplicado: ", porcentajeDescuento * 100, "%"
		Escribir "- PRECIO FINAL: $", precioFinal
	FinSi
FinFuncion
funcion ejercicio25
	// Definir variables (letra, esConsonante)
	//Solicitar y leer una letra
	//Convertir la letra a min?scula para facilitar la comparaci?n
	//Si la letra es una letra del alfabeto y no es una vocal entonces:
	//Es una consonante
	//Sino:
	//No es una consonante
	// Definici?n de variables
    Definir letra Como Caracter
    Definir esConsonante Como Logico
    
    // Solicitar una letra al usuario
    Escribir "DETECTOR DE CONSONANTES"
    Escribir "Ingrese una letra:"
    Leer letra
    
    // Convertir a min?scula para simplificar la comparaci?n
    letra <- Minusculas(letra)
    
    // Verificar si es una consonante
    // Una consonante es una letra que no es vocal (a,e,i,o,u)
	//// Solicitar una letra al usuario
	// Escribir "DETECTOR DE CONSONANTES"
    //Escribir "Ingrese una letra:"
    //Leer letra
    Si (letra >= "a" Y letra <= "z") Y NO (letra="a" O letra="e" O letra="i" O letra="o" O letra="u") Entonces
        esConsonante <- Verdadero
    Sino
        esConsonante <- Falso
    FinSi
    
    // Mostrar el resultado
	//Si (letra >= "a" Y letra <= "z") Y NO (letra="a" O letra="e" O letra="i" O letra="o" O letra="u") Entonces
	// esConsonante <- Verdadero
	// Sino
	// esConsonante <- Falso
    //FinSi
    
    // Mostrar el resultado
    //Si esConsonante Entonces
	// Escribir "La letra '", letra, "' ES una consonante."
    Si esConsonante Entonces
        Escribir "La letra :"+ letra+ " consonante."
    Sino
        Si letra >= "a" y letra <= "z" Entonces
            Escribir "La letra" + letra+  " NO es una consonante, es una vocal."
        Sino
            Escribir "El car?cter "+ letra+ " NO es una consonante ni una vocal."
        FinSi
    FinSi
FinFuncion
funcion ejercicio6
	//entrada 
	//  si la edad del ni?o es 0 < 12 es un ni?o 
	// leer que la edad sea de un ni?o si no saldria que no lo es 
	Escribir "ingrese la edad del ni?o ";
	Leer edad;
	//Proceso si la edad del adolescente es 13 < 17 es un joven  
	// si no seria incorrecto 
	Si edad   <  12   Entonces
		Escribir 	" es un ni?o"
	SiNo
		si edad > 0 Entonces
			
		FinSi
		escribir " no es un ni?o "	
	Fin Si
	
	escribir "ingrese la edad del adolescente";
	Leer edad;
	Si edad < 17  Entonces
		escribir 	" es joven"
	SiNo
		si edad > 13 Entonces
		finsi
		escribir " no es joven"
	Fin Si
	// si la edad de un adulto es 18 < 64 eso quiere decir que si lo es
	// si no es incorrecto
	escribir " ingresa la edad del adulto"
	leer edad;
	Si edad < 64   Entonces
		escribir " es un aulto"
	SiNo
		si edad > 18 Entonces
			
		FinSi
		escribir " no es un adulto"
	Fin Si
	escribir " ingrese la edad de un adulto meyor"
	leer edad 
	Si edad  < 65 Entonces 
	FinSi
	Escribir " es un adulto mayor";
	si edad > 100 entonces 
		escribir " no es un  adulto mayor"
	Fin Si
FinFuncion

funcion ejercicio11
	// Algoritmo: Clasificador de monto de compra
	
	// Paso 1: Declarar variables
	// - monto: n�mero real que representa el valor ingresado
	// - clasificacion: cadena que guarda el resultado ("baja", "media" o "alta")
	
	// Paso 2: Inicializar variables
	// - monto se inicializa en 0
	// - clasificacion se inicializa como cadena vac�a ""
	
	// Paso 3: Solicitar al usuario que ingrese el monto de la compra
	
	// Paso 4: Leer el valor del monto
	
	// Paso 5: Evaluar el valor ingresado
	// - Si monto < 10 entonces clasificacion = "baja"
	// - Si monto >= 10 y <= 30 entonces clasificacion = "media"
	// - Si monto > 30 entonces clasificacion = "alta"
	
	// Paso 6: Mostrar la clasificaci�n final al usuario
	
	
	// Declaraci�n e inicializaci�n de variables
	Definir monto Como Real
	Definir clasificacion Como Cadena
	
	monto <- 0
	clasificacion <- ""
	
	// Entrada de datos
	Escribir "Ingrese el monto de la compra:"
	Leer monto
	
	// Clasificaci�n del monto
	Si monto < 10 Entonces
		clasificacion <- "baja"
	Sino
		Si monto <= 30 Entonces
			clasificacion <- "media"
		Sino
			clasificacion <- "alta"
		FinSi
	FinSi
	
	// Salida
	Escribir "La clasificaci�n de la compra es: ", clasificacion
	
FinFuncion

funcion ejercicio18
	
	// Ejercicio 18: Determinador de bisiesto
	
	// Paso 1: Mostrar mensaje de inicio
	// Paso 2: Pedir al usuario que ingrese un a�o
	// Paso 3: Verificar si el a�o es divisible por 4 y no por 100, o si es divisible por 400
	// Paso 4: Si se cumple la condici�n, mostrar que el a�o es bisiesto
	//         Si no, mostrar que no es bisiesto
	// Declaraci�n e inicializaci�n de variables
	Definir anio Como Entero
	
	// Mostrar mensaje de inicio
	Escribir "=== Determinador de A�o Bisiesto ==="
	
	// Entrada de datos
	Escribir "Ingrese un a�o:"
	Leer anio
	
	// Evaluaci�n de condiciones seg�n las reglas:
	// 1. Es bisiesto si es divisible por 4 y no por 100, o si es divisible por 400
	Si (anio MOD 4 = 0 Y anio MOD 100 <> 0) O (anio MOD 400 = 0) Entonces
		Escribir "El a�o ", anio, " es bisiesto."
	Sino
		Escribir "El a�o ", anio, " no es bisiesto."
	FinSi
FinFuncion

Funcion ejercicio21
	// Algoritmo: Determinar riesgo por s�ntomas
	// Paso 1: Declarar variables
	// - fiebre, dificultadRespirar, dolorPecho: tipo cadena para las respuestas "SI" o "NO"
	// Paso 2: Inicializar variables
	// - fiebre, dificultadRespirar, dolorPecho se inicializan como cadena vac�a ""
	// Paso 3: Pedir los s�ntomas al usuario con preguntas "�Tiene...?"
	// Paso 4: Leer las respuestas
	// Paso 5: Evaluar si las tres respuestas son "SI"
	// - Si todas son "SI" -> Alto riesgo
	// - Sino -> Riesgo bajo o medio
	// Paso 6: Mostrar mensaje correspondiente
	// Paso 1: Declarar variables
    Definir fiebre, dificultadRespirar, dolorPecho Como Cadena
	
    // Paso 2: Inicializar variables
    fiebre <- ""
    dificultadRespirar <- ""
    dolorPecho <- ""
	
    // Paso 3: Entrada de datos
    Escribir "�Tiene fiebre? (SI/NO):"
    Leer fiebre
	
    Escribir "�Tiene dificultad para respirar? (SI/NO):"
    Leer dificultadRespirar
	
    Escribir "�Tiene dolor en el pecho? (SI/NO):"
    Leer dolorPecho
	
    // Paso 5: Evaluar riesgo
    Si (fiebre = "SI") Y (dificultadRespirar = "SI") Y (dolorPecho = "SI") Entonces
        Escribir "Alto riesgo: Derivar a emergencia"
    Sino
        Escribir "Riesgo bajo o medio"
    FinSi
FinFuncion

Funcion ejercicio27
	// Algoritmo: Verificar si una letra es may�scula o min�scula
	// Paso 1: Declarar variables
	// - letra: tipo cadena, contendr� la letra ingresada
	// - mayuscula, minuscula: tipo cadena, contendr�n la misma letra convertida
	// Paso 2: Inicializar variables
	// - letra <- ""
	// - mayuscula <- ""
	// - minuscula <- ""
	// Paso 3: Solicitar al usuario ingresar una letra
	// Paso 4: Leer la letra
	// Paso 5: Convertir la letra ingresada a may�scula y min�scula
	// - mayuscula <- Mayusculas(letra)
	// - minuscula <- Minusculas(letra)
	// Paso 6: Comparar letra original con sus versiones convertidas
	// - Si letra = mayuscula entonces es una letra may�scula
	// - Si letra = minuscula entonces es una letra min�scula
	// Paso 7: Mostrar el resultado
	
	// Paso 1: Declarar variables
    Definir letra, mayuscula, minuscula Como Cadena
	
    // Paso 2: Inicializar variables
    letra <- ""
    mayuscula <- ""
    minuscula <- ""
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese una letra:"
    Leer letra
	
    // Paso 5: Convertir a may�scula y min�scula
    mayuscula <- Mayusculas(letra)
    minuscula <- Minusculas(letra)
	
    // Paso 6: Verificar si es may�scula o min�scula
    Si letra = mayuscula Entonces
        Escribir "La letra es may�scula."
    Sino
        Si letra = minuscula Entonces
            Escribir "La letra es min�scula."
        Sino
            Escribir "El car�cter ingresado no es una letra."
        FinSi
    FinSi

FinFuncion

funcion ejercicio28
	// Algoritmo: Mostrar nombre completo del cliente
	// Paso 1: Declarar variables
	// - nombre: cadena, para el nombre del cliente
	// - apellido: cadena, para el apellido del cliente
	// - nombreCompleto: cadena, para guardar el nombre completo
	// Paso 2: Inicializar variables
	// - nombre <- ""
	// - apellido <- ""
	// - nombreCompleto <- ""
	// Paso 3: Solicitar al usuario que ingrese su nombre y apellido
	// Paso 4: Leer nombre y apellido
	// Paso 5: Concatenar nombre y apellido con un espacio en medio
	// - nombreCompleto <- nombre + " " + apellido
	// Paso 6: Mostrar el nombre completo
	// Paso 1: Declarar variables
    Definir nombre, apellido, nombreCompleto Como Cadena
	
    // Paso 2: Inicializar variables
    nombre <- ""
    apellido <- ""
    nombreCompleto <- ""
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese su nombre:"
    Leer nombre
	
    Escribir "Ingrese su apellido:"
    Leer apellido
	
    // Paso 5: Concatenar nombre completo
    nombreCompleto <- nombre + " " + apellido
	
    // Paso 6: Mostrar el resultado
    Escribir "Nombre completo del cliente: ", nombreCompleto

FinFuncion

Funcion ejercicio29
	// Algoritmo: Verificar si una palabra es corta o larga
	// Paso 1: Declarar variables
	// - palabra: cadena que almacena la palabra ingresada
	// - longitud: entero que almacena la cantidad de caracteres
	// Paso 2: Inicializar variables
	// - palabra <- ""
	// - longitud <- 0
	// Paso 3: Pedir al usuario que ingrese una palabra
	// Paso 4: Leer la palabra
	// Paso 5: Calcular la longitud de la palabra
	// - longitud <- Longitud(palabra)
	// Paso 6: Evaluar si es corta o larga
	// - Si longitud > 6 ? "Palabra larga"
	// - Si no ? "Palabra corta"
	// Paso 7: Mostrar el resultado
	// Paso 1: Declarar variables
    Definir palabra Como Cadena
    Definir tamano Como Entero
	
    // Paso 2: Inicializar variables
    palabra <- ""
    tamano <- 0
	
    // Paso 3: Entrada de datos
    Escribir "Ingrese una palabra:"
    Leer palabra
	
    // Paso 4: Calcular longitud
    tamano <- Longitud(palabra)
	
    // Paso 5: Evaluar si es corta o larga
    Si tamano > 6 Entonces
        Escribir "La palabra es larga."
    Sino
        Escribir "La palabra es corta."
    FinSi
FinFuncion



Algoritmo estructurasSelectivas
	Definir opcion1 Como entero
	repetir 
	Escribir "MENU EJERCICIOS"
	escribir "INGRESE UN OPCION DEL 1 AL 30"
	leer opcion1
	Segun opcion1 Hacer
		1:
			ejercicio1()
		2:
			ejercicio2()
		3:
			ejercicio3()
		4:
			ejercicio4()
		5:
			ejercicio5()
		6:
			ejercicio6()
		7:
			ejercicio7()
		8:
			ejercicio8()
		9:
			ejercicio9()
		10:
			ejercicio10()
		11:
			ejercicio11()
		12:
			ejercicio12()
		13:
			ejercicio13()
		14:
			ejercicio14()
		15:
			ejercicio15()
		16:
			ejercicio16()
		17:
			ejercicio17()
		18:
			ejercicio18()
		19:
			ejercicio19()
		20:
			ejercicio20()
		21:
			ejercicio21()
		22:
			ejercicio22()
		23:
			ejercicio23()
		24:
			ejercicio24()
		25:
			ejercicio25()
		26:
			ejercicio26()
		27:
			ejercicio27()
		28:
			ejercicio28()
		29:
			ejercicio29()
		30:
			ejercicio30()
		


		De Otro Modo:
			Escribir "la opcion que usted ha ingresado no se encuentra en la lista"
	Fin Segun
Hasta Que opcion1=0
	
	
	
FinAlgoritmo