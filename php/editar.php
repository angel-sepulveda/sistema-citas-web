<?php

require_once "config.php";
// LEER JSON
$data = json_decode(
    file_get_contents("php://input"),
    true
);
// LEER CITAS
$citas = json_decode(
    file_get_contents(ARCHIVO_CITAS),
    true
);
// RECORRER
foreach($citas as &$cita){

    if($cita["id"] == $data["id"]){

        $cita["fecha"] = $data["fecha"];

        $cita["hora"] = $data["hora"];
    }
}
// GUARDAR
file_put_contents(
    ARCHIVO_CITAS,
    json_encode($citas, JSON_PRETTY_PRINT)
);
// RESPUESTA
echo json_encode([

    "ok" => true
]);

?>