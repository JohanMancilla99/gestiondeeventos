const ciSleectores = document.querySelectorAll(".ci-seleccionar");
let ciSeleccionados = []

ciSleectores.forEach(selector => {
    selector.addEventListener("click", () => {
        const id = selector.parentElement.parentElement.firstElementChild.innerHTML;
        selector.classList.toggle("ci-seleccionado")
        if (!ciSeleccionados.includes(id)) {
            ciSeleccionados.push(id)
        } else {
            ciSeleccionados.splice(ciSeleccionados.indexOf(id), 1)
        }
    })
})
