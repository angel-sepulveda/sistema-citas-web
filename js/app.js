// FORMULARIO
const form = document.getElementById("formCita");

// GUARDAR CITA
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const datos = {

        nombre:
            document.getElementById("nombre").value,

        telefono:
            document.getElementById("telefono").value,

        direccion:
            document.getElementById("direccion").value,

        fecha:
            document.getElementById("fecha").value,

        hora:
            document.getElementById("hora").value,

        servicio:
            document.getElementById("servicio").value
    };

    const respuesta = await fetch(
        "php/guardar.php",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify(datos)
        }
    );

    const resultado = await respuesta.json();

    document.getElementById("mensaje")
        .innerHTML = resultado.mensaje;

    form.reset();

    cargarCitas();
});

// LISTAR CITAS
async function cargarCitas(){

    const respuesta =
        await fetch("php/obtener.php");

    const citas = await respuesta.json();

    const lista =
        document.getElementById("listaCitas");

    lista.innerHTML = "";

    citas.forEach(cita => {

        lista.innerHTML += `

            <div class="cita">

                <h3>${cita.nombre}</h3>
                
                <h3>${cita.telefono}</h3>

                <h3>${cita.direccion}</h3>
                
                <p>${cita.fecha}</p>

                <p>${cita.hora}</p>

                <p>${cita.servicio}</p>

                <button onclick="cancelarCita(${cita.id})">

                    Cancelar

                </button>

                <button onclick="reprogramar(${cita.id})">

                    Reprogramar

                </button>

            </div>
        `;
    });
}

// CANCELAR
async function cancelarCita(id){

    await fetch("php/cancelar.php", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({id})
    });

    cargarCitas();
}

// REPROGRAMAR
async function reprogramar(id){

    const fecha = prompt("Nueva fecha");

    const hora = prompt("Nueva hora");

    await fetch("php/editar.php", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({

            id,
            fecha,
            hora
        })
    });

    cargarCitas();
}

// INICIO
cargarCitas();

// Función para traer las citas desde InfinityFree y mostrarlas
async function cargarCitas() {
    const urlJson = 'https://sistema-citas-api-backend.infinityfreeapp.com/citas.json';

    try {
        const respuesta = await fetch(urlJson);
        const listaDeCitas = await respuesta.json();
        
        console.log("Citas traídas del servidor:", listaDeCitas);
        
        // Aquí agregas tu lógica de JavaScript para pintar las citas en tu HTML
        // Ejemplo: el típico bucle forEach para crear elementos en pantalla.

    } catch (error) {
        console.error("Error al cargar las citas del servidor:", error);
    }
}

// Ejecutar la función apenas cargue la página web
window.addEventListener('DOMContentLoaded', cargarCitas);
