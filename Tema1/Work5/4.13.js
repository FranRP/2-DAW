function tabla(){
	var columnas = parseInt(prompt('Dime el número de columnas'));
	var alto = prompt('Dime el alto');
	var ancho = prompt('Dime el ancho');
	var numero = 1;
	document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
	document.write("<tr bgcolor= 'white' height='"+alto+"'>");
	while (numero < columnas + 1) {
			document.write("<td width='"+ancho+"' bgcolor='white'>&nbsp;</td>");
			numero++;
		}
	document.write("</tr>");
	document.write("</table>");
}

tabla();