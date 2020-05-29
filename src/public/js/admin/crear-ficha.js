const contenedorFecha = document.querySelector(".cf-3-fecha");
const activador = document.querySelector(".cf-activador");

const fechaTraida = document.querySelector(".cf-3-fecha input");
const botonEnvio = document.querySelector(".cf-5 button")

botonEnvio.addEventListener("mouseover", () => {
    if (activador.classList.contains("desactivar")) {
        let fecha = new Date();
        let newDate = `${fecha.getFullYear()}-`
        let mes = fecha.getMonth() + 1
        let dia = fecha.getDate()
        if (mes < 10) {
            newDate += ("0" + mes.toString() + "-")
        } else {
            newDate += mes.toString() + "-"
        }
        if (dia < 10) {
            newDate += ("0" + dia.toString())
        } else {
            newDate += dia.toString()
        }
        fechaTraida.value = newDate;
    }
})

function tareas() {
    contenedorFecha.classList.toggle("desactivar-fecha");
    activador.classList.toggle("desactivar");
}

activador.addEventListener("click", tareas)

tareas();