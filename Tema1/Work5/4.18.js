function tabla(){
	var columnas = parseInt(prompt('Dime el número de columnas'));
	var alto = parseInt(prompt('Dime el alto'));
	var ancho = parseInt(prompt('Dime el ancho'));
	var filas = parseInt(prompt('Dime el numero de filas papu'));
	document.write("<table border='0' cellspacing='2' bgcolor='black'");
	for (i = 1; i < (filas + 1); i++) {
		document.write("<tr bgcolor= 'white' height='"+alto+"'>");	
		for (numero = 1; numero < (columnas + 1); numero++) {
			document.write("<td width='"+ancho+"' bgcolor='white'>&nbsp;</td>");
		}
	}
	document.write("</tr>");
	document.write("</table>");
}

tabla();