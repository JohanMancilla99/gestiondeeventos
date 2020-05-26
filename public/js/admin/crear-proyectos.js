const cpySelectores = document.querySelectorAll(".cpy-seleccionar");
let cpyseleccionados = []

cpySelectores.forEach(selector => {
    selector.addEventListener("click", () => {
        const id = selector.parentElement.parentElement.firstElementChild.innerHTML;
        selector.classList.toggle("cpy-seleccionado")
        if (!cpyseleccionados.includes(id)) {
            cpyseleccionados.push(id)
        } else {
            cpyseleccionados.splice(cpyseleccionados.indexOf(id), 1)
        }
    })
})