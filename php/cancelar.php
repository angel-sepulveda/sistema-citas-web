<?php

require_once "config.php";
// LEER ID
$data = json_decode(
    file_get_contents("php://input"),
    true
);
// OBTENER CITAS
$citas = json_decode(
    file_get_contents(ARCHIVO_CITAS),
    true
);
// FILTRAR
$nuevas = array_filter($citas,
    function($cita) use ($data){

        return $cita["id"] != $data["id"];
    }
);

// GUARDAR
file_put_contents(
    ARCHIVO_CITAS,
    json_encode(array_values($nuevas),
    JSON_PRETTY_PRINT)
);
// RESPUESTA
echo json_encode([

    "ok" => true
]);

?>