
<?php
$variable = $_GET['s'];


$listaNombres = ['Perico','Pablo','Joaquin','Jota','Roberto','Ricardo'];

$hola = 'hh';
$adios = 'aa';
$nombre = [];

if (($variable == 'Pepe') || ($variable == 'Jose') || ($variable == 'Raul')) {
  foreach ($listaNombres as $name) {
     $variable = substr($variable,0,1);
     $longitud = strlen($variable);
     $variable2 = substr($name,0,1);
     if ($variable == $variable2) {
       $nombre[] = $name;
     }
  }
  echo '{
	       "validar": "si",
         "nombre": '.json_encode(array_values($nombre)).'
       }';

} else {
  echo '{
      	"validar": "no"
      }';
}

?>
