<?php
// Permite comunicación frontend-backend.
header("Access-Control-Allow-Origin: *");
//Todas las respuestas serán JSON.
header("Content-Type: application/json");

// API KEY CAL.COM

define("CAL_API_KEY", "cal_live_c68080189c99301df58c0b42d86e6121");
// URL API CAL.COM
define("CAL_API_URL", "https://api.cal.com/v2");
// ARCHIVO JSON
define("ARCHIVO_CITAS", "../data/citas.json");

?>