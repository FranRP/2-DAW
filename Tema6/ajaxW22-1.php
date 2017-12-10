
<?php


$mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', 'noteimporta');
$sth = $mbd->prepare('SELECT provincia FROM provincia');
$sth->execute();
$resultado = $sth->fetchAll();
echo json_encode($resultado);

?>
