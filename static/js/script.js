// Esperar que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los enlaces dentro de .nav-links
    const enlaces = document.querySelectorAll(".nav-links a");

    // Recorre cada enlace
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (evento) {
            evento.preventDefault(); // Evita el salto inmediato

            // Obtiene el id de destino (por ejemplo: #sobre-mi)
            const destino = document.querySelector(this.getAttribute("href"));

            // Si existe, hace scroll suave
            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth",  // desplazamiento suave
                    block: "start"       // alinea arriba
                });
            }
        });
    });
});


// ================== EFECTOS CON this ==================

// Efecto hover con JS
function resaltar(el) {
    el.style.backgroundColor = "#d9eff7";
    el.style.transition = "background-color 0.3s ease, transform 0.3s ease";
    el.style.transform = "scale(1.03)";
}

function quitarResaltado(el) {
    el.style.backgroundColor = "";
    el.style.transform = "scale(1)";
}

// Remover un elemento del DOM al hacer clic con confirmación
function eliminar(el) {
    const confirmacion = confirm("¿Seguro que deseas eliminar este proyecto?");
    if (confirmacion) {
        alert("El proyecto ha sido eliminado.");
        el.remove();
    } else {
        alert("Acción cancelada.");
    }
}



// Evento onchange del input de contacto
function nombreCambiado(el) {
    alert("Has cambiado el nombre a: " + el.value);
}
