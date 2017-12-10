
<?php
$variable = $_GET['s'];

$mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', 'noteimporta');
$sth = $mbd->prepare('SELECT poblacion from poblacion join provincia on poblacion.provinciaid = provincia.provinciaid Where provincia = :variable');
$sth->bindParam(':variable', $variable);
$sth->execute();
$resultado = $sth->fetchAll();
echo json_encode($resultado);

?>
