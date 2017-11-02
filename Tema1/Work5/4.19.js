
function tabla(){
	var medida = parseInt(prompt('Dime las medidas'));
	var color = 1;
	document.write("<table border='0' cellspacing='2' bgcolor='black'>");
	for (i = 1; i < 9; i++) {
		document.write("<tr bgcolor= 'white' height='"+medida+"'>");	
		color++;
		for ( x = 1; x < 9; x++) {
			if (color % 2 != 0) {
				if (x % 2 != 0) {
					document.write("<td width='"+medida+"' bgcolor='black'>&nbsp;</td>");
				} else {
					document.write("<td width='"+medida+"' bgcolor='white'>&nbsp;</td>");
				}
			} else {
				if (x % 2 != 0) {
					document.write("<td width='"+medida+"' bgcolor='white'>&nbsp;</td>");
				} else {
					document.write("<td width='"+medida+"' bgcolor='black'>&nbsp;</td>");
				}
			}	
		}
		document.write("</tr>");

	}
	document.write("</table>");
}

tabla();




/*Una forma de poner condiciones, es la siguiente
	
	Otra forma ///// document.write('<td bgColor="'+(c%2 != r%2 ? color = 'black' : color = 'white')+'"width="50">&nbsp;</td>');
	


function Ajedrez() {
	var medida = parseInt(prompt('Dime las medidas'));
	document.write("<table border='0' cellspacing='2' bgcolor='black' width='1000'>");
	for (var c = 0; c < 9; c++) {
		document.write("<tr bgcolor= 'white' height='"+medida+"'>");
		for (var r = 0; r < 9; r++) {
			document.write('<td bgColor="'+((c + r)%2 == 0 ? color = 'black' : color = 'white')+'"width="50">&nbsp;</td>');
		}
	document.write('</tr>');		
	}
	document.write('</table>');
}

Ajedrez()
*/