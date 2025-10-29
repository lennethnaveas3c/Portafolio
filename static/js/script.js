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

// Cambia el fondo cuando el mouse pasa por encima
function resaltar(el) {
    el.style.backgroundColor = "#d9eff7"; // azul clarito
    el.style.transition = "background-color 0.3s ease";
}

// Vuelve al color original cuando el mouse sale
function quitarResaltado(el) {
    el.style.backgroundColor = "";
}
