alert("toma ya");

document.write("me lo cargo");
/*Donde tengamos nuestro script, será donde document.write escribirá*/ 
console.log("escribir en la consola de JavaScript"); /*La consola no forma parte de la interfaz, si en la pagina pulsamos f12, vemos la consola*/

var a;
console.log("El valor de a is " + a); /*En este caso, a sería undefined, ya que no está definido*/

/*Se puede utilizar para declarar variables tanto var (global), como let(única en el ambito), como const (constante que no puede variar)*/
/* Ejercicios de la relacion 1, el 4, y de l relacion 2, 3 y 4*/

/*Ejercicio 4 RELACIÓN 1*/
var x = 4;
var a = 5;

console.log("El valor de la primera variable es " + x);
console.log("El valor de la segunda variable es " + a);
document.write("<p>El valor de la primera variable x es "+x+"</p>");
document.write("<p>El valor de la primera variable x es "+a+"</p>");

var z = x * a;
console.log("La multiplicación de ambas variables da como resultado: " + z);
document.write("<p>La multiplicacion de ambas variables da como resultado:  "+z+"</p>");

var z = x / a;
console.log("La división de ambas variables da como resultado: " + z);
document.write("<p>La division de ambas variables da como resultado:  "+z+"</p>");

var z = x + a;
console.log("La suma de ambas variables da como resultado: " + z);
document.write("<p>La suma de ambas variables da como resultado:  "+z+"</p>");

var z = x - a;
console.log("La resta de ambas variables da como resultado: " + z);
document.write("<p>La resta de ambas variables da como resultado:  "+z+"</p>");



/*EJERCICIO 3 RELACIÓN 2*/

var radio = 10;
var pi = 3.14;

/*Primero calculamos la circunferencia*/
var circunferencia = (2*pi) * radio;
console.log("La circunferencia mide: " + circunferencia +"cm");
document.write("<p>La circunferencia mide: "+circunferencia+"cm</p>");

/*Por último calculamos el Area*/
var area = pi * radio**2;
document.write("<p>El Area mide:  "+area+"cm</p>");



/*EJERCICIO 4 RELACIÓN 2*/

var celsius = 23;
var farenconv = (celsius * 1.8) + 32;
console.log(celsius+"ºC son "+farenconv+"ºF");
document.write("<p>"+celsius+"ºC son "+farenconv+"ºF</p>");

var faren = 65;
var celsiusconv = (faren - 32) * 0.56;
console.log(faren+"ºF son "+celsiusconv+"ºC");
document.write("<p>"+faren+"ºF son "+celsiusconv+"ºC</p>");

var prueba = '3 numeros'; //Si solo encuentra numeros, los suma, si encuentra algún tipo de caracter, solo será un string sin sumar números.
var prueba2 = ' 1 para probar'; //En javascript se concatena con + 
document.write("<p>"+prueba + prueba2+"</p>");



/*EJERCICIO 3 The Geometrizer RELACIÓN 3*/

function calcCircumfrence(radio) {
	var circunferencia = (2*pi) * radio
	return ("La circunferencia mide: "+circunferencia +"cm de circunferencia");
}

function calcArea(radio) {
	var area = pi * radio**2;
	return ("El area mide: "+area+"cm de area");
}


/*EJERCICIO 4 RELACIÓN 3*/

function celsiusToFahrenheit(celsius) {
	var farenconv = (celsius * 1.8) + 32;
	return (celsius+"ºC son "+farenconv+"ºF faren");
}
	
function fahrenheitToCelsius(fahrenheit) {
	var celsiusconv = (fahrenheit - 32) * 0.56;
	return (fahrenheit+"ºF son "+celsiusconv+"ºC celsius");
}


document.write(calcArea(30));
document.write("<br />");
document.write("<br />");
document.write(calcCircumfrence(30));
document.write("<br />");
document.write("<br />");
document.write(celsiusToFahrenheit(100));
document.write("<br />");
document.write("<br />");
document.write(fahrenheitToCelsius(100));
		
	
	
// EJERCICIO DE LA RELACION 4 TODOS, RELACION 5, 4.10, 4.11, 4.12
	
// Ejercicio 1 RELACION 4

function greaterNum(){
	var number1 = parseInt(prompt('Dame el primer numero'));
	var number2 = parseInt(prompt('Dame el segundo numero'));
	if (number1 < number2) {
		console.log(number2+" es mayor que "+number1);
	} else {
	console.log(number1+" es mayor que "+number2);
	}
}
	
greaterNum();
	

// Ejercicio 2 RELACION 4	
	
function helloWorld(){
	var idioma = prompt('Dime es, en, o de');
	switch (idioma) {
		case 'es':
			console.log("Hola mundo");
			break;
		case 'en':
			console.log("Hello world");
			break;
		case 'de':
			console.log("Hallo welt");
			break;
		default:
			console.log("No has puesto un idioma adecuado");
	}
}

helloWorld()
		
	
