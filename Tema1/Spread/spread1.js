
//Ejercicio 1

/*
function sumar(){
	var suma = 0;
	for (x = 0;  x < arguments.length; x++) {
		suma = arguments[x] + suma;
	}
	document.write(suma);
}
		

sumar(9,10,44);
*/

function sumar(...args){
	var suma = 0;
	for (x = 0;  x < args.length; x++) {
		suma = args[x] + suma;
	}
	document.write(suma);
}

// sumar(1,1,23);




// Ejercicio 2

function sumarnumeros(...args) {
	var suma = 0;
	for (x = 0; x < args.length + 1; x++) {
		if (typeof (args[x]) == 'number') {
			suma = args[x] + suma;
			
		}
	}
	document.write(suma);
}

// sumarnumeros(1,2,3,'antonio');


//Ejercicio 3


function contador(...args) {
	var contador = args.length;
	document.write(contador);
}

// contador('asdf','fds','gfd', 5);


//Ejercicio 4

function concatenar(x,y) {
	var z = [x,...y];
	document.write(z);
}
// concatenar([1,2,3],[5,6,7]);


//Ejercicio 5

function valoresunicos(...args) {
	var lista = [];
	for (x=0; x < args.length; x++) {
		if (!lista.includes(args[x])) {
			lista.push(args[x]);
		}
	}
	return lista;
}


//Ejercicio 6

function concatenararray(...args) {
	var z = [];
	for (x=0; x < args.length; x++) {
		z.push(args[x]);
	}
	return z;
}

//Ejercicio 7

function cuadrados(...args) {
	let z = 0
	let y = 0
	for (x=0; x < args.length; x++) {
		z += args[x]**2;
	}
	return z;
}

cuadrados(1,2,3,4);