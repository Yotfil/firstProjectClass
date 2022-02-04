'use strict'
var Numero1 = Number(prompt("Por favor ingrese un primer numero: "))
var Numero2 = Number(prompt("Por favor ingrese un segundo numero: "))
var suma = Numero1 + Numero2
var resta = Numero1 - Numero2
var multiplicacion = Numero1 * Numero2
var division = Numero1 / Numero2
/* var Resultado = "La suma es de los numeros es : " + Numero1+Numero2 + ", el resultado de la resta es: " + Numero1-Numero2 + ", El resultado de la multiplicacion es: " + Numero1*Numero2 + " y el resultado de la división es: " + Numero1/Numero2 + " Gracias por consultar, vuelva pronto."
 */

var resultado = "La suma de los numeros es : " + suma + ", la resta de los numeros es: " + resta + ", El resultado de la multiplicacion de ambos numeros es: " + multiplicacion + " y la división de los numeros es: " + division + " Gracias por consultar, vuelva pronto."

console.log(resultado)

var resultado2 = "La suma de los numeros es : " + (Numero1 + Numero2) + ", la resta de los numeros es: " + (Numero1 - Numero2) + ", El resultado de la multiplicacion de ambos numeros es: " + multiplicacion + " y la división de los numeros es: " + division + " Gracias por consultar, vuelva pronto."

console.log(resultado2 + "<br>")
console.log("La suma de " + Numero1 + " y " + Numero2 + " es: " + suma)
console.log("La resta de " + Numero1 + " y " + Numero2 + " es: " + resta)
console.log("La multiplicación de " + Numero1 + " y " + Numero2 + " es: " + multiplicacion)
console.log("La división de " + Numero1 + " y " + Numero2 + " es: " + division)
document.write(resultado + " " + resultado2 + "<br>")
document.write("La suma de " + Numero1 + " y " + Numero2 + " es: " + suma + "<br>")
document.write("La resta de " + Numero1 + " y " + Numero2 + " es: " + resta + "<br>")
document.write("La multiplicación de " + Numero1 + " y " + Numero2 + " es: " + multiplicacion + "<br>")
document.write("La división de " + Numero1 + " y " + Numero2 + " es: " + division + "<br>")
alert(resultado + "\n" + resultado2)
alert("La suma de " + Numero1 + " y " + Numero2 + " es: " + suma)
alert("La resta de " + Numero1 + " y " + Numero2 + " es: " + resta)
alert("La multiplicación de " + Numero1 + " y " + Numero2 + " es: " + multiplicacion)
alert("La división de " + Numero1 + " y " + Numero2 + " es: " + division)