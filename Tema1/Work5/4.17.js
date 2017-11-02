function tablas() {
	var numero = 1;
	var numero2 = 1;
	for (numero; numero < 11; numero++) {
		document.write('<h1>Tabla del '+numero+':</h1>');
		for (numero2; numero2 < 11; numero2++) {
			document.write(numero+' x '+numero2+' = '+numero * numero2);
			document.write('<br>');
		}
	var numero2 = 1;
	}
}

tablas()
		