// Solicitar el valor en grados Celsius
let celsius = prompt("Ingresa la temperatura en grados °C: ");

// Verificar si el valor ingresado es un número
while (isNaN(Number(celsius))) {
  alert("El valor ingresado no es un número. Intenta de nuevo.");
  celsius = prompt("Por favor ingresa el valor en °C: ");
}

// Convertir Fahrenheit a Celsius
let fahrenheit = (9 / 5) * Number(celsius) + 32;
// Convertir Kelvin a Celsius
let kelvin = Number(celsius) + 273.15;

// Mostrar los resultados
document.write("<p>Grados Fahrenheit: " + fahrenheit + "</p>");
document.write("<p>Grados Kelvin: " + kelvin + "</p>");