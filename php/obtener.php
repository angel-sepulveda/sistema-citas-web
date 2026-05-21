<?php

require_once "config.php";
// OBTENER CITAS
$citas = json_decode(
    file_get_contents(ARCHIVO_CITAS),
    true
);
// RETORNAR JSON
echo json_encode($citas);

?>