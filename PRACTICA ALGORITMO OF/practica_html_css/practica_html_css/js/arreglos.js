function arreglos(){
   debugger
   let nombres = ["Juan", "Ana", "Pedro", "Maria"]; 
   //               0        1       2        3
   nombres[0] = "Pepe";
   nombres[4] = "Luis"; // Agregar un nuevo elemento al final
   let lon = nombres.length; // Obtener la longitud del arreglo
   nombres[lon] = "Carlos"; // Agregar otro elemento al final
   let nom = nombres[2]; // Asignar el valor del tercer elemento a la variable nom
   let numeros=[]
   alert(nombres)
   console.log(nombres);
   document.write(nombres[0] + "<br>") // Juan
   document.write(nombres[3] + "<br>") // Ana
   numeros[0] = 10;
   numeros[1] = 20;     
   numeros[2] = 30;
   numeros.push(40)// Agregar un nuevo elemento al final
   console.log(numeros); // [10, 20, 30, 40]
}
arreglos(); // Llamar a la función para ejecutar el código