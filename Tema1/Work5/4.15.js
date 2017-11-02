
function juego() {
	var jugador = parseInt(prompt('Introduce el número que se debe adivinar'));
	var jugador2 = parseInt(prompt('Introduce el número a comprobar'));
	
	while (jugador != jugador2) {
		if (jugador > jugador2) {
			alert('El numero a adivinar es mayor');
			jugador2 = parseInt(prompt('Introduce otro número mayor'));
		} else if (jugador < jugador2) {
			alert('El numero a adivinar es menor');
			jugador2 = parseInt(prompt('Introduce otro número menor'));
		}
	}

	alert('HAS ACERTADO');
}

juego();
