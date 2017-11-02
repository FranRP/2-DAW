function tabla(){
	var columnas = prompt('Dime el número de columnas');
	var alto = prompt('Dime el alto');
	var ancho = prompt('Dime el ancho');
	document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
	document.write("<tr bgcolor= 'white' height='"+alto+"'>");
	for (numero = 1; numero < (columnas + 1); numero++) {
		if (numero % 2 != 0) {
			document.write("<td width='"+ancho+"' bgcolor='black'>&nbsp;</td>");
		} else {
			document.write("<td width='"+ancho+"' bgcolor='white'>&nbsp;</td>");
		}
	}
	document.write("</tr>");
	document.write("</table>");
}

//EJERCICIO 4.11 Y 4.12 JUNTOS

tabla();