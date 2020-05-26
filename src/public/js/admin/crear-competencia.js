// en este archivo se retorna el id de los programas seleccionados

const ccSelectores = document.querySelectorAll(".cc-seleccionar-programa");
let ccSeleccionados = []

ccSelectores.forEach(selector => {
    selector.addEventListener("click", () => {
        const id = selector.parentElement.parentElement.firstElementChild.innerHTML;
        selector.classList.toggle("seleccionado")
        if (!ccSeleccionados.includes(id)) {
            ccSeleccionados.push(id)
        } else {
            ccSeleccionados.splice(ccSeleccionados.indexOf(id), 1)
        }
    })
})



