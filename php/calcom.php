<?php

require_once "config.php";
// FUNCIÓN CREAR EVENTO
function crearEventoCal($datos){

// DATOS PARA API
    $body = [

        "start" => $datos["fecha"] . "T" . $datos["hora"] . ":00Z",

       

        "attendee" => [

            "name" => $datos["nombre"],

            "email" => "cliente@email.com",

            "timeZone" => "America/Bogota"
        ],
         "eventTypeId" => 5628178,
    ];

    // INICIAR CURL
    $curl = curl_init();

    curl_setopt_array($curl, [

        CURLOPT_URL => CAL_API_URL . "/bookings",
        
        CURLOPT_RETURNTRANSFER => true,

        CURLOPT_POST => true,

        CURLOPT_HTTPHEADER => [

            "Authorization: Bearer " . CAL_API_KEY,

            "Content-Type: application/json"
        ],

        CURLOPT_POSTFIELDS => json_encode($body)
    ]);
    // EJECUTAR
    $response = curl_exec($curl);
     // CERRAR
    curl_close($curl);
     // RETORNAR
    return json_decode($response, true);
}

?>