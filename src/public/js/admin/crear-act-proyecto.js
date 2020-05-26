const capSelectores = document.querySelectorAll(".cap-seleccionar");
let capseleccionados = []

capSelectores.forEach(selector => {
    selector.addEventListener("click", () => {
        const id = selector.parentElement.parentElement.firstElementChild.innerHTML;
        selector.classList.toggle("cap-seleccionado")
        if (!capseleccionados.includes(id)) {
            capseleccionados.push(id)
        } else {
            capseleccionados.splice(capseleccionados.indexOf(id), 1)
        }
        console.log(capseleccionados)
    })
})