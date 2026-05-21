<?php

require_once "config.php";

require_once "calcom.php";
// LEER JSON DEL FRONT
$data = json_decode(
    file_get_contents("php://input"),
    true
);
// OBTENER CITAS
$citas = json_decode(
    file_get_contents(ARCHIVO_CITAS),
    true
);
// GENERAR ID
$id = time();
// CREAR CITA
$nueva = [

    "id" => $id,

    "nombre" => $data["nombre"],

    "telefono" => $data["telefono"],

    "direccion" => $data["direccion"],

    "fecha" => $data["fecha"],

    "hora" => $data["hora"],

    "servicio" => $data["servicio"]
];
// GUARDAR EN CAL.COM
$calcom = crearEventoCal($nueva);
// AGREGAR AL ARRAY
$citas[] = $nueva;

file_put_contents(
    ARCHIVO_CITAS,
    json_encode($citas, JSON_PRETTY_PRINT)
);
// RESPUESTA
echo json_encode([

    "ok" => true,

    "mensaje" => "Cita guardada correctamente",

    "calcom" => $calcom
]);

?>