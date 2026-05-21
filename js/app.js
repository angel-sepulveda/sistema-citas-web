// URL Base de tu backend en InfinityFree
// Prueba cambiando la URL_BACKEND para que use HTTPS estricto o el archivo directo
const URL_BACKEND = "https://sistema-citas-api-backend.infinityfreeapp.com/";

// FORMULARIO
const form = document.getElementById("formCita");

if (form) {
    // GUARDAR CITA
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const datos = {
            id: Date.now(), // ID único basado en milisegundos para editar/borrar
            nombre: document.getElementById("nombre").value,
            telefono: document.getElementById("telefono").value,
            direccion: document.getElementById("direccion").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value,
            servicio: document.getElementById("servicio").value
        };

        try {
            const respuesta = await fetch(`${URL_BACKEND}guardar.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datos)
            });

            const resultado = await respuesta.json();
            
            const mensajeElemento = document.getElementById("mensaje");
            if (mensajeElemento) {
                mensajeElemento.innerHTML = resultado.mensaje;
            }

            form.reset();
            cargarCitas(); // Recargar la lista automáticamente

        } catch (error) {
            console.error("Error al guardar la cita:", error);
        }
    });
}

// LISTAR CITAS
async function cargarCitas() {
    const lista = document.getElementById("listaCitas");
    if (!lista) return;

    // Consultamos directamente el JSON público que está en InfinityFree
    const urlJson = `${URL_BACKEND}citas.json`;

    try {
        const respuesta = await fetch(urlJson);
        const citas = await respuesta.json();

        lista.innerHTML = "";

        citas.forEach(cita => {
            lista.innerHTML += `
                <div class="cita">
                    <h3>${cita.nombre}</h3>
                    <p><b>Teléfono:</b> ${cita.telefono}</p>
                    <p><b>Dirección:</b> ${cita.direccion}</p>
                    <p><b>Fecha:</b> ${cita.fecha}</p>
                    <p><b>Hora:</b> ${cita.hora}</p>
                    <p><b>Servicio:</b> ${cita.servicio}</p>
                    <button onclick="cancelarCita(${cita.id})">Cancelar</button>
                    <button onclick="reprogramar(${cita.id})">Reprogramar</button>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error al cargar las citas del servidor:", error);
        lista.innerHTML = "<p>No se pudieron cargar las citas.</p>";
    }
}

// CANCELAR
async function cancelarCita(id) {
    try {
        await fetch(`${URL_BACKEND}cancelar.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        });
        cargarCitas();
    } catch (error) {
        console.error("Error al cancelar la cita:", error);
    }
}

// REPROGRAMAR
async function reprogramar(id) {
    const fecha = prompt("Nueva fecha:");
    const hora = prompt("Nueva hora:");

    if (!fecha || !hora) return; 

    try {
        await fetch(`${URL_BACKEND}editar.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                fecha,
                hora
            })
        });
        cargarCitas();
    } catch (error) {
        console.error("Error al reprogramar la cita:", error);
    }
}

// INICIALIZACIÓN: Cargar citas automáticamente al abrir la página
window.addEventListener('DOMContentLoaded', cargarCitas);
