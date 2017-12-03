
<?php
$valorobtenido = $_GET['s'];

$mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', 'noteimporta');
$sth = $mbd->prepare('SELECT poblacion.lat, poblacion.lon, max(codigopostalid) as CodigoPostal FROM codigopostal JOIN poblacion on codigopostal.poblacionid = poblacion.poblacionid and codigopostal.provinciaid = poblacion.provinciaid JOIN provincia on provincia.provinciaid = poblacion.provinciaid  WHERE poblacion.poblacion = :valor');
$sth->bindParam(':valor', $valorobtenido);
$sth->execute();
$result = $sth->fetch(PDO::FETCH_ASSOC);
echo '{
       "CodigoPostal": '.$result['CodigoPostal'].',
       "Lat": '.$result['lat'].',
       "Lon": '.$result['lon'].'
     }';
?>
