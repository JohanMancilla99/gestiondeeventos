/*
    Funciones:
        Activar y desactivar toggle

    la idea es que si no se elige una fecha
    de creacion, se ponga la fecha actual
*/

const contenedorFecha = document.querySelector(".cf-3-fecha");
const activador = document.querySelector(".cf-activador");

function tareas() {
    contenedorFecha.classList.toggle("desactivar-fecha");
    activador.classList.toggle("desactivar");
}

activador.addEventListener("click", tareas)

tareas();